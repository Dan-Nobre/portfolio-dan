// src/components/Header.jsx
import React from 'react';
// import './Header.css';

const Header = () => {

    const scrollToSection = (selectionID) => {
        const element = document.getElementById(selectionID);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return(
        <header className='header'>
            <div className='header-container'>
                <div className='header-title'>
                    <h1>Evoluindo produtos com foco em qualidade, experiência do usuário e inovação.</h1>
                </div>

                {/* NavButtons here :p */}
                <nav className='header-nav'>
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <button>
                                onClick = {() => scrollToSection('technologies')}
                                className = "nav-link"
                            </button>
                        </li>

                        <li className='nav-item'>
                            <button>
                                onClick = {() => scrollToSection('projects')}
                                className = "nav-link"
                            </button>
                        </li>

                        <li className='nav-item'>
                            <button>
                                onClick = {() => scrollToSection('contact')}
                                className = "nav-link"
                            </button>
                        </li>
                    </ul>
                </nav>

                {/* Actions Buttons here :p */}
                <div className='header-actions'>
                    <button className='btn btn-primary'>
                        Vamos conversar
                    </button>
                    <button className='bnt btn-secondary'>
                        Meu currículo
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;