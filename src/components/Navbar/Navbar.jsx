import useLanguage from '/Users/danielnobre/Developer/Portfolio/portfolio-dan/src/hooks/useLanguage.js';

const Navbar = () => {
  const { t, language, changeLanguage } = useLanguage();
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span>{t.navbar.logo}</span>
        </div>
        
        {/* Navlinks att :p */}
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
    </nav>
  );
};

export default Navbar;