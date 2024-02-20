import React, { useState, useEffect } from 'react';
import MisCursosCard from './MisCursosCard';
import PaginationMenu from './PaginationMenu';
import { http } from '../config/axios.config'; // Importa el cliente HTTP configurado

const MisCursosList = ({ filterData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [cursosComprados, setCursosComprados] = useState([]);
  const itemsPerPage = 8;
  const totalItems = 5;

  useEffect(() => {
    const fetchCursosComprados = async () => {
      setIsLoading(true);
      try {
        let url = `/curso/cursocomprado/1?page=${currentPage}&sizePage=${itemsPerPage}`;
        if (filterData.categoria !== 'Todas') {
          url += `&categoria=${filterData.categoria}`;
        }
        if (filterData.searchTerm) {
          url += `&nombre=${filterData.searchTerm}`;
        }
        const { data } = await http(url);
        setCursosComprados(data.cursos);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCursosComprados();
  }, [currentPage, filterData.categoria, filterData.searchTerm]);

  useEffect(() => {
    const fetchAllCourses = async () => {
      setIsLoading(true);
      try {
        const { data } = await http(`/curso/cursocomprado/1?page=1&sizePage=${totalItems}`);
        setCursosComprados(data.cursos);
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
        {cursosComprados.map((course, index) => (
          <MisCursosCard key={index} course={course} />
        ))}
      </div>
      <div className="pagination-menu">
        <PaginationMenu totalPages={Math.ceil(totalItems / itemsPerPage)} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default MisCursosList;
