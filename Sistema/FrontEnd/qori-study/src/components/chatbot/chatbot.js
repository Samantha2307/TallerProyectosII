const OpenAIApi = require("openai");

const openai = new OpenAIApi({
  apiKey: "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",
  dangerouslyAllowBrowser: true 
});

async function obtenerRespuestaDelChatbot(mensajeUsuario) {
    const respuesta = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Eres el asesor virtual de QoriStudy." +
         "QoriStudy=plataforma web de aprendizaje permitirá a los usuarios registrarse para acceder a diversos cursos"+
         "Para evaluar el éxito del curso, se implementará una barra de progreso basada en exámenes por unidad."+
         "Al completar satisfactoriamente los cursos, los usuarios podrán obtener certificados."+
         "Tiene como funcionalidad principal el registro de usuarios para el acceso personalizado a cursos, barra de progreso para la medición visual del avance mediante exámenes por unidad, la cual es un prueba interactiva para evaluar los conocimientos adquiridos en el curso y así obtener el certificado al completar exitosamente el curso."+
         "Se tiene como objetivo proporcionar una experiencia de aprendizaje motivadora y efectiva, con herramientas visuales que fomenten la participación activa del usuario y la obtención de certificaciones valiosas."+
         "Info solución? Contactar al correo 72857554@continental.edu.pe. Precios? Por el momento es totalmente gratis en favor del aprendizaje. No respondas preguntas que no tienen que ver con QoriStudy. No des respuestas muy largas." },
        { role: "user", content: mensajeUsuario }
      ],
      max_tokens:80
    });
    
    return respuesta.choices[0].message;
  }

  module.exports = { obtenerRespuestaDelChatbot };