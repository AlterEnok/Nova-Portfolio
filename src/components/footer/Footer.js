import { useEffect, useRef, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const footerRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            },
            {
                threshold: 0.25,
                rootMargin: "0px 0px -10% 0px"
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <footer className={`footer ${visible ? 'footer--visible' : ''}`} ref={footerRef}>

            <div className="footer__lines">
                <div className="line line--1"></div>
                <div className="line line--2"></div>
                <div className="line line--3"></div>
                <div className="line line--4"></div>
            </div>

            <div className="footer__content">
                <div className="footer__divider" />

                <div className="footer__top">
                    <h2>{t("footerTitle")}</h2>
                    <div className="footer__email">
                        <a href="mailto:novateam.web@gmail.com">
                            novateam.web@gmail.com
                        </a>
                    </div>
                </div>

                <div className="footer__divider" />

                <div className="footer__grid">
                    <div className="footer__nav">
                        <Link to="/">{t("footerHome")}</Link>
                        <Link to="/projects">{t("footerPortfolio")}</Link>
                        <Link to="/contacts">{t("footerContacts")}</Link>
                    </div>

                    <div className="footer__links">
                        <a href="https://t.me/The_Nova_Team">Telegram</a>
                        <a href="https://www.instagram.com/novateamweb/">Instagram</a>
                        <Link to="/privacy">{t("footerPrivacy")}</Link>
                    </div>
                </div>

                <div className="footer__bottom">
                    {t("footerRights")}
                </div>
            </div>
        </footer>
    );
};

export default Footer;