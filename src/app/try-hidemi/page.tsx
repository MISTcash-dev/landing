import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import TrustSection from "@/components/landing/TrustSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CompetitiveTable from "@/components/landing/CompetitiveTable";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import Image from "next/image";
import Link from "next/link";
import MouseTracker from "@/components/MouseTracker";

export const metadata: Metadata = {
	title: "Try Hidemi — Private USDC Transfers by MIST.cash",
	description:
		"Send and receive USDC privately across 6 blockchains. No transaction history, no wallet tracking. Powered by ZK proofs. Free to use.",
	openGraph: {
		title: "Try Hidemi — Private USDC Transfers by MIST.cash",
		description:
			"Your wallet is a window. Everyone's watching. Hidemi lets you send and receive USDC privately across chains — powered by ZK proofs.",
		url: "https://mist.cash/try-hidemi",
		type: "website",
		siteName: "MIST.cash",
	},
	twitter: {
		card: "summary_large_image",
		title: "Try Hidemi — Private USDC Transfers",
		description:
			"Send USDC privately across 6 chains. No history. No tracking. Powered by ZK proofs.",
		site: "@_mistcash",
	},
};

export default function Home() {
	return (
		<div className="min-h-screen scroll-smooth">
			<MouseTracker />
			<Navbar branding={<Link href="/try-hidemi" className="flex items-center gap-2.5">
				<Image
					src="/logo-hidemi-full.svg"
					alt="MIST Hidemi"
					width={200}
					height={28}
					className="h-9 opacity-80"
				/>
			</Link>} />
			<main id="main-content">
				<HeroSection />
				<ProblemSection />
				<SolutionSection />
				{/* <PrivacySection /> */}
				<TrustSection />
				<TestimonialsSection />
				<CompetitiveTable />
				<FAQSection />
				<CTASection />
			</main>
			<Footer branding={<Link href="/try-hidemi" className="flex items-center gap-2.5">
				<Image
					src="/logo-hidemi-full.svg"
					alt="MIST Hidemi"
					width={200}
					height={28}
					className="h-8 opacity-70"
				/>
			</Link>} />
			<Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
		</div>
	);
}
