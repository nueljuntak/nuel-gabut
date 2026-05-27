import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Background() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,
        background: {
          color: "#09090b",
        },
        particles: {
          number: {
            value: 120,
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: 0.7,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 0.2,
          },
        },
      }}
    />
  );
}