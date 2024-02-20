import React, { useEffect, useState } from 'react';
import { http } from '../config/axios.config';
import CourseCard from './CourseCard';
import PaginationMenu from './PaginationMenu';

const CourseList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 8;
  const totalItems = 5; // Puedes ajustar la cantidad de elementos que deseas mostrar

  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await http(`/curso/listadocurso?page=1&sizePage=${totalItems}`);
        setCursos(data.cursos);
        console.log(data.cursos);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [setCursos]);

  function generateCourseData(startId, endId) {
    return Array.from({ length: endId - startId + 1 }, (_, index) => {
      const id = startId + index;

      return {
        id,
        title: 'Diseño de Infraestructura de Residuos Sólidos',
        subtitle: 'Curso intermedio',
        level: 'Intermedio',
        imageUrl: `${process.env.PUBLIC_URL}/img/cursos.png`,
        price: {
          original: '112.90',
          discounted: 'GRATUITO',
        },
        publicacion: '15-05-2023',
        duracion: '4 semanas',
      };
    });
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = generateCourseData(
    indexOfFirstItem + 1,
    Math.min(indexOfLastItem, totalItems)
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="course-list-container">
      <div className="course-list">
        {!isLoading &&
          cursos.length > 0 &&
          cursos.map((course) => <CourseCard key={course.id} course={course} />)}
      </div>
      <div className="pagination-menu">
        <PaginationMenu
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CourseList;
