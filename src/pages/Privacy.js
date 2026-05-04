import { useTranslation } from "react-i18next";
import "../styles/main.css";

const Privacy = () => {
    const { t } = useTranslation();

    return (
        <div className="privacy">
            <div className="privacy__container">

                <h1 className="privacy__title">
                    {t("privacy.title")}
                </h1>

                <p className="privacy__updated">
                    {t("privacy.updated")}
                </p>

                <p className="privacy__intro">
                    {t("privacy.intro")}
                </p>

                {/* SECTION */}
                <h2>{t("privacy.collect.title")}</h2>
                <p>{t("privacy.collect.desc")}</p>

                <ul>
                    <li>{t("privacy.collect.name")}</li>
                    <li>{t("privacy.collect.email")}</li>
                    <li>{t("privacy.collect.phone")}</li>
                    <li>{t("privacy.collect.other")}</li>
                </ul>

                {/* SECTION */}
                <h2>{t("privacy.usage.title")}</h2>
                <ul>
                    <li>{t("privacy.usage.one")}</li>
                    <li>{t("privacy.usage.two")}</li>
                    <li>{t("privacy.usage.three")}</li>
                </ul>

                {/* SECTION */}
                <h2>{t("privacy.meta.title")}</h2>
                <p>{t("privacy.meta.text1")}</p>
                <p>{t("privacy.meta.text2")}</p>

                {/* SECTION */}
                <h2>{t("privacy.contact.title")}</h2>
                <p>{t("privacy.contact.desc")}</p>

                <div className="privacy__contacts">
                    <p>
                        Email:{" "}
                        <a href="mailto:novateam.web@gmail.com">
                            novateam.web@gmail.com
                        </a>
                    </p>

                    <p>
                        Telegram:{" "}
                        <a href="https://t.me/The_Nova_Team" target="_blank" rel="noreferrer">
                            @The_Nova_Team
                        </a>
                    </p>

                    <p>
                        Instagram:{" "}
                        <a href="https://instagram.com/novateamweb" target="_blank" rel="noreferrer">
                            @novateamweb
                        </a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Privacy;