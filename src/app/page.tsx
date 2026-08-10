import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProtocolShowcase from "@/components/landing/ProtocolShowcase";
import ArchitectureSection from "@/components/landing/ArchitectureSection";
import ProofPointsSection from "@/components/landing/ProofPointsSection";
import CompetitiveTable from "@/components/landing/CompetitiveTable";
import BlogPreview from "@/components/landing/BlogPreview";
import SignalSection from "@/components/landing/SignalSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "MIST — Privacy infrastructure by your rules",
  description:
    "A multi-chain privacy framework for blockchain payments. Programmable ZK-proof protocol for private, auditable, compliant transfers across chains.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProtocolShowcase />
        <ArchitectureSection />
        <ProofPointsSection />
        <CompetitiveTable />
        <BlogPreview />
        <SignalSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
