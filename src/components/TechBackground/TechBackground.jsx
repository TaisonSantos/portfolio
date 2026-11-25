import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 34;
const CONNECTION_DISTANCE = 145;

function TechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let frameId;
    let lastFrame = 0;
    const pointer = { x: 0, y: 0, active: false };
    const particles = [];

    const resize = () => {
      const previousWidth = width;
      const previousHeight = height;
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      if (particles.length === 0) {
        for (let index = 0; index < PARTICLE_COUNT; index += 1) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.22,
            vy: (Math.random() - 0.5) * 0.22,
            radius: 0.8 + Math.random() * 1.1,
          });
        }
      } else if (previousWidth && previousHeight) {
        particles.forEach((particle) => {
          particle.x = (particle.x / previousWidth) * width;
          particle.y = (particle.y / previousHeight) * height;
        });
      }
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        if (!reduceMotion.matches) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (pointer.active) {
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const distance = Math.hypot(dx, dy);
            const influenceRadius = 115;

            if (distance > 0 && distance < influenceRadius) {
              const push = ((influenceRadius - distance) / influenceRadius) * 0.9;
              particle.x += (dx / distance) * push;
              particle.y += (dy / distance) * push;
            }
          }

          if (particle.x < -8) particle.x = width + 8;
          if (particle.x > width + 8) particle.x = -8;
          if (particle.y < -8) particle.y = height + 8;
          if (particle.y > height + 8) particle.y = -8;
        }

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const next = particles[nextIndex];
          const distance = Math.hypot(particle.x - next.x, particle.y - next.y);

          if (distance < CONNECTION_DISTANCE) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(next.x, next.y);
            context.strokeStyle = `rgba(116, 157, 235, ${
              (1 - distance / CONNECTION_DISTANCE) * 0.09
            })`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }

        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.radius + Math.sin(time / 1700 + index) * 0.15,
          0,
          Math.PI * 2,
        );
        context.fillStyle = "rgba(151, 181, 255, 0.34)";
        context.fill();
      });
    };

    const animate = (time) => {
      if (time - lastFrame >= 40) {
        draw(time);
        lastFrame = time;
      }

      if (!reduceMotion.matches) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const handleMotionPreference = () => {
      window.cancelAnimationFrame(frameId);
      draw();

      if (!reduceMotion.matches) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    resize();
    draw();

    if (!reduceMotion.matches) {
      frameId = window.requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);
    reduceMotion.addEventListener("change", handleMotionPreference);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
      reduceMotion.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return (
    <div className="tech-background" aria-hidden="true">
      <canvas ref={canvasRef} className="tech-background__particles" />
      <span className="tech-background__glow" />
    </div>
  );
}

export default TechBackground;
