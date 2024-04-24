import React from 'react';

const Footer = () => {
  return (
    <footer className="footer has-background-dark has-text-white-ter">
      <div className="content has-text-centered">
        <div className="columns is-mobile is-centered">
          <div className="column is-narrow">
            <a href="#home" className="has-text-white-ter">Home</a>
          </div>
          <div className="column is-narrow">
            <a href="https://www.instagram.com/facetherapy.cz/" className="has-text-white-ter">Instagram</a>
          </div>
          <div className="column is-narrow">
            <a href="https://taplink.cc/facetherapy.cz" className="has-text-white-ter">Taplink</a>
          </div>
          <div className="column is-narrow">
            <a href="#contact" className="has-text-white-ter">Contact</a>
          </div>
        </div>
        <p>© 2024 facetherapy.cz All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
