import type { Metadata } from "next";
import SobreClient from "@/components/SobreClient";

export const metadata: Metadata = {
  title: "Sobre / About | Sibelius Claussen",
  description:
    "Creative & Innovation Director at Redesenhe, Principal Product Designer with 14+ years in SaaS, Fintech, B2B, and material research in Teresópolis, Brazil.",
};

export default function SobrePage() {
  return <SobreClient />;
}
