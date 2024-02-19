import React, { useState } from 'react';
import CourseCard from './CourseCard';
import PaginationMenu from './PaginationMenu';
import cursosData from './jsons/cursos.json'; // Importa los datos del archivo JSON

const CourseList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = cursosData.cursos.slice(indexOfFirstItem, indexOfLastItem); // Utiliza los datos del archivo JSON

  const totalPages = Math.ceil(cursosData.totalCursos / itemsPerPage); // Utiliza el total de cursos del archivo JSON

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="course-list-container">
      <div className="course-list">
        {currentCourses.map((course) => (
          <CourseCard key={course.id_curso} course={course} />
        ))}
      </div>
      <div className="pagination-menu">
        <PaginationMenu totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default CourseList;
