import React from "react";
import "./partners.css";
import { useTranslation } from "react-i18next";

const Partners = () => {
    const { t } = useTranslation();

    const partners = [
        'Enforce agency', 'NR agency', 'Traff control', 'Doba digital', 'Arrows agency',
        'Svet agency'
    ];

    return (
        <>
            <h2 className="process__title">{t("Nova Team's partners")}</h2>
            <section className="partners">
                <div className="partners__track">
                    {[...partners, ...partners].map((partner, index) => (
                        <span className="partners__item" key={index}>
                            {partner}
                        </span>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Partners;
