import { useState } from 'react';
import AnimatedPage from '../components/SmoothPage/smooth.js';
import Sparkle from '../components/Sparkle/sparkle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contacts = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Пример обработчика, если хочешь открыть/закрыть меню (для теста)
    // По факту ты можешь передать сюда реальный стейт из бургер-меню
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <AnimatedPage>
            <section className="contacts-modern">
                <div className="contacts-modern__glow"></div>

                <h1 className="contacts-modern__title">Contacts</h1>

                <div className="contacts-modern__grid">
                    <div className="contacts-modern__card">
                        <div className="contacts-modern__icon"><i className="fas fa-map-marker-alt"></i></div>
                        <h3>Location</h3>
                        <p>Ukraine</p>
                    </div>

                    <div className="contacts-modern__card">
                        <div className="contacts-modern__icon"><i className="fab fa-telegram-plane"></i></div>
                        <h3>Telegram</h3>
                        <a href="https://t.me/The_Nova_Team" target="_blank" rel="noopener noreferrer">
                            https://t.me/The_Nova_Team
                        </a>
                    </div>

                    <div className="contacts-modern__card">
                        <div className="contacts-modern__icon"><i className="fab fa-instagram"></i></div>
                        <h3>Instagram</h3>
                        <a href="https://www.instagram.com/novateamweb/?hl=de" target="_blank" rel="noopener noreferrer">
                            instagram.com/novateamweb
                        </a>
                    </div>

                    <div className="contacts-modern__card">
                        <div className="contacts-modern__icon"><i className="fas fa-envelope"></i></div>
                        <h3>Email</h3>
                        <a href="mailto:novateam.web@gmail.com">novateam.web@gmail.com</a>
                    </div>
                </div>



            </section>

            <Sparkle hidden={isMenuOpen} />
        </AnimatedPage>
    );
};

export default Contacts;
