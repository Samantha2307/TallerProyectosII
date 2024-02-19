import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { curso_nombre, curso_imagen, curso_fecha_inicio, curso_duracion, price } = course; // Ajustamos las destructuraciones para que coincidan con los nombres de las propiedades del JSON
  const priceOriginal = price ? price.original : ''; // Verifica si 'price' está definido
  const priceDiscounted = price ? price.discounted : ''; // Verifica si 'price' está definido

  return (
    <div className="course-card">
      <div className="course-card__image">
        <img src={curso_imagen} alt={curso_nombre} /> {/* Utilizamos curso_imagen y curso_nombre en lugar de imageUrl y title */}
      </div>
      <div className="course-card__info">
        <h3 className="course-card__title">{curso_nombre}</h3> {/* Utilizamos curso_nombre en lugar de title */}
        <div className="course-card__details">
          <p className="course-card__subtitle">
            <img src={`${process.env.PUBLIC_URL}/img/publicacion.png`} alt="Publicacion" style={{ width: '10px', height: '10px', marginRight: '5px' }} />
            {curso_fecha_inicio} {/* Utilizamos curso_fecha_inicio en lugar de publicacion */}
          </p>
          <p className="course-card__subtitle">
            <img src={`${process.env.PUBLIC_URL}/img/duracion.png`} alt="Duracion" style={{ width: '10px', height: '10px', marginRight: '5px' }} />
            {curso_duracion} semanas {/* Utilizamos curso_duracion en lugar de duracion */}
          </p>
        </div>
        <div className="course-card__price">
          {priceOriginal && <div className='price-original'><strike>{priceOriginal}</strike></div>}
          {priceDiscounted && <div className='price-descuento'>{priceDiscounted}</div>}
        </div>
        <Link to={`/curso`}>
          <button className="course-card__button">Inscribirse</button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
