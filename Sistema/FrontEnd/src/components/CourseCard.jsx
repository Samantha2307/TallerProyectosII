import React from 'react';

const CourseCard = ({ course }) => (
  <div className="course-card">
    <div className="course-card__image">
      <img src={course.imageUrl} alt={course.title} />
    </div>
    <div className="course-card__info">
      <h3 className="course-card__title">{course.title}</h3>
      <p className="course-card__subtitle">
        {course.subtitle} - {course.level}
      </p>
      <p className="course-card__price">
        {course.price.original} <strike>{course.price.discounted}</strike>
      </p>
      <button className="course-card__button">Comprar ahora</button>
    </div>
  </div>
);

export default CourseCard;