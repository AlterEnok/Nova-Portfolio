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

    const dropdownRef = useRef(null);
    const hoverTimeout = useRef(null);

    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useLocalStorage('language', 'ua');

    useEffect(() => {
        i18n.changeLanguage(currentLang);
    }, [currentLang]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY <= lastScrollY);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        if (menuOpen) {
            const scrollY = window.scrollY;

            document.body.dataset.scrollY = scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
        } else {
            const scrollY = document.body.dataset.scrollY;

            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';

            window.scrollTo(0, Number(scrollY || 0));
        }
    }, [menuOpen]);

    // ❗ закрытие по клику вне
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!dropdownRef.current) return;
            if (!dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setCurrentLang(lang);
        setDropdownOpen(false);
        setMenuOpen(false);
    };

    const normalLink = "nav-list__link";
    const activeLink = "nav-list__link nav-list__link--active";

    const LanguageDropdown = () => {
        const openDropdown = () => {
            clearTimeout(hoverTimeout.current);
            setDropdownOpen(true);
        };

        const closeDropdown = () => {
            hoverTimeout.current = setTimeout(() => {
                setDropdownOpen(false);
            }, 150);
        };

        const toggleDropdown = (e) => {
            e.stopPropagation();
            setDropdownOpen(prev => !prev);
        };

        return (
            <div
                className="lang-dropdown"
                ref={dropdownRef}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
            >
                <div className="lang-wrapper">
                    <button
                        className="lang-btn-text"
                        onClick={toggleDropdown}
                        type="button"
                    >
                        {currentLang.toUpperCase()}
                    </button>

                    <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                        {['en', 'ua', 'de', 'fr', 'es', 'ru']
                            .filter(lang => lang !== currentLang)
                            .map(lang => (
                                <div
                                    key={lang}
                                    onClick={() => changeLanguage(lang)}
                                    className="lang-item"
                                >
                                    {lang.toUpperCase()}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <nav className={`nav ${showNavbar ? 'nav--visible' : 'nav--hidden'}`}>
            <div className="container">
                <div className="nav-row">

                    <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
                        <img src={logo} alt="Nova Team Logo" />
                    </NavLink>

                    <div
                        className={`burger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(prev => !prev)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={() => setMenuOpen(false)}>
                                {t("home")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={() => setMenuOpen(false)}>
                                {t("projects")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink} onClick={() => setMenuOpen(false)}>
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