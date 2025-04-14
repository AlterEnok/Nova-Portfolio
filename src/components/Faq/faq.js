import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./faq.css";

const Faq = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };



    const faqs = [
        {
            question: t("faq.1.question"),
            answer: t("faq.1.answer"),
        },
        {
            question: t("faq.2.question"),
            answer: t("faq.2.answer"),
        },
        {
            question: t("faq.3.question"),
            answer: t("faq.3.answer"),
        },
        {
            question: t("faq.4.question"),
            answer: t("faq.4.answer"),
        },
        {
            question: t("faq.5.question"),
            answer: t("faq.5.answer"),
        },
    ];

    return (
        <motion.section
            className="faq"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="faq__title">{t("faq.title")}</h2>
            <div className="faq__list">
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className={`faq__item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq__question">
                            {item.question}
                            <motion.div
                                className="faq__arrow"
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                &#8595;
                            </motion.div>
                        </div>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    className="faq__answer"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p>{item.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Faq;
