import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

const CourseList = () => {
    
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    
    // Fetch the course data here (e.g., from an API) and set the state.
    // For now, I'll just use a static array of courses.
    const exampleCourses = [
      {
        id: 1,
        title: 'Diseño de Infraestructura de Residuos Sólidos',
        subtitle: 'Curso intermedio',
        level: 'Intermedio',
        imageUrl: `${process.env.PUBLIC_URL}/img/cursos.png`,
        price: {
          original: 'S/85.90',
          discounted: 'S/59.90',
        },
      },
      {
        id: 2,
        title: 'Diseño de Infraestructura de Residuos Sólidos',
        subtitle: 'Curso intermedio',
        level: 'Intermedio',
        imageUrl: `${process.env.PUBLIC_URL}/img/cursos.png`,
        price: {
          original: 'S/85.90',
          discounted: 'S/59.90',
        },
      },

      {
        id: 3,
        title: 'Diseño de Infraestructura de Residuos Sólidos',
        subtitle: 'Curso intermedio',
        level: 'Intermedio',
        imageUrl: `${process.env.PUBLIC_URL}/img/cursos.png`,
        price: {
          original: 'S/85.90',
          discounted: 'S/59.90',
        },
      },

      {
        id: 4,
        title: 'Diseño de Infraestructura de Residuos Sólidos',
        subtitle: 'Curso intermedio',
        level: 'Intermedio',
        imageUrl: `${process.env.PUBLIC_URL}/img/cursos.png`,
        price: {
          original: 'S/85.90',
          discounted: 'S/59.90',
        },
      },

      {
        id: 5,
        title: 'Diseño de Infraestructura de Residuos Sólidos',
        subtitle: 'Curso intermedio',
        level: 'Intermedio',
        imageUrl: `${process.env.PUBLIC_URL}/img/cursos.png`,
        price: {
          original: 'S/85.90',
          discounted: 'S/59.90',
        },
      },

      {
        id: 6,
        title: 'Diseño de Infraestructura de Residuos Sólidos',
        subtitle: 'Curso intermedio',
        level: 'Intermedio',
        imageUrl: `${process.env.PUBLIC_URL}/img/cursos.png`,
        price: {
          original: 'S/85.90',
          discounted: 'S/59.90',
        },
      },
      {
        id: 7,
        title: 'Diseño de Infraestructura de Residuos Sólidos',
        subtitle: 'Curso intermedio',
        level: 'Intermedio',
        imageUrl: `${process.env.PUBLIC_URL}/img/cursos.png`,
        price: {
          original: 'S/85.90',
          discounted: 'S/59.90',
        },
      },
      {
        id: 8,
        title: 'Diseño de Infraestructura de Residuos Sólidos',
        subtitle: 'Curso intermedio',
        level: 'Intermedio',
        imageUrl: `${process.env.PUBLIC_URL}/img/cursos.png`,
        price: {
          original: 'S/85.90',
          discounted: 'S/59.90',
        },
      },
      // More courses...
    ];

    setCourses(exampleCourses);
  }, []);

  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;