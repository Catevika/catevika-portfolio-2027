import { useEffect, useRef } from "react";

type CircleElement = {
	cx: number;
	cy: number;
	x: number;
	y: number;
	r: number;
	lift: number;
	driftFlag: boolean;
	a: number;
	grd: CanvasGradient;
};

function HeroBackground() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const c = canvasRef.current;
		if (!c) return;

		const ctx = c.getContext("2d");
		if (!ctx) return;

		const context = ctx;

		const cw = (c.width = window.innerWidth);
		const ch = (c.height = window.innerHeight);

		const howMany = 75;
		const rad = Math.PI / 180;

		const Rgrd = Math.sqrt(ch * ch + (cw / 2) * (cw / 2));
		const backgroundGrd = context.createRadialGradient(
			cw / 2,
			0,
			0,
			cw / 2,
			0,
			Rgrd
		);
		backgroundGrd.addColorStop(0, "#badbf5");
		backgroundGrd.addColorStop(0.35, "#53a5dd");
		backgroundGrd.addColorStop(0.75, "#306eab");
		backgroundGrd.addColorStop(1, "#22417a");

		const randomInt = (mn: number, mx: number): number =>
			Math.floor(Math.random() * (mx - mn + 1) + mn);

		const Grd = (x: number, y: number, r: number): CanvasGradient => {
			// Light from above-left
			const highlightX = x - r * 0.35;
			const highlightY = y - r * 0.45;

			const g = context.createRadialGradient(
				highlightX,
				highlightY,
				0,
				x,
				y,
				r
			);

			// Stronger highlight (but still soft)
			g.addColorStop(0, "oklch(60.749% 0.08652 237.446 / 0.52)");

			// Stronger glow
			g.addColorStop(0.25, "oklch(60.749% 0.08652 237.446 / 0.32)");

			// Slightly more visible interior
			g.addColorStop(0.55, "rgba(255,255,255,0.045)");

			// More defined rim (but still soft)
			g.addColorStop(0.85, "oklch(60.749% 0.08652 237.446 / 0.18)");

			// Fully transparent edge
			g.addColorStop(1, "oklch(60.749% 0.08652 237.446 / 0)");

			return g;
		};

		function createCircle(): CircleElement {
			const r = randomInt(5, 25);
			const cx = Math.round(Math.random() * cw) + 1;
			const cy = Math.round(Math.random() * ch) + 1;

			return {
				cx,
				cy,
				x: cx,
				y: cy,
				r,
				lift: randomInt(2, 10) / 10,
				driftFlag: Math.random() < 0.5,
				a: (Math.round(Math.random() * 360) + 1) * rad,
				grd: Grd(cx, cy, r),
			};
		}

		const circles: CircleElement[] = Array.from(
			{ length: howMany },
			createCircle
		);

		function circle(
			cx: number,
			cy: number,
			radius: number,
			fill: CanvasGradient
		): void {
			context.save();
			context.fillStyle = fill;
			context.beginPath();
			context.arc(cx, cy, radius, 0, Math.PI * 2);
			context.fill();
			context.restore();
		}

		let requestId: number;

		function draw() {
			context.clearRect(0, 0, cw, ch);

			for (const e of circles) {
				e.a += 0.1;

				e.cy = e.cy < -e.r ? ch + e.r : e.cy - e.lift;

				if (e.cx <= e.x - 10) e.driftFlag = true;
				else if (e.cx >= e.x + 10) e.driftFlag = false;

				e.cx += e.driftFlag ? 0.15 : -0.15;

				e.grd = Grd(e.cx, e.cy, e.r);

				circle(e.cx, e.cy, e.r, e.grd);
			}

			requestId = requestAnimationFrame(draw);
		}

		requestId = requestAnimationFrame(draw);

		return () => cancelAnimationFrame(requestId);
	}, []);

	return <canvas ref={canvasRef} className="hero-background" />;
}

export default HeroBackground;
