import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import intlTelInput from 'intl-tel-input';
import { useTranslation } from 'react-i18next';
import 'intl-tel-input/build/css/intlTelInput.css';
import "./form.css";

const ContactForm = ({ isOpen, setIsOpen }) => {
    const [showSuccess, setShowSuccess] = useState(false);
    const { t } = useTranslation();
    const phoneInputRef = useRef(null);

    useEffect(() => {
        if (isOpen && phoneInputRef.current) {
            const iti = intlTelInput(phoneInputRef.current, {
                initialCountry: "auto",
                preferredCountries: ["ua", "us", "de", "fr", "gb", "pl"],
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
            });

            return () => {
                iti.destroy();
            };
        }
    }, [isOpen]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <section className="contact-section">
            <div className="contact-trigger" onClick={() => setIsOpen(true)}>
                <span className="line top-line" />
                <div className="trigger-content">
                    <span className="text">Contact Form</span>
                    <span className="arrow">→</span>
                </div>
                <span className="line bottom-line" />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="popup-form"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <button className="close-popup" onClick={() => setIsOpen(false)}>×</button>

                        <div className="popup-left">
                            <h2>{t("form.title")}</h2>
                            <p>{t("form.subtitle")}</p>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    emailjs.sendForm(
                                        'service_y88mljp',
                                        'template_k5o707u',
                                        e.target,
                                        'dmrmfHqqqzuU-j2DT'
                                    )
                                        .then(() => {
                                            setShowSuccess(true);
                                            setTimeout(() => setShowSuccess(false), 4000);
                                        })
                                        .catch((err) => alert("Error: " + err.text));

                                    e.target.reset();
                                    setIsOpen(false);
                                }}
                            >
                                <div className="input-grid">
                                    <input type="text" name="user_name" placeholder={t("form.name")} required />
                                    <input type="email" name="user_email" placeholder={t("form.email")} required />
                                    <input ref={phoneInputRef} type="tel" name="phone" placeholder={t("form.phone")} required autoFocus={false} />
                                    <input type="text" name="message" placeholder={t("form.message")} />
                                </div>

                                <p className="site-type-title">{t("form.siteTypeTitle")}</p>
                                <div className="site-type-options">
                                    <label className="radio-label">
                                        <input type="radio" name="site_type" value={t("form.options.landing")} required />
                                        {t("form.options.landing")}
                                    </label>
                                    <label className="radio-label">
                                        <input type="radio" name="site_type" value={t("form.options.corporate")} required />
                                        {t("form.options.corporate")}
                                    </label>
                                    <label className="radio-label">
                                        <input type="radio" name="site_type" value={t("form.options.ecommerce")} required />
                                        {t("form.options.ecommerce")}
                                    </label>
                                    <label className="radio-label">
                                        <input type="radio" name="site_type" value={t("form.options.undecided")} required />
                                        {t("form.options.undecided")}
                                    </label>
                                </div>

                                <button type="submit">{t("form.send")}</button>
                            </form>
                        </div>

                        <div className="divider"></div>

                        <div className="contact-info">
                            <p>Let’s connect on social:</p>
                            <a href="mailto:novateam.web@gmail.com" className="email-link">
                                novateam.web@gmail.com
                            </a>
                            <div className="contact-socials">
                                <a href="https://t.me/The_Nova_Team" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-telegram fa-2x"></i>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61574733997236&notif_id=1743774084875024&notif_t=page_user_activity&ref=notif" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook fa-2x"></i>
                                </a>
                                <a href="https://www.instagram.com/novateamweb/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        className="success-popup"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5 }}
                    >
                        {t("form.success")}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ContactForm;
