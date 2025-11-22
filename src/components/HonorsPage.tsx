import React, { useRef, useEffect } from 'react';
import { Award } from "lucide-react";

const Fireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Store canvas dimensions in variables that won't be null
    const getCanvasWidth = () => canvas?.width || 0;
    const getCanvasHeight = () => canvas?.height || 0;
    
    let animationFrameId: number;
    let fireworks: Firework[] = [];
    let particles: Particle[] = [];

    class Firework {
      x: number;
      y: number;
      targetY: number;
      speed: number;
      color: string;
      exploded: boolean;

      constructor() {
        this.x = Math.random() * getCanvasWidth();
        this.y = getCanvasHeight();
        this.targetY = Math.random() * getCanvasHeight() * 0.4 + 50;
        this.speed = Math.random() * 3 + 5;
        this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
        this.exploded = false;
      }

      update() {
        if (this.y > this.targetY) {
          this.y -= this.speed;
        } else if (!this.exploded) {
          this.explode();
          this.exploded = true;
        }
      }

      draw() {
        if (!this.exploded && ctx) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          // Trail
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x, this.y + 20);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      explode() {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle(this.x, this.y, this.color));
        }
      }
    }

    class Particle {
      x: number;
      y: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
      decay: number;
      gravity: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.decay = Math.random() * 0.02 + 0.01;
        this.gravity = 0.05;
      }

      update() {
        this.vx *= 0.98;
        this.vy *= 0.98;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha * 0.3;
        ctx.fill();
        ctx.restore();
      }
    }

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Launch new fireworks randomly
      if (Math.random() < 0.05) {
        fireworks.push(new Firework());
      }

      // Update and draw fireworks
      fireworks = fireworks.filter(firework => !firework.exploded);
      fireworks.forEach(firework => {
        firework.update();
        firework.draw();
      });

      // Update and draw particles
      particles = particles.filter(particle => particle.alpha > 0);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }} />;
};

export default function HonorsPage() {
  return (
    <div className="max-w-5xl mx-auto relative">
      <Fireworks />
      
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 border border-indigo-100 relative z-10">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-2">
            <img 
              src="/as5.png" 
              alt="Award Icon" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-slate-900 to-indigo-900">
            Honors Earned
          </h2>
        </div>

        <div className="grid gap-8">
          <div className="bg-linear-to-r from-indigo-50 via-blue-50 to-indigo-50 border-4 border-indigo-400 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-start gap-6">
              <div className="bg-linear-to-r from-indigo-400 to-indigo-600 p-5 rounded-2xl shadow-lg">
                <Award className="text-white" size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-black text-slate-900 mb-3">
                  Hafiz Sanad Certification
                </h3>
                <p className="text-xl font-bold text-indigo-800 mb-4">
                  Top 3 Position - Entire Karachi / Pakistan
                </p>
                <p className="text-lg text-slate-700 font-light leading-relaxed">
                  Achieved one of the highest honors in Quranic memorization
                  with a top 3 ranking across all of Karachi and Pakistan,
                  demonstrating exceptional dedication and discipline.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-r from-blue-50 via-cyan-50 to-indigo-50 border-4 border-blue-400 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-start gap-6">
              <div className="bg-linear-to-r from-blue-400 to-blue-600 p-5 rounded-2xl shadow-lg">
                <Award className="text-white" size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-black text-slate-900 mb-3">
                  Best Performance of the Year
                </h3>
                <p className="text-xl font-bold text-blue-800 mb-4">
                  3D Marketing
                </p>
                <p className="text-lg text-slate-700 font-light leading-relaxed">
                  Recognized for outstanding leadership and exceptional
                  performance throughout the year, demonstrating excellence in
                  team management and project delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-r from-slate-50 via-blue-50 to-indigo-50 border-4 border-slate-400 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-start gap-6">
              <div className="bg-linear-to-r from-slate-400 to-slate-600 p-5 rounded-2xl shadow-lg">
                <Award className="text-white" size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-black text-slate-900 mb-3">
                  Best Performance of the Month
                </h3>
                <p className="text-xl font-bold text-slate-800 mb-4">
                  AHH Brothers Builders and Developers
                </p>
                <p className="text-lg text-slate-700 font-light leading-relaxed">
                  Awarded for exceptional monthly performance, showcasing
                  consistent excellence and dedication in the property
                  development sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}