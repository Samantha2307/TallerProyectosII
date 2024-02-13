import React, { useState } from "react";
import { obtenerRespuestaDelChatbot } from "./chatbot/chatbot.js";
import './Chat.css';

const Chat = ({ mostrar, cerrarChat }) => {
  const [mensajes, setMensajes] = useState([]);


  const enviarMensaje = async (mensaje) => {
    const mensajeUsuario = { texto: mensaje, tipo: "usuario" };
    setMensajes([...mensajes, mensajeUsuario]);
  
    try {
      const respuesta = await obtenerRespuestaDelChatbot(mensaje);
      const mensajeChatbot = { texto: respuesta, tipo: "chatbot" };
      setMensajes((mensajes) => [...mensajes, mensajeChatbot]); // Usa el callback para asegurarte de estar obteniendo el estado más actualizado
    } catch (error) {
      console.error(error);
      setMensajes([...mensajes, { texto: "Lo siento, hubo un error al comunicarse con el chatbot.", tipo: "chatbot" }]);
    }
  };
  

  return (
    <div className={`chat-container ${mostrar ? "mostrar" : "ocultar"}`}>
      <div className="chat-header">
        <span className="chat-title">Tu asistente virtual</span>
      </div>
      <div className="chat-messages">
        {mensajes.map((mensaje, index) => (
          <div key={index} className={`mensaje ${mensaje.tipo === 'usuario' ? 'usuario' : 'chatbot'}`}>
            {mensaje.tipo === "usuario" ? mensaje.texto : mensaje.texto.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Escribe un mensaje..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            enviarMensaje(e.target.value);
            e.target.value = "";
          }
        }}
        className="chat-input"
      />
    </div>
  );
};

export default Chat;