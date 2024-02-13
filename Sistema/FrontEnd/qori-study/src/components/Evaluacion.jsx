import React, { useState } from "react";
import "./Evaluacion.css";

const Evaluacion = () => {
const curso = "NodeJS Nivel Avanzado"
const puntaje = "96.00/100.00"
const certificado = "Certificado obtenido"
  const preguntas = [
    {
      id: 1,
      pregunta: "¿TCP es más rápido que UDP?",
      respuestas: [
        "TCP garantiza la entrega de datos, mientras que UDP no",
        "UDP se utiliza exclusivamente para navegadores web",
        "TCP es más rápido que UDP"
      ],
      respuestaCorrecta: "TCP es más rápido que UDP"
    },
    {
      id: 2,
      pregunta: "¿TCP es más rápido que UDP?2",
      respuestas: [
        "TCP garantiza la entrega de datos, mientras que UDP no2",
        "UDP se utiliza exclusivamente para navegadores web2",
        "TCP es más rápido que UDP2"
      ],
      respuestaCorrecta: "TCP es más rápido que UDP2"
    },
    {
      id: 3,
      pregunta: "¿TCP es más rápido que UDP?3",
      respuestas: [
        "TCP garantiza la entrega de datos, mientras que UDP no3",
        "UDP se utiliza exclusivamente para navegadores web3",
        "TCP es más rápido que UDP3"
      ],
      respuestaCorrecta: "TCP es más rápido que UDP3"
    },
    {
        id: 4,
        pregunta: "¿TCP es más rápido que UDP?4",
        respuestas: [
          "TCP garantiza la entrega de datos, mientras que UDP no4",
          "UDP se utiliza exclusivamente para navegadores web4",
          "TCP es más rápido que UDP4"
        ],
        respuestaCorrecta: "TCP es más rápido que UDP4"
      },
      {
        id: 5,
        pregunta: "¿TCP es más rápido que UDP?5",
        respuestas: [
          "TCP garantiza la entrega de datos, mientras que UDP no5",
          "UDP se utiliza exclusivamente para navegadores web5",
          "TCP es más rápido que UDP5"
        ],
        respuestaCorrecta: "TCP es más rápido que UDP5"
      },
      {
        id: 6,
        pregunta: "¿TCP es más rápido que UDP?6",
        respuestas: [
          "TCP garantiza la entrega de datos, mientras que UDP no6",
          "UDP se utiliza exclusivamente para navegadores web6",
          "TCP es más rápido que UDP6"
        ],
        respuestaCorrecta: "TCP es más rápido que UDP6"
      },
      {
        id: 7,
        pregunta: "¿TCP es más rápido que UDP?7",
        respuestas: [
          "TCP garantiza la entrega de datos, mientras que UDP no7",
          "UDP se utiliza exclusivamente para navegadores web7",
          "TCP es más rápido que UDP7"
        ],
        respuestaCorrecta: "TCP es más rápido que UDP7"
      },
      {
        id: 8,
        pregunta: "¿TCP es más rápido que UDP?8",
        respuestas: [
          "TCP garantiza la entrega de datos, mientras que UDP no8",
          "UDP se utiliza exclusivamente para navegadores web8",
          "TCP es más rápido que UDP8"
        ],
        respuestaCorrecta: "TCP es más rápido que UDP8"
      },
      {
        id: 9,
        pregunta: "¿TCP es más rápido que UDP?9",
        respuestas: [
          "TCP garantiza la entrega de datos, mientras que UDP no9",
          "UDP se utiliza exclusivamente para navegadores web9",
          "TCP es más rápido que UDP9"
        ],
        respuestaCorrecta: "TCP es más rápido que UDP9"
      },
      {
        id: 10,
        pregunta: "¿TCP es más rápido que UDP?10",
        respuestas: [
          "TCP garantiza la entrega de datos, mientras que UDP no10",
          "UDP se utiliza exclusivamente para navegadores web10",
          "TCP es más rápido que UDP10"
        ],
        respuestaCorrecta: "TCP es más rápido que UDP10"
      },
  ];

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasUsuario, setRespuestasUsuario] = useState(new Array(preguntas.length).fill(null));
  const [mostrarAdvertencia, setMostrarAdvertencia] = useState(false);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const mostrarPregunta = () => {
    const pregunta = preguntas[preguntaActual];
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
          <p className="pregunta-text">{pregunta.pregunta}</p>
          <form>
            {pregunta.respuestas.map((respuesta, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`respuesta${index}`}
                  name="respuesta"
                  value={respuesta}
                  checked={respuestasUsuario[preguntaActual] === respuesta}
                  onChange={() => handleSeleccionRespuesta(index)}
                />
                <label htmlFor={`respuesta${index}`}>{respuesta}</label>
              </div>
            ))}
          </form>
        </div>
      </div>
    );
  };

  const handleSeleccionRespuesta = (index) => {
    const nuevasRespuestas = [...respuestasUsuario];
    nuevasRespuestas[preguntaActual] = preguntas[preguntaActual].respuestas[index];
    setRespuestasUsuario(nuevasRespuestas);
  };

  const siguientePregunta = () => {
    setPreguntaActual((prevPregunta) =>
      prevPregunta < preguntas.length - 1 ? prevPregunta + 1 : prevPregunta
    );
  };

  const anteriorPregunta = () => {
    setPreguntaActual((prevPregunta) =>
      prevPregunta > 0 ? prevPregunta - 1 : prevPregunta
    );
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
              <button onClick={anteriorPregunta} disabled={preguntaActual === 0}>
                Anterior
              </button>
              <button onClick={siguientePregunta} disabled={preguntaActual === preguntas.length - 1}>
                Siguiente
              </button>
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