import React, { useState, useEffect } from "react";
import "./Evaluacion.css";

const Evaluacion = () => {
  const curso = "NodeJS Nivel Avanzado";
  const puntaje = "96.00/100.00";
  const certificado = "Certificado obtenido";
  const idevaluacion = "1";

  const [preguntas, setPreguntas] = useState([]);
  const [alternativas, setAlternativas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasUsuario, setRespuestasUsuario] = useState(new Array(preguntas.length).fill(null));
  const [mostrarAdvertencia, setMostrarAdvertencia] = useState(false);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/evaluacion/listarPreguntas/${idevaluacion}`)
      .then(response => response.json())
      .then(data => setPreguntas(data))
      .catch(error => console.error("Error fetching preguntas:", error));
  }, []);

  useEffect(() => {
    if (preguntas.length > 0) {
      fetch(`http://localhost:4000/api/v1/evaluacion/listarAlternativas/${preguntas[preguntaActual].id_pregunta_evaluacion}`)
        .then(response => response.json())
        .then(data => setAlternativas(data))
        .catch(error => console.error("Error fetching alternativas:", error));
    }
  }, [preguntaActual, preguntas]);

  const mostrarPregunta = () => {
    const pregunta = preguntas[preguntaActual];
    if (!pregunta) return null; // Si no hay pregunta, retorna null o algún otro valor predeterminado
  
    return (
      <div className="pregunta">
        <div className="encabezado-cuestionario">
          <div className="titulo-cuestionario">
            <p>Evaluación para obtener el certificado de <span>{curso}</span></p>
          </div>
          <div className="subtitulo-cuestionario">
            <p>Pregunta {preguntaActual + 1} de {preguntas.length}</p>
          </div>
        </div>
        <div className="pregunta-container">
          <p className="pregunta-text">{pregunta.pregunta_evaluacion_descripcion}</p>
          <form>
            {alternativas.map((alternativa, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`respuesta${index}`}
                  name="respuesta"
                  value={alternativa.alternativa_descripcion}
                  checked={respuestasUsuario[preguntaActual] === alternativa.alternativa_descripcion}
                  onChange={() => handleSeleccionRespuesta(alternativa.alternativa_descripcion)}
                />
                <label htmlFor={`respuesta${index}`}>{alternativa.alternativa_descripcion}</label>
              </div>
            ))}
          </form>
        </div>
      </div>
    );
  };

  const handleSeleccionRespuesta = (respuesta) => {
    const nuevasRespuestas = [...respuestasUsuario];
    nuevasRespuestas[preguntaActual] = respuesta;
    setRespuestasUsuario(nuevasRespuestas);
  };

  const siguientePregunta = () => {
    setPreguntaActual(prevPregunta => prevPregunta < preguntas.length - 1 ? prevPregunta + 1 : prevPregunta);
  };

  const anteriorPregunta = () => {
    setPreguntaActual(prevPregunta => prevPregunta > 0 ? prevPregunta - 1 : prevPregunta);
  };

  const finalizarEvaluacion = () => {
    setMostrarAdvertencia(true);
  };

  const continuarFinalizacion = () => {
    setMostrarAdvertencia(false);
    setMostrarResultados(true);
  };

  const cancelarFinalizacion = () => {
    setMostrarAdvertencia(false);
  };

  const mostrarResultadosEvaluacion = () => {
    return (
        
      <div className="resultados">
        <h2>Resultados de la Evaluación sobre <span>{curso}</span></h2>
        <p>¡Felicidades! Has completado la evaluación.</p>
        <p>A continuación, se muestran tus respuestas:</p>
        <ul>
          {preguntas.map((pregunta, index) => (
            <li key={pregunta.id}>
              Pregunta {index + 1}: <span>{respuestasUsuario[index]}</span>
            </li>
          ))}
        </ul>
        <p>Puntaje Total: <span>{puntaje}</span></p>
        <p>Comentario: <span>{certificado}</span> - encuéntralo en la sección "Mis Cursos"</p>
      </div>
    );
  };

  return (
    <div className="evaluacion">
      <div className="pregunta-container">
        {mostrarResultados ? mostrarResultadosEvaluacion() : mostrarPregunta()}
        <div className="botones-container">
          {!mostrarResultados && (
            <div className="botones">
              <button onClick={anteriorPregunta} disabled={preguntaActual === 0}>Anterior</button>
              <button onClick={siguientePregunta} disabled={preguntaActual === preguntas.length - 1}>Siguiente</button>
            </div>
          )}
          {!mostrarResultados && (
            <button onClick={finalizarEvaluacion} disabled={preguntaActual !== preguntas.length - 1 || mostrarResultados}>
              Finalizar evaluación
            </button>
          )}
        </div>
        {mostrarAdvertencia && (
          <div className="modal">
            <div className="modal-contenido">
              <p>¿Está seguro de finalizar la evaluación?</p>
              <div className="modal-botones">
                <button onClick={continuarFinalizacion}>Continuar</button>
                <button onClick={cancelarFinalizacion}>Cancelar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Evaluacion;