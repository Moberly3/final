import React, { useState } from 'react';

const Header = ({ isLogged, setCurrentView }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" onClick={() => setCurrentView('Home')}>
          <img src="logo.png" alt="Logo" width="112" height="28" />
        </a>

        <a
          role="button"
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleNavbar}
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a className="navbar-item" onClick={() => setCurrentView('About')}>About Us</a>
          <a className="navbar-item" onClick={() => setCurrentView('Carousel')}>Carousel</a>
          <a className="navbar-item" onClick={() => setCurrentView('Pricing')}>Pricing</a>
          <a className="navbar-item" onClick={() => setCurrentView('Contact')}>Contact</a>
          { !isLogged && (
            <>
              <a className="navbar-item" onClick={() => setCurrentView('Login')}>Login</a>
              <a className="navbar-item" onClick={() => setCurrentView('Registration')}>Register</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;

