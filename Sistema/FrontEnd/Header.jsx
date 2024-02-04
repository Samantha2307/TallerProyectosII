import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="search-container">
        <input type="text" placeholder="Buscar curso..." className="search-input" />
      </div>
      <div className="header__cart">
        <button className="cart-button">
          <img src={`${process.env.PUBLIC_URL}/img/vector.png`} alt="Carrito" />
        </button>
      </div>
      <div className="header__user-menu">
        <button className="profile-button">
          <img src={`${process.env.PUBLIC_URL}/img/perfil.png`} alt="Perfil" />
        </button>
        <div className="header__user-menu-items">
          {/* Contenido del menú de usuario */}
        </div>
      </div>
    </header>
  );
};

export default Header;
