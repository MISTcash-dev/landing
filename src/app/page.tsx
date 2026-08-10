import type { Metadata } from "next";
import HeroSection from "@/components/landing/HeroSection";
import ProtocolShowcase from "@/components/landing/ProtocolShowcase";
import ArchitectureSection from "@/components/landing/ArchitectureSection";
import ProofPointsSection from "@/components/landing/ProofPointsSection";
import CompetitiveTable from "@/components/landing/CompetitiveTable";
import BlogPreview from "@/components/landing/BlogPreview";
import SignalSection from "@/components/landing/SignalSection";
import CTASection from "@/components/landing/CTASection";

export const metadata: Metadata = {
  title: "MIST — Privacy infrastructure by your rules",
  description:
    "Privacy infrastructure for private asset transfers, partner-defined payment controls, and selective disclosure.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProtocolShowcase />
      <ArchitectureSection />
      <ProofPointsSection />
      <CompetitiveTable />
      <BlogPreview />
      <SignalSection />
      <CTASection />
    </>
  );
}
