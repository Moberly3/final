import React from 'react';
import 'bulma/css/bulma.css';

const ContactPage = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Contact Us</h1>
        <div className="content">
          <p>Feel free to reach out through any of the following channels:</p>

          {/* Location Information */}
          <h2 className="subtitle">Our Location</h2>
          <p>Nad Dalejským údolím 2699/9, 155 00 Praha 13</p>

          {/* Phone Number */}
          <h2 className="subtitle">Phone Number</h2>
          <p>+420 777 758 895</p>

          {/* Email */}
          <h2 className="subtitle">Email</h2>
          <a href="mailto:info@yourstyle.com">info@yourstyle.com</a>

          {/* Social Links */}
          <h2 className="subtitle">Follow Us</h2>
          <p>Instagram: <a href="https://www.instagram.com/facetherapy.cz/" target="_blank" rel="noopener noreferrer">@facetherapy.cz</a></p>
          <p>Taplink: <a href="https://taplink.cc/facetherapy.cz" target="_blank" rel="noopener noreferrer">Visit our Taplink</a></p>
          </div>
          <div className="column">
            <figure className="image is-4by3">
              <img src="/images/photo10.jpg" alt="Specialist" />
            </figure>
          </div>
      </div>
    </section>
  );
}

export default ContactPage;
