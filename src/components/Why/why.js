import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./why.css";

const WhyUs = () => {
    const { t } = useTranslation();

    const features = [
        {
            title: t("whyUs.reasons.1.title"),
            text: t("whyUs.reasons.1.text"),
            icon: `${process.env.PUBLIC_URL}/icons/custom.png`
        },
        {
            title: t("whyUs.reasons.2.title"),
            text: t("whyUs.reasons.2.text"),
            icon: `${process.env.PUBLIC_URL}/icons/speed.png`
        },
        {
            title: t("whyUs.reasons.3.title"),
            text: t("whyUs.reasons.3.text"),
            icon: `${process.env.PUBLIC_URL}/icons/conversation.png`
        },
        {
            title: t("whyUs.reasons.4.title"),
            text: t("whyUs.reasons.4.text"),
            icon: `${process.env.PUBLIC_URL}/icons/partner.png`
        }
    ];

    return (
        <motion.section
            className="why-us"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            id="why-us"
        >
            <h2 className="why-us__title">{t("whyUs.title")}</h2>
            <div className="why-us__grid">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="why-us__card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05, rotate: '-1deg' }}
                    >
                        <img src={feature.icon} alt={feature.title} className="why-us__icon" />
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                    </motion.div>
                ))}
            </div>

            <div className="neon-dots">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="dot"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`
                        }}
                    />
                ))}
            </div>
        </motion.section>
    );
};

export default WhyUs;
