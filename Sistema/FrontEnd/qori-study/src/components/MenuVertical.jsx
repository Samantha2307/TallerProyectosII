import React from 'react';
import './MenuVertical.css';

const MenuVertical = ({ onSelect, selectedOption }) => {
  const enlaces = [
    { titulo: 'Perfil', url: '#', icono: 'fa-user' },
    { titulo: 'Cursos', url: '#', icono: 'fa-book' },
    { titulo: 'Mis cursos', url: '#', icono: 'fa-graduation-cap' },
    { titulo: 'Certificados', url: '#', icono: 'fa-certificate' },
  ];

  const handleMenuClick = (titulo) => {
    onSelect(titulo);
  };

  const renderEnlaces = () => {
    return enlaces.map((enlace, index) => (
      <button
        key={index}
        className={`menu-item ${selectedOption === enlace.titulo ? 'active' : ''}`}
        onClick={() => handleMenuClick(enlace.titulo)}
      >
        <i className={`fas ${enlace.icono} icon-size`}></i>
        <span className="texto">{enlace.titulo}</span>
      </button>
    ));
  };

  return (
    <div className="menu-vertical">
      <button href="#" className="menu-item menu-item-header">
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="QoriStudy Logo" className="icono-img" />
        <span className="texto">QoriStudy</span>
      </button>
      {renderEnlaces()}
    </div>
  );
};

export default MenuVertical;
