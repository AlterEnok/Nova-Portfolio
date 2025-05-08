import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // плавность
            smooth: true,
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothTouch: false,
        });

        // Функция для обновления 3D-эффекта
        const updateParallax = () => {
            const elements = document.querySelectorAll('.parallax');
            const scrollY = lenis.scroll;

            elements.forEach((element) => {
                const speed = element.getAttribute('data-speed') || 1; // скорость параллакса
                const translateY = scrollY * speed; // смещение по Y

                // Применяем transform для создания эффекта
                element.style.transform = `translateY(${translateY}px)`;
            });
        };

        function raf(time) {
            lenis.raf(time);
            updateParallax(); // обновляем параллакс
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
}
