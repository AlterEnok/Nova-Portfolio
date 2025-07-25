import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import './form.css';
import i18n from '../../i18n';

const ContactForm = ({ isOpen, setIsOpen, className }) => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [recaptchaError, setRecaptchaError] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (emailjs?.init) {
            emailjs.init('service_y88mljp');
        }
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        const scriptSrc = `https://www.google.com/recaptcha/api.js?hl=${i18n.language}&render=explicit`;
        const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

        const initRecaptcha = () => {
            if (window.grecaptcha?.ready) {
                window.grecaptcha.ready(() => {
                    try {
                        const recaptchaContainer = document.getElementById('recaptcha-container');
                        if (recaptchaContainer && !recaptchaContainer.hasChildNodes() && !recaptchaContainer.dataset.rendered) {
                            const widgetId = window.grecaptcha.render(recaptchaContainer, {
                                sitekey: '6Ldo84wrAAAAAIINUqXYDWG3aSWboQZ2r0-PlOsv',
                                callback: () => setRecaptchaError(false),
                            });
                            recaptchaContainer.dataset.rendered = widgetId;
                        }
                    } catch (e) {
                        console.error('reCAPTCHA render error:', e);
                    }
                });
            }
        };

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = scriptSrc;
            script.async = true;
            script.defer = true;

            script.onload = () => {
                if (isOpen) {
                    initRecaptcha();
                }
            };

            script.onerror = () => {
                console.error('Failed to load reCAPTCHA script');
            };

            document.body.appendChild(script);
        } else if (isOpen) {
            initRecaptcha();
        }
    }, [i18n.language, isOpen]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = window.grecaptcha?.getResponse();
        if (!token) {
            setRecaptchaError(true);
            return;
        }

        try {
            const recaptchaInput = document.createElement("input");
            recaptchaInput.setAttribute("type", "hidden");
            recaptchaInput.setAttribute("name", "g-recaptcha-response");
            recaptchaInput.setAttribute("value", token);
            e.target.appendChild(recaptchaInput);

            await emailjs.sendForm(
                'service_y88mljp',
                'template_k5o707u',
                e.target,
                'dmrmfHqqqzuU-j2DT'
            );

            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 4000);
            e.target.reset();
            setIsOpen(false);

            if (window.grecaptcha?.reset) {
                window.grecaptcha.reset();
            }
        } catch (err) {
            console.error("EmailJS Error:", err);
            alert("Произошла ошибка при отправке формы. Попробуйте позже.");
        }
    };

    return (
        <section className={`contact-section ${className || ''}`}>
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

                            <form onSubmit={handleSubmit}>
                                <div className="input-grid">
                                    <input type="text" name="user_name" placeholder={t("form.name")} required />
                                    <input type="email" name="user_email" placeholder={t("form.email")} required />
                                    <input type="tel" name="phone" placeholder={t("form.phone")} required />
                                    <input type="text" name="messenger" placeholder={t("form.messenger")} />
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

                                <div
                                    id="recaptcha-container"
                                    className={`g-recaptcha ${recaptchaError ? 'recaptcha-error' : ''}`}
                                ></div>
                                {recaptchaError && (
                                    <p className="recaptcha-error-text">
                                        {t("form.captchaError")}
                                    </p>
                                )}

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
                                <a href="https://www.facebook.com/profile.php?id=61574733997236" target="_blank" rel="noopener noreferrer">
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
