import './processing.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Process = () => {
    const { t } = useTranslation();

    return (
        <section className="process" aria-label={t("workflow")}>
            <h2 className="process__title">{t("workflow")}</h2>

            <div className="process__wrapper">
                <div className="process__line" aria-hidden="true"></div>

                <div className="process__steps" role="list">
                    {[1, 2, 3, 4, 5].map((step, i) => (
                        <motion.div
                            key={`step-${i}`}
                            className="process__step"
                            role="listitem"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="process__number" aria-hidden="true">{i + 1}</div>
                            <div className="process__content">
                                <h3>{t(`steps.${step}.title`)}</h3>
                                <p>{t(`steps.${step}.text`)}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
