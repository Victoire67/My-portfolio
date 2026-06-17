import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

interface ReactBitsParticlesProps {
  particleCount?: number;
  particleColors?: string[];
  speed?: number;
  moveParticlesOnHover?: boolean;
}

export default function ParticlesBackground({
  particleCount = 100,
  particleColors = ["#ffffff"],
  speed = 1.5,
  moveParticlesOnHover = true,
}: ReactBitsParticlesProps) {
  const [init, setInit] = useState(false);

  // Initialize the engine ONCE using the official hook (not the raw tsParticles singleton)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      // Important: don't let particles capture clicks/scrolls meant for the page
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: moveParticlesOnHover,
            mode: "grab",
          },
          resize: { enable: true },
        },
      },
      particles: {
        color: { value: particleColors },
        links: { enable: false },
        move: {
          enable: true,
          speed: speed,
        },
        number: {
          value: particleCount,
          density: { enable: true },
        },
        opacity: { value: 0.6 },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [particleColors, speed, particleCount, moveParticlesOnHover]
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0 pointer-events-none"
      options={options}
    />
  );
}