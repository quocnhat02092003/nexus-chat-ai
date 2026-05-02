"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Cobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const frameRef = useRef<number | null>(null);
  const phiRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const initGlobe = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      globeRef.current?.destroy();

      globeRef.current = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: height * dpr,

        phi: phiRef.current,
        theta: 0.35,
        scale: 1,
        offset: [0, 0],

        dark: 0,
        diffuse: 1.25,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        glowColor: [1, 1, 1],
        markerColor: [0.1, 0.3, 1],

        markerElevation: 0.02,
        markers: [
          { id: "eu", location: [50, 10], size: 0.06 },
          { id: "mena", location: [28, 35], size: 0.06 },
          { id: "asia", location: [35, 105], size: 0.06 },
          { id: "apac", location: [-25, 135], size: 0.06 },
        ],

        arcs: [],
      });
    };

    const animate = () => {
      phiRef.current += 0.0035;
      globeRef.current?.update({ phi: phiRef.current });
      frameRef.current = requestAnimationFrame(animate);
    };

    initGlobe();
    animate();

    const handleResize = () => {
      initGlobe();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      globeRef.current?.destroy();
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-150 max-w-full">
      <canvas ref={canvasRef} className="h-full w-full" />

      {/* EU */}
      <div
        className="
        absolute z-10
        px-2.5 py-1.5
        rounded-[6px]
        bg-[#1447ff] text-white
        text-[12px] font-bold leading-none
        tracking-[0.08em]
        whitespace-nowrap
        shadow-[0_6px_14px_rgba(20,71,255,0.25)]
        pointer-events-none
        transition-opacity duration-200
        translate-x-[-50%]

        [position-anchor:--cobe-eu]
        left-[anchor(center)]
        bottom-[anchor(top)]
        mb-2
        opacity-(--cobe-visible-eu,0)
      "
      >
        EU
      </div>

      {/* MENA */}
      <div
        className="
        absolute z-10
        px-2.5 py-1.5
        rounded-[6px]
        bg-[#1447ff] text-white
        text-[12px] font-bold leading-none
        tracking-[0.08em]
        whitespace-nowrap
        shadow-[0_6px_14px_rgba(20,71,255,0.25)]
        pointer-events-none
        transition-opacity duration-200
        translate-x-[-50%]

        [position-anchor:--cobe-mena]
        left-[anchor(center)]
        bottom-[anchor(top)]
        mb-2
        opacity-(--cobe-visible-mena,0)
      "
      >
        AFRICA
      </div>

      {/* ASIA */}
      <div
        className="
        absolute z-10
        px-2.5 py-1.5
        rounded-[6px]
        bg-[#1447ff] text-white
        text-[12px] font-bold leading-none
        tracking-[0.08em]
        whitespace-nowrap
        shadow-[0_6px_14px_rgba(20,71,255,0.25)]
        pointer-events-none
        transition-opacity duration-200
        translate-x-[-50%]

        [position-anchor:--cobe-asia]
        left-[anchor(center)]
        bottom-[anchor(top)]
        mb-2
        opacity-(--cobe-visible-asia,0)
      "
      >
        ASIA
      </div>

      {/* APAC */}
      <div
        className="
        absolute z-10
        px-2.5 py-1.5
        rounded-[6px]
        bg-[#1447ff] text-white
        text-[12px] font-bold leading-none
        tracking-[0.08em]
        whitespace-nowrap
        shadow-[0_6px_14px_rgba(20,71,255,0.25)]
        pointer-events-none
        transition-opacity duration-200
        translate-x-[-50%]

        [position-anchor:--cobe-apac]
        left-[anchor(center)]
        bottom-[anchor(top)]
        mb-2
        opacity-(--cobe-visible-apac,0)
      "
      >
        APAC
      </div>
    </div>
  );
}
