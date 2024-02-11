import React, { useState } from 'react';
import MisCursosCard from './MisCursosCard';
import PaginationMenu from './PaginationMenu';

const MisCursosList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = 104; // Puedes ajustar la cantidad de elementos que deseas mostrar

  function generateCourseData(startId, endId) {
    return Array.from({ length: endId - startId + 1 }, (_, index) => {
      const id = startId + index;

      return {
        id,
        title: 'Diseño de Infraestructura de Residuos Sólidos',
        subtitle: 'Curso intermedio',
        level: 'Intermedio',
        imageUrl: `${process.env.PUBLIC_URL}/img/cursos.png`,
        rate: '4.2',
        publicacion: '15-05-2023',
        duracion: '4 semanas',
      };
    });
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = generateCourseData(indexOfFirstItem + 1, Math.min(indexOfLastItem, totalItems));

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="course-list-container">
      <div className="course-list">
        {currentCourses.map((course) => (
          <MisCursosCard key={course.id} course={course} />
        ))}
      </div>
      <div className="pagination-menu">
        <PaginationMenu totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default MisCursosList;
