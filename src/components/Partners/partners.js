import React from "react";
import "./partners.css";
import { useTranslation } from "react-i18next";

const Partners = () => {
    const { t } = useTranslation();

    const partners = [
        'Enforce agency', 'NR agency', "Rock's agency", 'Doba digital', 'Arrows agency', 'Vdalo'
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
