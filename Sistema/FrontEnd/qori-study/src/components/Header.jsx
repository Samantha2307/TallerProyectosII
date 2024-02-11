import React, { useState, useRef, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="search-container">
        <input type="text" placeholder="Buscar curso..." className="search-input" />
      </div>
      <div className="header__user-menu" ref={menuRef}>
        <button className="profile-button" onClick={toggleMenu}>
          <img src={`${process.env.PUBLIC_URL}/img/perfil.png`} alt="Perfil" />
        </button>
        {isMenuOpen && (
          <div className="header__user-menu-items">
            {
            <ul>
              <li><a href="https://www.web-leb.com/code" onClick={handleOptionClick}>Editar Perfil</a></li>
              <hr _ngcontent-ng-c500820843=""/>
              <li><a href="https://www.web-leb.com/code" onClick={handleOptionClick}>Cerrar Sesión</a></li>
            </ul>
            }
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
