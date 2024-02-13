import React, { useState } from 'react';
import Chat from './Chat';

const BotonFlotante = () => {
  const [mostrarChat, setMostrarChat] = useState(false);

  const toggleChat = () => {
    setMostrarChat(!mostrarChat);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button className="floating-button" onClick={toggleChat}>
        Chatea!
      </button>
      <Chat mostrar={mostrarChat} />
    </div>
  );
};

export default BotonFlotante;
