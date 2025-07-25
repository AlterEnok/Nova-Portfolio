import { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useLocation } from "react-router-dom"; // Импортируем useLocation
import "./notification.css";

const NotificationBanner = ({ onClick }) => {
    const [show, setShow] = useState(false);         // Показывать или нет
    const [fadeOut, setFadeOut] = useState(false);   // Управляет анимацией скрытия
    const { t } = useTranslation();
    const location = useLocation(); // Получаем текущий путь

    useEffect(() => {
        if (location.pathname === "/") { // Проверяем, что на главной странице
            const timer = setTimeout(() => setShow(true), 4000);
            return () => clearTimeout(timer);
        }
    }, [location.pathname]); // Запускать useEffect при изменении пути

    const handleClose = () => {
        setFadeOut(true); // запускаем fadeOut
        setTimeout(() => {
            setShow(false); // полностью скрываем
            setFadeOut(false); // сбрасываем анимацию на будущее
        }, 500); // время совпадает с анимацией
    };

    if (!show) return null;

    return (
        <div className={`notification-banner ${fadeOut ? 'fade-out' : ''}`}>
            <div className="notification-icon">💬</div>
            <p>
                <Trans i18nKey="notification.text">
                    Не знаете, что выбрать? <strong>Заполните форму</strong> — и мы свяжемся с вами!
                </Trans>
            </p>
            <button className="notification-action" onClick={onClick}>
                {t("notification.button")}
            </button>
            <button className="notification-close" onClick={handleClose}>×</button>
        </div>
    );
};

export default NotificationBanner;
