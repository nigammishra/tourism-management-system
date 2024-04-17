import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const copyRef = useRef(null);
  let ctx, particles, amount, mouse, radius;

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    particles = [];
    amount = 0;
    mouse = {x: 0, y: 0};
    radius = 0.4;

    const colors = ["#DBDFFF", "#DDEAFF", "#F7F8FF", "#FFEAFC", "#F4DDFF"];
    const ww = window.innerWidth;
    const wh = window.innerHeight;

    function Particle(x, y) {
      this.x = Math.random() * ww;
      this.y = Math.random() * wh;
      this.dest = { x, y };
      const circleSize = gsap.utils.random(2, 5, 0.3);
      this.color = colors[Math.floor(Math.random() * 6)];
      this.r = circleSize;
      this.vx = (Math.random() - 0.5) * 10;
      this.vy = (Math.random() - 0.5) * 10;
      this.accX = 0;
      this.accY = 0;
      this.friction = Math.random() * 0.05 + 0.94;
    }

    Particle.prototype.render = function() {
      this.accX = (this.dest.x - this.x) / 1500;
      this.accY = (this.dest.y - this.y) / 1500;
      this.vx += this.accX;
      this.vy += this.accY;
      this.vx *= this.friction;
      this.vy *= this.friction;
      this.x += this.vx;
      this.y += this.vy;

      ctx.fillStyle = this.color;
      ctx.strokeWidth = 0.5;
      ctx.strokeStyle = "cyan";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
      ctx.fill();
      ctx.stroke();

      const a = this.x - mouse.x;
      const b = this.y - mouse.y;
      const distance = Math.sqrt(a * a + b * b);
      if (distance < radius * 100) {
        this.accX = (this.x - mouse.x) / 100;
        this.accY = (this.y - mouse.y) / 100;
        this.vx += this.accX;
        this.vy += this.accY;
      }
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const initScene = () => {
      const ww = canvas.width = window.innerWidth;
      const wh = canvas.height = window.innerHeight;

      ctx.font = "700 " + (ww / 6.66) + "px 'Josefin Sans', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(copyRef.current.value, ww / 2, wh / 2);
      const data = ctx.getImageData(0, 0, ww, wh).data;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "screen";

      particles = [];
      for (let i = 0; i < ww; i += Math.round(ww / 250)) {
        for (let j = 0; j < wh; j += Math.round(ww / 250)) {
          if (data[((i + j * ww) * 4) + 3] > 150) {
            particles.push(new Particle(i, j));
          }
        }
      }
      amount = particles.length;

      requestAnimationFrame(render);
    };

    const render = (a) => {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < amount; i++) {
        particles[i].render();
      }
    };

    window.addEventListener("resize", initScene);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);

    initScene();

    return () => {
      window.removeEventListener("resize", initScene);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
   <>
      <canvas ref={canvasRef} id="scene"></canvas>
      <input ref={copyRef} id="copy" type="text" value="ViewOfOdisha" />
    </>
  );
};

export default ParticleCanvas;
