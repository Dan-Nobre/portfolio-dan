// src/components/Header.jsx
import React from 'react';
import './Navbar.css';

const Header = () => {

    const scrollToSection = (selectionID) => {
        const element = document.getElementById(selectionID);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return(
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='header-logo'>
                    <span>Daniel Nobre</span>
                </div>

                {/* NavButtons here :p */}
                <nav className='navbar-links'>
                    <button onClick = {() => scrollToSection('about')} >
                        Sobre mim
                    </button>

                    <button onClick={() => scrollToSection('projects')}>
                        Meus Trabalhos
                    </button>

                    <button onClick={() => scrollToSection('contact')}>
                        Contato
                    </button>

                </nav>
            </div>
        </nav>
    );
};

export default Header;