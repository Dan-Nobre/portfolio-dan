import React from 'react';
import useLanguage from '/Users/danielnobre/Developer/Portfolio/portfolio-dan/src/hooks/useLanguage.js';

const Quote = () => {
  const { t } = useLanguage();
  
  return (
    <section className="section quote">
      <div className="container">
        <blockquote className="quote-text">
          "{t.quote.text}"
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;