import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuVertical.css';

const MenuVertical = ({ onSelect, selectedOption }) => {
  const enlaces = [
    { titulo: 'Perfil', url: '/home/perfil', icono: 'fa-user' },
    { titulo: 'Cursos', url: '/home/cursos', icono: 'fa-book' },
    { titulo: 'Mis cursos', url: '/home/miscursos', icono: 'fa-graduation-cap' },
    { titulo: 'Certificados', url: '/home/certificados', icono: 'fa-certificate' },
  ];

  const handleMenuClick = (titulo) => {
    onSelect(titulo);
  };

  const renderEnlaces = () => {
    return enlaces.map((enlace, index) => (
      <NavLink
        key={index}
        to={enlace.url}
        className={`menu-item ${selectedOption === enlace.titulo ? 'active' : ''}`}
        onClick={() => handleMenuClick(enlace.titulo)}
      >
        <i className={`fas ${enlace.icono} icon-size`}></i>
        <span className="texto">{enlace.titulo}</span>
      </NavLink>
    ));
  };

  return (
    <div className="menu-vertical">
      <NavLink to="/" className="menu-item menu-item-header">
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="QoriStudy Logo" className="icono-img" />
        <span className="texto">QoriStudy</span>
      </NavLink>
      {renderEnlaces()}
    </div>
  );
};

export default MenuVertical;
