import useLanguage from '/Users/danielnobre/Developer/Portfolio/portfolio-dan/src/hooks/useLanguage.js';
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const { t, language, changeLanguage } = useLanguage();
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-menu">
          
          <div className="navbar-logo">
            <span>{t.navbar.logo}</span>
          </div>

          <div className="navbar-links">
            <button onClick={() => scrollToSection('about')}>
              {t.navbar.about}
            </button>
            <button onClick={() => scrollToSection('projects')}>
              {t.navbar.projects}
            </button>
            <button onClick={() => scrollToSection('footer')}>
              {t.navbar.contact}
            </button>
          </div>

          <div className="language-switcher">
            <button 
              onClick={() => changeLanguage('pt')}
              className={language === 'pt' ? 'active' : ''}
            >
              PT
            </button>
            <button 
              onClick={() => changeLanguage('en')}
              className={language === 'en' ? 'active' : ''}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;