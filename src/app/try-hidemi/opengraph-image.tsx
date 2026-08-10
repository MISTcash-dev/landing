import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "MIST — Privacy infrastructure by your rules";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function toDataUrl(file: string, mime = "image/svg+xml") {
	const data = await readFile(join(process.cwd(), "public", file));
	return `data:${mime};base64,${data.toString("base64")}`;
}

export default async function Image() {
	const logoSrc = await toDataUrl("mist.cash.svg");

	return new ImageResponse(
		(
			<div
				style={{
					width: 1200,
					height: 630,
					display: "flex",
					background: "#E3EDF5",
					fontFamily: "system-ui, -apple-system, sans-serif",
					position: "relative",
					overflow: "hidden",
					padding: "72px 84px",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				{/* Cobalt accent bar */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						height: 12,
						background: "#0052FF",
						display: "flex",
					}}
				/>

				<img src={logoSrc} alt="" style={{ width: 280, height: 47 }} />

				<div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
					<span
						style={{
							fontSize: 64,
							fontWeight: 700,
							color: "#081019",
							lineHeight: 1.1,
							letterSpacing: "-0.02em",
							maxWidth: 900,
						}}
					>
						Privacy infrastructure by your rules.
					</span>
					<span style={{ fontSize: 28, color: "#081019", opacity: 0.7, lineHeight: 1.5 }}>
						Private settlement. Custom middleware. Native compliance.
					</span>
				</div>

				<div style={{ display: "flex", gap: 20 }}>
					<span
						style={{
							background: "#0052FF",
							color: "#FFFFFF",
							fontSize: 24,
							padding: "14px 28px",
							borderRadius: 2,
							fontWeight: 600,
						}}
					>
						Read the docs
					</span>
					<span
						style={{
							background: "#ACC4D6",
							color: "#081019",
							fontSize: 24,
							padding: "14px 28px",
							borderRadius: 2,
							fontWeight: 600,
						}}
					>
						Try Hidemi
					</span>
				</div>
			</div>
		),
		{ ...size }
	);
}
