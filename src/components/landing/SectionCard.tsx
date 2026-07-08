import type { LucideProps } from "lucide-react";
import type { JSX } from "react";

type IconComponent = React.ComponentType<LucideProps>;

export interface SectionCardProps {
	/** Accent colour that drives icon and stat. */
	variant?: "cyan" | "danger";
	/** Lucide icon component displayed at the top of the card. */
	icon?: IconComponent;
	/**
	 * How the icon is rendered:
	 * - 'raw'   – plain icon, no background (ProblemSection style)
	 * - 'boxed' – icon inside a rounded, tinted box (TrustSection style)
	 */
	iconStyle?: "raw" | "boxed";
	/** Numbered / text badge rendered instead of an icon (SolutionSection style). */
	badge?: React.ReactNode;
	/** Large highlighted statistic (ProblemSection style). */
	stat?: React.ReactNode;
	/** Small label rendered beneath the stat. */
	statLabel?: React.ReactNode;
	title?: React.ReactNode;
	description?: React.ReactNode;
	/** Extra classes forwarded to the card container. */
	className?: string;
	headerClassName?: string;
	contentClassName?: string;
	/** When true the card flips on hover to reveal the description on the back face. */
	flippable?: boolean;
	/** Click handler for the card. */
	onClick?: () => void;
}

export default function SectionCard({
	variant = "cyan",
	icon: Icon,
	iconStyle = "raw",
	badge,
	stat,
	statLabel,
	title,
	description,
	className = "",
	flippable = false,
	onClick,
	headerClassName = "",
	contentClassName = "",
}: SectionCardProps): JSX.Element {
	const baseBorder =
		variant === "danger"
			? "border-danger/10"
			: "border-cyan-400/10";

	const baseBg = "bg-navy-900/60 hover:bg-navy-800/60";

	// ---------- accent colour tokens ----------
	const accentText = variant === "danger" ? "text-danger" : "text-cyan-400";
	const accentBg =
		variant === "danger" ? "bg-danger/10" : "bg-cyan-400/10";

	const hashHeader = statLabel || badge || Icon || title

	const clickable = typeof onClick === "function";

	const faceShared = `rounded-2xl border ${baseBorder} p-7 [backface-visibility:hidden]`;

	if (flippable && description) {
		return (
			<div
				onClick={onClick}
				className={`group perspective-[1000px] ${clickable ? "cursor-pointer" : "cursor-default"} ${className}`.trim()}
			>
				{/* Flip inner */}
				<div className="relative transition-transform duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
					{/* Front – in normal flow to set card height */}
					<div className={`${faceShared} ${baseBg}`}>
						{hashHeader && (
							<header className={`flex-1 ${headerClassName}`}>
								<div className="flex gap-4 items-center mb-4">
									{badge !== undefined && (
										<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-lg font-bold text-navy-950">
											{badge}
										</div>
									)}
									{Icon && iconStyle === "boxed" && (
										<div className={`flex h-11 w-11 items-center justify-center rounded-xl ${accentBg}`}>
											<Icon className={`h-5 w-5 ${accentText}`} />
										</div>
									)}
									{Icon && iconStyle === "raw" && (
										<Icon className={`h-7 w-7 ${accentText}`} />
									)}
									{stat !== undefined && (
										<div>
											<span className="text-2xl font-bold">{stat}</span>
											{statLabel && <p className="mt-1 text-xs text-slate-500">{statLabel}</p>}
										</div>
									)}
								</div>
								<h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
							</header>
						)}
					</div>
					{/* Back – absolute overlay, pre-rotated 180° */}
					<div className={`${faceShared} bg-navy-900 absolute inset-0 transform-[rotateY(180deg)] flex items-center`}>
						<p className={`text-sm leading-relaxed text-slate-300 ${contentClassName}`}>
							{description}
						</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			onClick={onClick}
			className={`rounded-2xl border transition-all duration-300 ${baseBorder} ${baseBg} p-7 ${clickable ? "cursor-pointer select-none" : ""} ${className}`.trim()}
		>
			{hashHeader && <header className={`flex-1 ${headerClassName}`}>
				<div className="flex gap-4 items-center mb-4">
					{/* ── Badge (numbered step) ── */}
					{badge !== undefined && (
						<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-lg font-bold text-navy-950">
							{badge}
						</div>
					)}

					{/* ── Icon ── */}
					{Icon && iconStyle === "boxed" && (
						<div
							className={`flex h-11 w-11 items-center justify-center rounded-xl ${accentBg}`}
						>
							<Icon className={`h-5 w-5 ${accentText}`} />
						</div>
					)}
					{Icon && iconStyle === "raw" && (
						<Icon className={`h-7 w-7 ${accentText}`} />
					)}

					{/* ── Stat ── */}
					{stat !== undefined && (
						<div className="">
							<span className={`text-2xl font-bold`}>{stat}</span>
							{statLabel && (
								<p className="mt-1 text-xs text-slate-500">{statLabel}</p>
							)}
						</div>
					)}
				</div>
				<h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
			</header>}

			{/* ── Content ── */}
			{description && (
				<p className={`flex-1 text-sm leading-relaxed text-slate-400 ${contentClassName}`}>
					{description}
				</p>
			)}
		</div>
	);
}
