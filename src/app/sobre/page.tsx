import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sou Sibelius | Sibelius Claussen",
  description:
    "Criador multidisciplinar movido pela experimentação. Fotografia, design, arte e palavra.",
};

export default function SobrePage() {
  return (
    <div className="px-8 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left — portrait */}
        <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
          <Image
            src="/images/retrato.jpg"
            alt="Sibelius Claussen"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right — bio text */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            <span className="text-gray-900">Sou Sibelius,</span>{" "}
            <span className="text-gray-400">
              criador multidisciplinar movido pela experimentação.
            </span>
          </h1>

          <p className="text-lg leading-relaxed text-gray-400">
            <span className="text-gray-900 font-medium">Fotografo</span>{" "}
            mínimos fragmentos do cotidiano e transformo descartes em
            matéria-prima para novos sentidos. Entre{" "}
            <span className="text-gray-900 font-medium">arte, design e texto,</span>{" "}
            cada processo é laboratório de descoberta:{" "}
            <span className="text-gray-900 font-medium">
              escolher materiais, testar técnicas e aceitar falhas como caminho.
            </span>
          </p>

          <p className="text-lg leading-relaxed text-gray-400">
            A urgência de experimentar guia meu trabalho,{" "}
            <span className="text-gray-900 font-medium">
              conectando o instante à responsabilidade humana.
            </span>
          </p>

          <p className="text-lg leading-relaxed text-gray-400">
            Aqui, revelo minha essência, um{" "}
            <span className="text-gray-900 font-medium">
              artista múltiplo, curioso e comprometido
            </span>{" "}
            <span className="text-gray-400">
              com a criação que questiona, transforma e conecta.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
