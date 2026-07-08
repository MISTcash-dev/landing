import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Try Hidemi — Private USDC Transfers by MIST.cash";
export const size = { width: 1200, height: 500 };
export const contentType = "image/png";

async function toDataUrl(file: string, mime = "image/png") {
	const data = await readFile(join(process.cwd(), "public", file));
	return `data:${mime};base64,${data.toString("base64")}`;
}

export default async function Image() {
	const [logoSrc, eyeFrameSrc, eyeLidSrc, eyeBallSrc] = await Promise.all([
		toDataUrl("logo-hidemi-full.svg", "image/svg+xml"),
		toDataUrl("eye-hero/1-eye-frame.png"),
		toDataUrl("eye-hero/2-eye-lid.png"),
		toDataUrl("eye-hero/3-eye.png"),
	]);

	// Eye frame occupies the right half. Frame aspect ratio: 840×628 (1.337:1)
	const frameW = 500;
	const frameH = Math.round(frameW / 1.337); // ≈ 419

	return new ImageResponse(
		(
			<div
				style={{
					width: 1200,
					height: 500,
					display: "flex",
					background: "#060b18",
					fontFamily: "system-ui, -apple-system, sans-serif",
					overflow: "hidden",
					position: "relative",
				}}
			>
				{/* Grid background */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						backgroundImage:
							"linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
						backgroundSize: "60px 60px",
						display: "flex",
					}}
				/>

				{/* Cyan top accent bar */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						height: 16,
						background: "linear-gradient(90deg, #00e5ff 0%, #00b8d4 100%)",
						display: "flex",
					}}
				/>

				{/* Radial glow behind left text */}
				<div
					style={{
						position: "absolute",
						left: 120,
						top: 100,
						width: 500,
						height: 500,
						borderRadius: "50%",
						background: "rgba(0,229,255,0.04)",
						filter: "blur(80px)",
						display: "flex",
					}}
				/>

				{/* Left column */}
				<div
					style={{
						position: "relative",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						width: 680,
						padding: "0 60px",
						gap: 0
					}}
				>

					{/* Headline */}
					<div style={{ display: "flex", flexDirection: "column", gap: 4, paddingBottom: 30 }}>
						<span style={{ fontSize: 52, fontWeight: 800, color: "#ffffff", lineHeight: 1.5, letterSpacing: "-0.02em" }}>
							Your wallet is a window
						</span>
						<span
							style={{
								fontSize: 52,
								fontWeight: 800,
								lineHeight: 1.1,
								letterSpacing: "-0.02em",
								color: "#00b8d4",
							}}
						>
							Everybody is watching
						</span>
					</div>

					<div style={{ display: "flex", flexDirection: "column", gap: 4, margin: "3rem 0 2rem" }}>
						<span style={{ fontSize: 32, fontWeight: 800, color: "#ffffff", lineHeight: 1.5, letterSpacing: "-0.02em" }}>
							Get privacy with <img src={logoSrc} style={{ width: 212, height: 40, margin: '0.25rem 0 0 1rem' }} />
						</span>
					</div>


					{/* Subtext */}
					<span style={{ fontSize: 22, color: "rgba(148,163,184,0.85)", lineHeight: 1.5 }}>
						Send & receive USDC privately across blockchains.
					</span>
					<span style={{ fontSize: 22, color: "rgba(148,163,184,0.85)", lineHeight: 1.5 }}>

						No wallet history. No tracking. No trace. No signup.
					</span>
				</div>

				{/* Right column — layered eye */}
				<div
					style={{
						position: "absolute",
						right: 30,
						top: Math.round((520 - frameH) / 2),
						width: frameW,
						height: frameH,
						display: "flex",
					}}
				>
					{/* Eye frame */}
					<img src={eyeFrameSrc} alt="" style={{ position: "absolute", inset: 0, width: "95%", height: "100%" }} />

					{/* Eye lid: left 8.5%, top 20%, width 83%, height ≈ 43.1% of frameW */}
					<img
						src={eyeLidSrc}
						alt=""
						style={{
							position: "absolute",
							left: `${0.14 * frameW}px`,
							top: `${0.20 * frameH}px`,
							width: `${0.67 * frameW}px`,
							height: `${0.431 * frameW}px`,
						}}
					/>

					{/* Eye ball: left 36.5%, top 30%, width 26%, height ≈ 26.9% of frameW */}
					<img
						src={eyeBallSrc}
						alt=""
						style={{
							position: "absolute",
							left: `${0.34 * frameW}px`,
							top: `${0.30 * frameH}px`,
							width: `${0.26 * frameW}px`,
							height: `${0.269 * frameW}px`,
						}}
					/>
				</div>
			</div>
		),
		{ ...size }
	);
}

