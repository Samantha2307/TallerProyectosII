import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div></div>
      <div>
        <h3>Soluciones</h3>
        <p>Cursos</p>
        <p>Especializaciones</p>
        <p>Servicios</p>
      </div>
      <div>
        <h3>Más información</h3>
        <p>Politica de organizacion</p>
        <p>Politica de calidad</p>
        <p>Politica de privacidad</p>
        <p>Terminos y condiciones</p>
      </div>
      <div>
        <h3>Redes Sociales</h3>
        <div className="redes">
            <a href="https://wa.me/123456789">
                <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.tiktok.com/">
                <i className="fab fa-tiktok"></i>
            </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;