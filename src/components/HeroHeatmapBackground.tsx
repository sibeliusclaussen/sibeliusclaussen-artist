"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, UI_TEXT } from "@/context/LocaleContext";

interface ColorTile {
  id: number; // Índice original (0..48) que define a cor verdadeira na transição
  targetRow: number;
  targetCol: number;
  hex: string;
  glowRgb: string;
  isAnchor: boolean;
}

const GRID_SIZE = 7; // 7x7 = 49 mega-quadradinhos

// 4 cantos cromáticos inspirados no espectro GitHub + I Love Hue:
const CORNER_TL = [230, 246, 228]; // #e6f6e4
const CORNER_TR = [132, 232, 122]; // #84e87a
const CORNER_BL = [86, 198, 188];  // #56c6bc
const CORNER_BR = [16, 92, 56];    // #105c38

function lerp(a: number, b: number, t: number): number {
  return Math.round(a + (b - a) * t);
}

function rgbToHex(rgb: number[]): string {
  return (
    "#" +
    rgb
      .map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0"))
      .join("")
  );
}

function buildSolvedTiles(): ColorTile[] {
  const list: ColorTile[] = [];
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      const id = r * GRID_SIZE + c;
      const u = c / (GRID_SIZE - 1);
      const v = r / (GRID_SIZE - 1);

      const rgb = [0, 1, 2].map((i) => {
        const top = lerp(CORNER_TL[i], CORNER_TR[i], u);
        const bottom = lerp(CORNER_BL[i], CORNER_BR[i], u);
        return lerp(top, bottom, v);
      });

      const isAnchor =
        (r === 0 && c === 0) ||
        (r === 0 && c === GRID_SIZE - 1) ||
        (r === GRID_SIZE - 1 && c === 0) ||
        (r === GRID_SIZE - 1 && c === GRID_SIZE - 1);

      list.push({
        id,
        targetRow: r,
        targetCol: c,
        hex: rgbToHex(rgb),
        glowRgb: `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`,
        isAnchor,
      });
    }
  }
  return list;
}

// Nível 1: Apenas 2 pares bem contrastantes trocados (92% de harmonia inicial)
const LEVEL_1_SWAPS: [number, number][] = [
  [8, 40],
  [12, 36],
];

function createLevel1Board(solved: ColorTile[]): ColorTile[] {
  const board = [...solved];
  for (const [idxA, idxB] of LEVEL_1_SWAPS) {
    const temp = board[idxA];
    board[idxA] = board[idxB];
    board[idxB] = temp;
  }
  return board;
}

// Cores da miniatura 3x3 do convite escondido
const MINI_GRID_COLORS = [
  "#e6f6e4",
  "#b5efaf",
  "#84e87a",
  "#9eded0",
  "#66b681",
  "#4aa259",
  "#56c6bc",
  "#277f64",
  "#105c38",
];

