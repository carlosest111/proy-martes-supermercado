// Redes.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Redes = () => {
  return (
    <div className="redes-container">
      <h3>Síguenos en Redes Sociales</h3>
      <div className="redes-icons">
        <a href="https://www.facebook.com/TuSupermercado" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="redes-icon" />
        </a>
        <a href="https://twitter.com/TuSupermercado" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="redes-icon" />
        </a>
        <a href="https://www.instagram.com/TuSupermercado" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="redes-icon" />
        </a>
        <a href="https://www.linkedin.com/company/TuSupermercado" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="redes-icon" />
        </a>
      </div>
    </div>
  );
};

export default Redes;
