"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ChevronRightCircle, ChevronLeftCircle } from "lucide-react";

interface ImageLightboxProps {
	src: string;
	alt: string;
	caption?: string;
	isOpen: boolean;
	onClose: () => void;
	onPrev?: () => void;
	onNext?: () => void;
}

export default function ImageLightbox({ src, alt, caption, isOpen, onClose, onPrev, onNext }: ImageLightboxProps) {
	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") onPrev?.();
			if (e.key === "ArrowRight") onNext?.();
		};

		if (isOpen) {
			document.addEventListener("keydown", handleKey);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleKey);
			document.body.style.overflow = "unset";
		};
	}, [isOpen, onClose, onPrev, onNext]);

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
			onClick={onClose}
		>
			{/* Close button */}
			<button
				onClick={onClose}
				className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
				aria-label="Close lightbox"
			>
				<X className="h-6 w-6" />
			</button>

			{/* Image + caption container */}
			<div
				className="flex items-center gap-3 max-h-[90vh] max-w-[90vw]"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Prev button */}
				{onPrev && (
					<button
						className="cursor-pointer"
						onClick={(e) => { e.stopPropagation(); onPrev(); }}
						aria-label="Previous image"
					>
						<ChevronLeftCircle
							className=" text-white/50 hover:text-white/80 h-12 w-12 lg:h-20 lg:w-20 md:m-4 lg:m-12" />
					</button>
				)}

				<div>
					{caption && (
						<p className="text-center text-lg text-slate-300 py-4 lg:py-8">{caption}</p>
					)}
					<Image
						src={src}
						alt={alt}
						width={1200}
						height={2400}
						className="h-auto max-h-[82vh] w-auto rounded-lg"
						quality={100}
					/>
				</div>

				{/* Next button */}
				{onNext && (
					<button
						className="cursor-pointer"
						onClick={(e) => { e.stopPropagation(); onNext(); }}
						aria-label="Next image"
					>
						<ChevronRightCircle
							className=" text-white/50 hover:text-white/80 h-12 w-12 lg:h-20 lg:w-20 md:m-4 lg:m-12" />
					</button>
				)}
			</div>
		</div>
	);
}
