import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '../../utils/useLocalStorage';
import logo from '../../img/icons/logo-nova.png';
import './style.css';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const { t, i18n } = useTranslation();

    // Используем localStorage для языка
    const [currentLang, setCurrentLang] = useLocalStorage('language', 'en');

    // Обновляем язык при изменении currentLang
    useEffect(() => {
        i18n.changeLanguage(currentLang);
    }, [currentLang, i18n]);

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ua' : 'en';
        setCurrentLang(newLang);       // сохраняем в localStorage
        i18n.changeLanguage(newLang);  // меняем язык
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY <= lastScrollY);
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // 👉 useEffect to handle scroll lock when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Cleanup при размонтировании
        return () => document.body.classList.remove('no-scroll');
    }, [menuOpen]);

    const normalLink = "nav-list__link";
    const activeLink = "nav-list__link nav-list__link--active";

    return (
        <nav className={`nav ${showNavbar ? 'nav--visible' : 'nav--hidden'}`}>
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <img src={logo} alt="Nova Team Logo" />
                    </NavLink>

                    <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={() => setMenuOpen(false)}>{t("home")}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={() => setMenuOpen(false)}>{t("projects")}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={() => setMenuOpen(false)}>{t("contacts")}</NavLink>
                        </li>

                        {/* Mobile only */}
                        <div className="mobile-controls">
                            <BtnDarkMode />
                            <button
                                onClick={toggleLanguage}
                                className="lang-btn"
                                aria-label="Toggle language"
                            >
                                <img
                                    src={currentLang === 'en'
                                        ? 'https://flagcdn.com/w40/gb.png'
                                        : 'https://flagcdn.com/w40/ua.png'}
                                    alt={currentLang === 'en' ? 'English' : 'Українська'}
                                    className='toggle-img'
                                    width="24"
                                    height="24"
                                    style={{ borderRadius: '50%' }}
                                />
                            </button>
                        </div>
                    </ul>

                    {/* Desktop only */}
                    <div className="nav-controls">
                        <BtnDarkMode />
                        <button
                            onClick={toggleLanguage}
                            className="lang-btn"
                            aria-label="Toggle language"
                        >
                            <img
                                src={currentLang === 'en'
                                    ? 'https://flagcdn.com/w40/gb.png'
                                    : 'https://flagcdn.com/w40/ua.png'}
                                alt={currentLang === 'en' ? 'English' : 'Українська'}
                                className='toggle-img'
                                width="24"
                                height="24"
                                style={{ borderRadius: '50%' }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
