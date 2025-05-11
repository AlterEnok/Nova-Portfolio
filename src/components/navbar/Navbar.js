import { useState, useEffect, useRef } from 'react';
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
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const dropdownRef = useRef(null);
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useLocalStorage('language', 'en');

    useEffect(() => {
        i18n.changeLanguage(currentLang);
    }, [currentLang, i18n]);

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY <= lastScrollY);
            setLastScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', menuOpen);
    }, [menuOpen]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [dropdownOpen]);

    const changeLanguage = (lang) => {
        setCurrentLang(lang);
        setDropdownOpen(false);
        setMenuOpen(false);
    };

    const normalLink = "nav-list__link";
    const activeLink = "nav-list__link nav-list__link--active";

    const LanguageDropdown = () => {
        let timeoutId;

        const handleMouseEnter = () => {
            if (!isMobile) {
                clearTimeout(timeoutId);
                setDropdownOpen(true);
            }
        };

        const handleMouseLeave = () => {
            if (!isMobile) {
                timeoutId = setTimeout(() => setDropdownOpen(false), 200);
            }
        };

        const toggleDropdownMobile = (e) => {
            if (isMobile) {
                e.stopPropagation();
                setDropdownOpen(prev => !prev);
            }
        };

        return (
            <div
                className="lang-dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={dropdownRef}
            >
                <div className="lang-wrapper">
                    <button
                        className="lang-btn-text"
                        onClick={toggleDropdownMobile}
                    >
                        {currentLang.toUpperCase()}
                    </button>
                    <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                        {currentLang !== 'en' && <div onClick={() => changeLanguage('en')}>EN</div>}
                        {currentLang !== 'ua' && <div onClick={() => changeLanguage('ua')}>UA</div>}
                        {currentLang !== 'de' && <div onClick={() => changeLanguage('de')}>DE</div>}
                        {currentLang !== 'fr' && <div onClick={() => changeLanguage('fr')}>FR</div>}
                        {currentLang !== 'es' && <div onClick={() => changeLanguage('es')}>ES</div>}
                        {currentLang !== 'ru' && <div onClick={() => changeLanguage('ru')}>RU</div>}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <nav className={`nav ${showNavbar ? 'nav--visible' : 'nav--hidden'}`}>
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <img src={logo} alt="Nova Team Logo" />
                    </NavLink>

                    <div
                        className={`burger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                                onClick={() => setMenuOpen(false)}
                            >
                                {t("home")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                                onClick={() => setMenuOpen(false)}
                            >
                                {t("projects")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                                onClick={() => setMenuOpen(false)}
                            >
                                {t("contacts")}
                            </NavLink>
                        </li>

                        <div className="mobile-controls">
                            <BtnDarkMode />
                            <LanguageDropdown />
                        </div>
                    </ul>

                    <div className="nav-controls">
                        <BtnDarkMode />
                        <LanguageDropdown />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
