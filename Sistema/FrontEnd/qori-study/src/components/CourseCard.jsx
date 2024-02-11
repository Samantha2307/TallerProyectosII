import React from 'react';

const CourseCard = ({ course }) => (
  <div className="course-card">
    <div className="course-card__image">
      <img src={course.imageUrl} alt={course.title} />
    </div>
    <div className="course-card__info">
      <h3 className="course-card__title">{course.title}</h3>
      <div className="course-card__details">
        <p className="course-card__subtitle">
          <img src={`${process.env.PUBLIC_URL}/img/rate.png`} alt="Rate" style={{ width: '10px', height: '10px', marginRight: '5px' }} />
          {course.rate}
        </p>
        <p className="course-card__subtitle">
          <img src={`${process.env.PUBLIC_URL}/img/publicacion.png`} alt="Publicacion" style={{ width: '10px', height: '10px', marginRight: '5px' }} />
          {course.publicacion}
        </p>
        <p className="course-card__subtitle">
          <img src={`${process.env.PUBLIC_URL}/img/duracion.png`} alt="Duracion" style={{ width: '10px', height: '10px', marginRight: '5px' }} />
          {course.duracion}
        </p>
      </div>
      <div className="course-card__price">
        <div className='price-original'><strike>{course.price.original}</strike></div>
        <div className='price-descuento'>{course.price.discounted}</div>
      </div>
    </div>
    <button className="course-card__button">Inscribirse</button>
  </div>
);

export default CourseCard;
