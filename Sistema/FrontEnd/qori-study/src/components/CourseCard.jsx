import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { id_curso, curso_imagen, curso_nombre, curso_fecha_inicio, curso_duracion } = course;
  
  return (
    <div className="course-card">
      <div className="course-card__image">
        <img src={curso_imagen} alt={id_curso} />
      </div>
      <div className="course-card__info">
        <h3 className="course-card__title">{curso_nombre}</h3>
        <div className="course-card__details">
          <p className="course-card__subtitle">
            <img src={`${process.env.PUBLIC_URL}/img/publicacion.png`} alt="Publicacion" style={{ width: '10px', height: '10px', marginRight: '5px' }} />
            {curso_fecha_inicio}
          </p>
          <p className="course-card__subtitle">
            <img src={`${process.env.PUBLIC_URL}/img/duracion.png`} alt="Duracion" style={{ width: '10px', height: '10px', marginRight: '5px' }} />
            {curso_duracion}
          </p>
        </div>
        <div className="course-card__price">
          <div className='price-original'><strike>{100}</strike></div>
          <div className='price-descuento'>{'free'}</div>
        </div>
        <Link to={`/curso/${id_curso}`}>
        <button className="course-card__button">Inscribirse</button>
      </Link>
      </div>
    </div>
  );
}

export default CourseCard;
