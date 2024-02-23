import React, { useState, useEffect } from 'react';
import MisCursosCard from './MisCursosCard';
import PaginationMenu from './PaginationMenu';
import { http } from '../config/axios.config';
import { useAuth } from '../AuthContext';

const MisCursosList = ({ filterData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [cursosComprados, setCursosComprados] = useState([]);
  const itemsPerPage = 8;
  const totalItems = 5;
  const { userId } = useAuth();
  useEffect(() => {
    const fetchCursosComprados = async () => {
      setIsLoading(true);
      try {
        let url = `/curso/cursocomprado/${userId}?page=${currentPage}&sizePage=${itemsPerPage}`;
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
        const { data } = await http(`/curso/cursocomprado/${userId}?page=1&sizePage=${totalItems}`);
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
