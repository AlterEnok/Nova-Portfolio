import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './powering.css';

const Powering = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    const itemVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: custom * 0.3,
            },
        }),
    };


    let animationFrameId = null;

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        animationFrameId = requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = -(y - centerY) / 12;
            const rotateY = (x - centerX) / 12;

            card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
    };
    // === End optimized 3D logic ===

    return (
        <div ref={ref}>
            <motion.h2
                className="section__title"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
            >
                {t("poweringProjects")}
            </motion.h2>

            <div className="skills">
                {[{
                    icon: "frontend.png",
                    title: t("frontendTitle"),
                    text: t("frontendText")
                }, {
                    icon: "backend.png",
                    title: t("backendTitle"),
                    text: t("backendText")
                }, {
                    icon: "ux.png",
                    title: t("uiuxTitle"),
                    text: t("uiuxText")
                }].map((card, i) => (
                    <motion.div
                        key={i}
                        className="skills__card"
                        custom={i}
                        initial="hidden"
                        animate={controls}
                        variants={itemVariant}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/icons/${card.icon}`}
                            alt={`${card.title} Icon`}
                            className="skills__icon"
                        />
                        <h2 className="skills__title">{card.title}</h2>
                        <p className="skills__text">{card.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Powering;
