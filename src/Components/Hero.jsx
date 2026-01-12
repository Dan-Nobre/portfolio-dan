import React from "react";
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <h1 className="hero-title">
                    Evoluindo produtos com foco em qualidade, experiência do usuário e inovação
                </h1>

                {/* Actions Buttons here :p */}
                <div className='hero-actions'>
                    <button className='btn btn-primary'>
                        Vamos conversar
                    </button>
                    <button className='bnt btn-secondary'>
                        Meu currículo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;