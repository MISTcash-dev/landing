import { useEffect } from 'react';

export function useMouseTracker() {
	useEffect(() => {
		let mX = 0, mY = 0;
		let rafId: number;

		const onMove = (e: MouseEvent) => {
			mX = e.clientX;
			mY = e.clientY;
		};

		const tick = () => {
			document.body.style.setProperty('--mX', String((2 * mX / window.innerWidth) - 1));
			document.body.style.setProperty('--mY', String((2 * mY / window.innerHeight) - 1));
			rafId = requestAnimationFrame(tick);
		};

		document.addEventListener('mousemove', onMove, { passive: true });
		rafId = requestAnimationFrame(tick);

		return () => {
			document.removeEventListener('mousemove', onMove);
			cancelAnimationFrame(rafId);
		};
	}, []);
}
