// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Asegúrate de crear este archivo para los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Mi Aplicación React. Todos los derechos reservados.</p>
      <div className="footer-links">
        <a href="/contact">Contacto</a>
        <a href="/about">Acerca de</a>
        <a href="/privacy">Privacidad</a>
      </div>
    </footer>
  );
};

export default Footer;
