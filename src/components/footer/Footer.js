import { useEffect, useRef } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const footerRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        const footer = footerRef.current;
        const glow = document.createElement('div');
        glow.classList.add('footer__mouse-glow');
        glowRef.current = glow;
        footer.appendChild(glow);

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            glow.style.setProperty('--x', `${x}%`);
            glow.style.setProperty('--y', `${y}%`);
        };

        footer.addEventListener('mousemove', handleMouseMove);

        return () => {
            footer.removeEventListener('mousemove', handleMouseMove);
            glow.remove();
        };
    }, []);




    return (
        <footer className="footer" ref={footerRef}>
            <div className="footer__pulse-bg" />
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__sections">
                        <div className="footer__section">
                            <h3>Socials</h3>
                            <ul>
                                <li><a href="https://t.me/The_Nova_Team"><FontAwesomeIcon icon={faTelegram} /> Telegram</a></li>
                                <li><a href="https://www.instagram.com/novateamweb/"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
                                <li><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
                            </ul>
                        </div>
                        <div className="footer__section">
                            <h3>Work</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><a href="#projects">Portfolio</a></li>
                            </ul>
                        </div>
                        <div className="footer__section">
                            <h3>Contact</h3>
                            <ul>
                                <li>
                                    <a href="#contacts">Contact Page</a>
                                </li>
                                <li><a href="mailto:novateam@example.com">Email us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="copyright">
                        <p>© 2025 Nova Team — All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
