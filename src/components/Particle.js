
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Particle() {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <>
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 30,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 80,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad"
            },
          },
        },
        particles: {
          color: {
            value: ["#64748b", "#94a3b8", "#cbd5e1"],
          },
          links: {
            color: "#94a3b8",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 4,
              minimumValue: 0.3,
              sync: false
            }
          },
        },
        detectRetina: true,
      }}
    />
    </>
  );
}

export default Particle;