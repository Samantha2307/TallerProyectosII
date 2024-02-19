import React from 'react';
import ProgressBar from './ProgressBar.jsx';

const MisCursosCard = ({ course }) => (
  <div className="course-card">
    <div className="course-card__image">
      <img src={course.curso_imagen} alt={course.curso_nombre} />
    </div>
    <div className="course-card__info">
      <h3 className="course-card__title">{course.curso_nombre}</h3>
      <div className="course-card__details">
        <p className="course-card__subtitle">
          <img src={`${process.env.PUBLIC_URL}/img/publicacion.png`} alt="Publicacion" style={{ width: '10px', height: '10px', marginRight: '5px' }} />
          {course.curso_fecha_inicio}
        </p>
        <p className="course-card__subtitle">
          <img src={`${process.env.PUBLIC_URL}/img/duracion.png`} alt="Duracion" style={{ width: '10px', height: '10px', marginRight: '5px' }} />
          {course.curso_duracion} semanas
        </p>
      </div>
    </div>
    <div className="progress">
      <ProgressBar progreso={course.matricula_progreso} /> {/* Pasa el progreso del curso como prop al componente ProgressBar */}
    </div>
  </div>
);

export default MisCursosCard;
