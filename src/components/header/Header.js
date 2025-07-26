import './style.css';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Header = ({ setIsFormOpen }) => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            setVantaEffect(
                NET({
                    el: vantaRef.current,
                    THREE: THREE,
                    color: 0x915eff,
                    backgroundColor: 0x0e0e0e,
                    maxDistance: 25.0,
                    spacing: 20.0
                })
            );
        }

        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
            }
        };
    }, [vantaEffect]);

    return (
        <header className="header" ref={vantaRef}>
            <div className="header__wrapper">
                <motion.h1
                    className="header__title"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                    <motion.strong
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                    >
                        <em>{t("header.titleEm")}</em>
                    </motion.strong>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <br />
                        {t("header.subtitle")}
                    </motion.div>
                </motion.h1>

                <motion.div
                    className="header__text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 1 }}
                >
                    <p>{t("header.text")}</p>
                </motion.div>

                {/* Контейнер для кнопок */}
                <motion.div
                    className="header__buttons-container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                >
                    <Link to="/projects" className="btn-projects">{t("header.btn")}</Link>

                    <button
                        className="btn-call-to-action"
                        onClick={() => setIsFormOpen(true)}
                    >
                        {t("header.ctaBtn")}
                    </button>
                </motion.div>
            </div>
        </header>

    );
};

export default Header;
