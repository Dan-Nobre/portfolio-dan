import React from 'react';
import useLanguage from '../../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>{t.about.title}</h2>
        <h3 className="about-subtitle">{t.about.subtitle}</h3>
        <div className="about-content">
          <p>{t.about.content}</p>
        </div>
      </div>
    </section>
  );
};

export default About;