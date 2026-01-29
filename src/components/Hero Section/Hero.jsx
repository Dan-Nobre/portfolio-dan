import useLanguage from '/Users/danielnobre/Developer/Portfolio/portfolio-dan/src/hooks/useLanguage.js';
import './Hero.css'

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-name">
          <h1>Daniel Nobre</h1>
        </div>
        
        <h2 className="hero-title">{t.hero.title}</h2>
        

        <div className="hero-actions">
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('footer')}
          >
            {t.hero.contactBtn}
          </button>
          <button className="btn-secondary">
            {t.hero.resumeBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;