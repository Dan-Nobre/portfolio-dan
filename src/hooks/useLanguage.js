// File for manager translations

import { useState, useEffect } from 'react';
import translations from '../data/projects';
import projects from '../data/projects';

const useLanguage = () => {
    const [language, setLanguage] = useState('pt');

    const t = translations[language];
    const projectsData = projects[language];

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('portifolio-language', lang);
    }

    // Detect browser language
    useEffect(() => {
        const savedLang = localStorage.getItem('portifolio-language');
        const browserLang = navigator.language.split('-')[0];

        if(savedLang) {
            setLanguage(savedLang);
        } else if (browserLang === 'en' || browserLang === 'pt') {
            setLanguage(browserLang);
        }
    }, []);

    return {
        language,
        t,
        projects: projectsData,
        changeLanguage
    };
};

export default useLanguage;