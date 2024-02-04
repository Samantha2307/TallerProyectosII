import React, { useState } from 'react';
import CourseList from './CourseList';
import './CoursesScreen.css';

const CoursesScreen = () => {
  const [filterData, setFilterData] = useState({
    type: 'Sincrónico',
    level: 'Intermedio',
    order: 'Precio',
    searchTerm: '',
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="courses-screen">
      <div className="filters-container">
        <div className="filter-item">
          <label htmlFor="type">Type:</label>
          <select name="type" id="type" value={filterData.type} onChange={handleFilterChange}>
            <option value="Sincrónico">Sincrónico</option>
            {/* Agrega otros tipos de cursos si es necesario */}
          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="level">Level:</label>
          <select name="level" id="level" value={filterData.level} onChange={handleFilterChange}>
            <option value="Intermedio">Intermedio</option>
            {/* Agrega otros niveles si es necesario */}
          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="order">Order:</label>
          <select name="order" id="order" value={filterData.order} onChange={handleFilterChange}>
            <option value="Precio">Precio</option>
            {/* Agrega otras opciones de orden si es necesario */}
          </select>
        </div>
      </div>
      <CourseList filterData={filterData} />
    </div>
  );
};

export default CoursesScreen;