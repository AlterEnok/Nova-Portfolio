import './style.css';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { useTranslation } from "react-i18next";

const Header = () => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: vantaRef.current,
                    THREE,
                    color: 0x915eff,
                    backgroundColor: 0x0e0e0e,
                    maxDistance: 25.0,
                    spacing: 20.0
                })
            );
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <header className="header" ref={vantaRef}>
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>{t("header.titleStrong")}<em><br />{t("header.titleEm")}</em></strong><br />
                    {t("header.subtitle")}
                </h1>
                <div className="header__text">
                    <p>{t("header.text")}</p>
                </div>
                <Link to="/projects" className="btn-projects">{t("header.btn")}</Link>
            </div>
        </header>
    );
};

export default Header;