export default function HeroHeatmapBackground() {
  const { locale } = useLocale();
  const t = UI_TEXT[locale].hero;
  const containerRef = useRef<HTMLDivElement>(null);
  const solvedTiles = useMemo(() => buildSolvedTiles(), []);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [board, setBoard] = useState<ColorTile[]>(() =>
    createLevel1Board(solvedTiles)
  );
  const [level, setLevel] = useState<number>(1);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [draggedSlot, setDraggedSlot] = useState<number | null>(null);
  const [dragOverSlot, setDragOverSlot] = useState<number | null>(null);
  const [blinkingTileIds, setBlinkingTileIds] = useState<Set<number>>(
    new Set()
  );
  const [nudgingTileIds, setNudgingTileIds] = useState<Set<number>>(new Set());
  const [miniSparkIndex, setMiniSparkIndex] = useState<number>(4);

  const correctCount = useMemo(
    () => board.filter((tile, index) => tile.id === index).length,
    [board]
  );

  const harmonyPercent = useMemo(
    () => Math.round((correctCount / (GRID_SIZE * GRID_SIZE)) * 100),
    [correctCount]
  );

  const isFullySorted = correctCount === GRID_SIZE * GRID_SIZE;

  // Pulso discreto na miniatura 3x3 (convite escondido)
  useEffect(() => {
    if (isOpen) return;
    const interval = setInterval(() => {
      setMiniSparkIndex(Math.floor(Math.random() * 9));
    }, 2400);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Atalho de teclado 'G' para abrir/fechar o Modo Game e 'Escape' para sair
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.metaKey || e.ctrlKey) {
        return;
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setSelectedSlot(null);
      } else if (e.key.toLowerCase() === "g" && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const triggerBlink = useCallback((tileId: number, duration = 550) => {
    setBlinkingTileIds((prev) => {
      const next = new Set(prev);
      next.add(tileId);
      return next;
    });
    setTimeout(() => {
      setBlinkingTileIds((prev) => {
        const next = new Set(prev);
        next.delete(tileId);
        return next;
      });
    }, duration);
  }, []);

  const triggerHarmonyWave = useCallback(() => {
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        const id = r * GRID_SIZE + c;
        const delay = (r + c) * 45;
        setTimeout(() => {
          triggerBlink(id, 650);
        }, delay);
      }
    }
  }, [triggerBlink]);

  const swapSlots = useCallback(
    (slotA: number, slotB: number) => {
      if (slotA === slotB) return;
      if (board[slotA]?.isAnchor || board[slotB]?.isAnchor) return;

      setHasInteracted(true);
      setBoard((prev) => {
        const next = [...prev];
        const temp = next[slotA];
        next[slotA] = next[slotB];
        next[slotB] = temp;

        triggerBlink(next[slotA].id, 650);
        triggerBlink(next[slotB].id, 650);

        const nowSorted = next.every((tile, idx) => tile.id === idx);
        if (nowSorted) {
          setTimeout(() => triggerHarmonyWave(), 220);
        }

        return next;
      });
    },
    [board, triggerBlink, triggerHarmonyWave]
  );

  const startNextLevel = useCallback(
    (targetLevel: number) => {
      setSelectedSlot(null);
      setHasInteracted(true);
      setLevel(targetLevel);

      if (targetLevel === 1) {
        setBoard(createLevel1Board(solvedTiles));
        return;
      }

      const pairsToSwap =
        targetLevel === 2 ? 4 : targetLevel === 3 ? 7 : 10;

      const movableIndices = solvedTiles
        .map((tile, idx) => (tile.isAnchor ? -1 : idx))
        .filter((idx) => idx !== -1);

      const shuffledCandidates = [...movableIndices].sort(
        () => Math.random() - 0.5
      );
      const next = [...solvedTiles];

      for (let i = 0; i < pairsToSwap * 2 - 1; i += 2) {
        const idxA = shuffledCandidates[i];
        const idxB = shuffledCandidates[i + 1];
        if (idxA !== undefined && idxB !== undefined) {
          const tmp = next[idxA];
          next[idxA] = next[idxB];
          next[idxB] = tmp;
          triggerBlink(next[idxA].id, 500);
          triggerBlink(next[idxB].id, 500);
        }
      }

      setBoard(next);
    },
    [solvedTiles, triggerBlink]
  );

  const solveCurrentBoard = useCallback(() => {
    setSelectedSlot(null);
    setHasInteracted(true);
    setBoard([...solvedTiles]);
    setTimeout(() => triggerHarmonyWave(), 180);
  }, [solvedTiles, triggerHarmonyWave]);

  const handleAnchorClick = useCallback(() => {
    if (!isFullySorted) {
      solveCurrentBoard();
    } else {
      startNextLevel(level + 1);
    }
  }, [isFullySorted, level, solveCurrentBoard, startNextLevel]);

  const handleTileClick = useCallback(
    (slotIndex: number) => {
      const tile = board[slotIndex];
      if (!tile) return;

      if (tile.isAnchor) {
        handleAnchorClick();
        return;
      }

      if (selectedSlot === null) {
        setSelectedSlot(slotIndex);
        triggerBlink(tile.id, 450);
      } else if (selectedSlot === slotIndex) {
        setSelectedSlot(null);
      } else {
        swapSlots(selectedSlot, slotIndex);
        setSelectedSlot(null);
      }
    },
    [board, selectedSlot, handleAnchorClick, swapSlots, triggerBlink]
  );

  // Pulso periódico nas peças fora do lugar apenas quando o Modo Game está aberto
  useEffect(() => {
    if (!isOpen || isFullySorted) return;

    const interval = setInterval(() => {
      const misplacedIds = board
        .filter((tile, index) => tile.id !== index)
        .map((tile) => tile.id);

      if (misplacedIds.length === 0) return;

      setNudgingTileIds(new Set(misplacedIds));
      setTimeout(() => {
        setNudgingTileIds(new Set());
      }, 750);
    }, 2400);

    return () => clearInterval(interval);
  }, [board, isFullySorted, isOpen]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    containerRef.current.style.setProperty("--glow-opacity", "1");
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--glow-opacity", "0");
    }
    setDragOverSlot(null);
  }, []);

  return (
    <>
      {/* ─── CONVITE ESCONDIDO (EASTER EGG DISCRETO) ─── */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        title={`${t.puzzleTrigger} (G)`}
        aria-label={t.puzzleTrigger}
        className="group inline-flex items-center gap-2 py-1 px-2 -mr-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-gray-50"
      >
        {/* Miniatura 3x3 quase secreta que acende em verde ao passar o mouse */}
        <span className="grid grid-cols-3 gap-[2px] p-0.5">
          {MINI_GRID_COLORS.map((hex, idx) => {
            const isSparking = idx === miniSparkIndex;
            return (
              <span
                key={idx}
                className={`w-[4px] h-[4px] rounded-[1px] transition-all duration-500 ${
                  isSparking
                    ? "scale-125 opacity-100"
                    : "opacity-35 group-hover:opacity-100 group-hover:scale-105"
                }`}
                style={{
                  backgroundColor: hex,
                }}
              />
            );
          })}
        </span>

        {/* Texto silencioso que só ganha destaque no hover */}
        <span className="text-[11px] font-mono text-gray-300 group-hover:text-gray-600 transition-colors duration-200 lowercase tracking-normal">
          {t.puzzleTrigger}
        </span>
      </button>

      {/* ─── MODO FOCO / MODO GAME (OVERLAY ZEN CENTRALIZADO) ─── */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="color-game-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setIsOpen(false);
                  setSelectedSlot(null);
                }}
                className="fixed inset-0 z-50 bg-white/85 backdrop-blur-xl flex items-center justify-center p-6"
              >
                <style>{`
                  @keyframes hue-tile-blink {
                    0% {
                      filter: brightness(1.38) saturate(1.15);
                      transform: scale(1.12);
                    }
                    50% {
                      filter: brightness(1.18);
                      transform: scale(0.97);
                    }
                    100% {
                      filter: brightness(1);
                      transform: scale(1);
                    }
                  }
                  @keyframes misplaced-call-nudge {
                    0%, 100% {
                      transform: scale(1);
                    }
                    40% {
                      transform: scale(1.09) translateY(-2px);
                    }
                    70% {
                      transform: scale(0.98);
                    }
                  }
                  .hue-blinking {
                    animation: hue-tile-blink 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                  }
                  .hue-nudging {
                    animation: misplaced-call-nudge 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                  }
                `}</style>

                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label={t.puzzleTrigger}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="relative origin-center flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white/90 border border-gray-100 shadow-2xl select-none"
                  style={
                    {
                      "--mouse-x": "50%",
                      "--mouse-y": "50%",
                      "--glow-opacity": "0",
                    } as React.CSSProperties
                  }
                >
                  {/* ─── EFEITO BLUR SUAVE POR DETRÁS DO MOSAICO ─── */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-8 overflow-visible"
                  >
                    <div
                      className="absolute inset-6 rounded-3xl blur-3xl opacity-40 transition-opacity duration-500"
                      style={{
                        background:
                          "conic-gradient(from 135deg at 50% 50%, #84e87a 0deg, #105c38 110deg, #56c6bc 230deg, #e6f6e4 360deg)",
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-300"
                      style={{
                        opacity: "var(--glow-opacity, 0)",
                        background:
                          "radial-gradient(240px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(74, 222, 128, 0.4), transparent 75%)",
                      }}
                    />
                  </div>

                  {/* ─── BARRA SUPERIOR DO MODO GAME ─── */}
                  <div className="relative z-10 w-full flex items-center justify-between gap-4 mb-5 text-[11px] font-mono text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900 font-medium">
                        {t.puzzleTrigger}
                      </span>
                      <span>·</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4].map((lvl) => (
                          <button
                            key={lvl}
                            type="button"
                            onClick={() => startNextLevel(lvl)}
                            className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                              level === lvl
                                ? "bg-gray-900 text-white font-medium"
                                : "text-gray-400 hover:text-gray-900"
                            }`}
                          >
                            {lvl}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedSlot(null);
                      }}
                      className="text-gray-400 hover:text-gray-950 transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>{t.puzzleClose}</span>
                      <span className="text-[10px] text-gray-300">[esc]</span>
                    </button>
                  </div>

                  {/* ─── GRADE 7x7 DE TRANSIÇÃO DE CORES ─── */}
                  <div
                    role="grid"
                    aria-label="Interactive color transition mosaic"
                    className="relative z-10 grid grid-cols-7 gap-2.5 sm:gap-3"
                  >
                    {board.map((tile, slotIndex) => {
                      const isSelected = selectedSlot === slotIndex;
                      const isDragOver =
                        dragOverSlot === slotIndex &&
                        draggedSlot !== slotIndex;
                      const isBlinking = blinkingTileIds.has(tile.id);
                      const isNudging =
                        nudgingTileIds.has(tile.id) && !isSelected;
                      const isMisplaced = tile.id !== slotIndex;

                      return (
                        <motion.button
                          key={tile.id}
                          layout
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 30,
                          }}
                          type="button"
                          draggable={!tile.isAnchor}
                          onDragStart={() => {
                            if (!tile.isAnchor) {
                              setDraggedSlot(slotIndex);
                              setSelectedSlot(null);
                            }
                          }}
                          onDragOver={(e) => {
                            if (!tile.isAnchor && draggedSlot !== null) {
                              e.preventDefault();
                              setDragOverSlot(slotIndex);
                            }
                          }}
                          onDragLeave={() => {
                            if (dragOverSlot === slotIndex) {
                              setDragOverSlot(null);
                            }
                          }}
                          onDrop={(e) => {
                            e.preventDefault();
                            if (
                              draggedSlot !== null &&
                              draggedSlot !== slotIndex &&
                              !tile.isAnchor
                            ) {
                              swapSlots(draggedSlot, slotIndex);
                            }
                            setDraggedSlot(null);
                            setDragOverSlot(null);
                          }}
                          onDragEnd={() => {
                            setDraggedSlot(null);
                            setDragOverSlot(null);
                          }}
                          onMouseEnter={() => triggerBlink(tile.id, 500)}
                          onClick={() => handleTileClick(slotIndex)}
                          aria-label={`Color tile ${slotIndex + 1}`}
                          className={`relative w-9 h-9 sm:w-11 sm:h-11 rounded-[8px] flex items-center justify-center transition-transform duration-150 focus:outline-none ${
                            tile.isAnchor
                              ? "cursor-pointer"
                              : "cursor-grab active:cursor-grabbing"
                          } ${
                            isBlinking
                              ? "hue-blinking z-20"
                              : isNudging
                              ? "hue-nudging z-20"
                              : "hover:scale-110 hover:z-20"
                          } ${
                            isSelected
                              ? "scale-115 z-30 ring-2 ring-gray-900 shadow-lg"
                              : isDragOver
                              ? "scale-110 z-20 ring-2 ring-gray-900/50"
                              : isMisplaced
                              ? "ring-1 ring-gray-900/20"
                              : ""
                          }`}
                          style={{
                            backgroundColor: tile.hex,
                            boxShadow: isBlinking
                              ? `0 0 22px rgba(${tile.glowRgb}, 0.85), inset 0 1px 0 rgba(255,255,255,0.45)`
                              : isMisplaced
                              ? `0 4px 10px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.45)`
                              : `0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.35)`,
                          }}
                        >
                          {tile.isAnchor && (
                            <span
                              className={`w-1.5 h-1.5 rounded-full transition-transform duration-200 ${
                                tile.targetRow === GRID_SIZE - 1 &&
                                tile.targetCol === GRID_SIZE - 1
                                  ? "bg-white/70"
                                  : "bg-gray-900/35"
                              }`}
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* ─── BARRA INFERIOR DE PROGRESSO E NÍVEIS ─── */}
                  <div className="relative z-10 w-full mt-5 flex flex-col gap-2">
                    <div className="w-full h-[2px] bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-500 ease-out rounded-full"
                        style={{
                          width: `${harmonyPercent}%`,
                          background:
                            "linear-gradient(90deg, #56c6bc 0%, #40c463 55%, #105c38 100%)",
                        }}
                      />
                    </div>

                    <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-gray-400">
                      <div className="flex items-center gap-1.5 truncate">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            isFullySorted
                              ? "bg-emerald-500 animate-pulse"
                              : "bg-amber-400/80"
                          }`}
                        />
                        {isFullySorted ? (
                          <span className="text-emerald-700 font-medium">
                            100% {t.puzzleComplete}
                          </span>
                        ) : !hasInteracted && level === 1 ? (
                          <span>
                            {t.puzzleHarmony} {harmonyPercent}% ·{" "}
                            {t.puzzleHint}
                          </span>
                        ) : (
                          <span>
                            {t.puzzleLevel} {level} · {t.puzzleHarmony}{" "}
                            {harmonyPercent}%
                          </span>
                        )}
                      </div>

                      {isFullySorted ? (
                        <button
                          type="button"
                          onClick={() => startNextLevel(level + 1)}
                          className="text-gray-900 hover:text-emerald-700 font-medium transition-colors cursor-pointer shrink-0 inline-flex items-center gap-1"
                        >
                          <span>
                            {t.puzzleNextLevel} {level + 1}
                          </span>
                          <span aria-hidden="true">→</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={solveCurrentBoard}
                          className="text-gray-400 hover:text-gray-900 transition-colors cursor-pointer shrink-0"
                        >
                          {t.puzzleSolve} ✦
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
