import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Background() {
  const particlesInit = async (main) => {
    await loadFull(main);
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