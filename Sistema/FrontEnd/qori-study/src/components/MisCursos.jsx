import React, { useState } from 'react';
import MisCursosList from './MisCursosList';
import './CoursesScreen.css';

const MisCursos = () => {
  const [filterData, setFilterData] = useState({
    categoria: 'Residuos Sólidos',
    order: 'Precio (Ascendente)',
    searchTerm: '',
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleButtonClick = () => {
    console.log('Botón clicado');
  };
  

  return (
    <div className="courses-screen">
      <div className="filters-container">
        <div className="filter-item">
      
        </div>
        <div className="filter-item">
          <label htmlFor="categoria">Categoría:</label>
          <select name="categoria" id="categoria" value={filterData.categoria} onChange={handleFilterChange}>
            <option value="Todas las Categorías">Todas</option>
            <option value="Programación">Programación</option>
            <option value="Diseño Gráfico">Diseño Gráfico</option>
            <option value="Idiomas">Idiomas</option>
            <option value="Residuos Sólidos">Residuos Sólidos</option>
            <option value="Negocios y Emprendimiento">Negocios y Emprendimiento</option>
            <option value="Ciencia de Datos">Ciencia de Datos</option>
            <option value="Marketing Digital">Marketing Digital</option>
            <option value="Salud y Bienestar">Salud y Bienestar</option>
            <option value="Arte y Música">Arte y Música</option>
            <option value="Tecnología de Información">Tecnología de Información</option>

          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="order">Order:</label>
          <select name="order" id="order" value={filterData.order} onChange={handleFilterChange}>
            <option value="Precio (Ascendente)">Precio (Ascendente)</option>
            <option value="Precio (Descendente)">Precio (Descendente)</option>
            <option value="Popularidad (Ascendente)">Popularidad (Ascendente)</option>
            <option value="Popularidad (Descendente)">Popularidad (Descendente)</option>
            <option value="Calificación (Ascendente)">Calificación (Ascendente)</option>
            <option value="Calificación (Descendente)">Calificación (Descendente)</option>
            <option value="Duración de Curso (Ascendente)">Duración de Curso (Ascendente)</option>
            <option value="Duración de Curso (Descendente)">Duración de Curso (Descendente)</option>
          </select>
        </div>
        <div className="button-container">
          <button className="custom-button" onClick={handleButtonClick}>
            Reiniciar Filtros
          </button>
        </div>
      </div>
      <div className="course-list">
        <MisCursosList filterData={filterData} />
      </div>
    </div>
  );
};

export default MisCursos;