import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
    const saved = localStorage.getItem(key);
    if (saved === null) return defaultValue;

    try {
        // Пробуем распарсить, если это валидный JSON
        return JSON.parse(saved);
    } catch (e) {
        // Если парсинг не удался, значит это просто строка, возвращаем как есть
        return saved;
    }
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

    useEffect(() => {
        // При записи пытаемся сохранить строку или JSON
        if (typeof value === 'string') {
            localStorage.setItem(key, value);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;
