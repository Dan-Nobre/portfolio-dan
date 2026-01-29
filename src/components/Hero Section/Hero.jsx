import useLanguage from '/Users/danielnobre/Developer/Portfolio/portfolio-dan/src/hooks/useLanguage.js';
import './Hero.css'
import heroImage from '../../assets/DanielNobreHero.png'

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="hero">
      <div className="container">
        
        <div className="hero-content">
          <div className="hero-name mb-4">
            <h1 className="text-hero">Daniel Nobre</h1>
          </div>
          
          <h2 className="hero-title text-subtitle mb-5">
            {t.hero?.title || "Evoluindo produtos com foco em qualidade, experiência do usuário e inovação"}
          </h2>
          
          <div className="hero-actions">
            <button 
              className="btn-hero-primary"
              onClick={() => scrollToSection('footer')}
            >
              {t.hero?.contactBtn || "Vamos conversar"}
            </button>
            <button 
              className="btn-hero-secondary" 
              onClick={() => window.open('/curriculo.pdf', '_blank')}
            >
              {t.hero?.resumeBtn || "Meu currículo"}
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src={heroImage} 
            alt="Daniel Nobre - Desenvolvedor e Designer" 
            className="hero-img"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;