import React from 'react';
import useLanguage from '/Users/danielnobre/Developer/Portfolio/portfolio-dan/src/hooks/useLanguage.js';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <h2 className="footer-title">{t.footer.title}</h2>
        
        <div className="footer-contact">
          <a href={`mailto:${t.footer.email}`} className="contact-link">
            ✉️ {t.footer.email}
          </a>
          <a href="#" className="contact-link">
            💼 {t.footer.linkedin}
          </a>
          <a href="#" className="contact-link">
            ⚡ {t.footer.github}
          </a>
        </div>
        
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Daniel Nobre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;