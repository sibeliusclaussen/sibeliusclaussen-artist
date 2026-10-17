"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type PersonaMode = "product" | "artist";

interface PersonaContextType {
  persona: PersonaMode;
  setPersona: (mode: PersonaMode) => void;
  togglePersona: () => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const [persona, setPersonaState] = useState<PersonaMode>("product");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // 1. Check URL query parameters (?mode=product | ?mode=artist)
    const params = new URLSearchParams(window.location.search);
    const modeParam = params.get("mode");

    if (modeParam === "artist" || modeParam === "product") {
      setPersonaState(modeParam);
      localStorage.setItem("sibelius_persona_mode", modeParam);
    } else {
      // 2. Check localStorage
      const saved = localStorage.getItem("sibelius_persona_mode");
      if (saved === "artist" || saved === "product") {
        setPersonaState(saved);
      } else {
        // Default to product
        setPersonaState("product");
      }
    }
    setIsInitialized(true);
  }, []);

  const setPersona = (mode: PersonaMode) => {
    setPersonaState(mode);
    localStorage.setItem("sibelius_persona_mode", mode);

    // Update query param in URL without full page reload
    const url = new URL(window.location.href);
    url.searchParams.set("mode", mode);
    window.history.replaceState({}, "", url.toString());
  };

  const togglePersona = () => {
    const next = persona === "product" ? "artist" : "product";
    setPersona(next);
  };

  return (
    <PersonaContext.Provider value={{ persona, setPersona, togglePersona }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error("usePersona must be used within a PersonaProvider");
  }
  return context;
}
