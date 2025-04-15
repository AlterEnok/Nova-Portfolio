import React, { useEffect, useRef } from 'react';

const Sparkle = ({ hidden = false }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particleColor = (opacity) => `rgba(255, 215, 0, ${opacity})`;

        let particlesArray = [];

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.size = Math.random() * 4 + 3;
                this.speedY = Math.random() * -1.2 - 0.4;
                this.opacity = Math.random() * 0.4 + 0.6;
                this.color = particleColor(this.opacity);
                this.life = 100;
            }

            update() {
                this.y += this.speedY;
                this.life--;
                if (this.size > 0.4) this.size *= 0.985;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 20;
                ctx.shadowColor = 'rgba(255, 215, 0, 1)';
                ctx.fill();
            }
        }

        function handleParticles() {
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();

                if (particlesArray[i].size < 0.2 || particlesArray[i].life <= 0) {
                    particlesArray.splice(i, 1);
                    i--;
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            handleParticles();
            requestAnimationFrame(animate);
        }

        function addParticles() {
            for (let i = 0; i < 12; i++) {
                particlesArray.push(new Particle());
            }
        }

        animate();
        const interval = setInterval(addParticles, 70);

        return () => clearInterval(interval);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 10000,
                opacity: hidden ? 0 : 1,
                transition: 'opacity 0.3s ease-in-out',
            }}
        />
    );
};

export default Sparkle;
