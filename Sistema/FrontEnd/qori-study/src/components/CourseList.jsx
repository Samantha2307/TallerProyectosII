import React, { useEffect, useState } from 'react';
import { http } from '../config/axios.config';
import CourseCard from './CourseCard';
import PaginationMenu from './PaginationMenu';

const CourseList = ({ filterData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 8;
  const totalItems = 5;
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let url = `/curso/listadocurso?page=${currentPage}&sizePage=${itemsPerPage}`;
        if (filterData.categoria !== 'Todas') {
          url += `&categoria=${filterData.categoria}`;
        }
        if (filterData.searchTerm) {
          url += `&nombre=${filterData.searchTerm}`;
        }
        const { data } = await http(url);
        setCursos(data.cursos);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, filterData.categoria, filterData.searchTerm]); 

  useEffect(() => {
    const fetchAllCourses = async () => {
      setIsLoading(true);
      try {
        const { data } = await http(`/curso/listadocurso?page=1&sizePage=${totalItems}`);
        setCursos(data.cursos);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (filterData.categoria === 'Todas') {
      fetchAllCourses();
    }
  }, [filterData.categoria, totalItems]); 

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
          totalPages={Math.ceil(totalItems / itemsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CourseList;