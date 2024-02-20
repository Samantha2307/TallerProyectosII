import React, { useState } from 'react';
import MisCursosList from './MisCursosList';
import './CoursesScreen.css';

const MisCursos = () => {
  const [filterData, setFilterData] = useState({
    categoria: 'Todas',
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
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar curso..."
          className="search-input"
          value={filterData.searchTerm}
          onChange={(e) => setFilterData({ ...filterData, searchTerm: e.target.value })}
        />
      </div>

      <div className="filters-container">
        <div className="filter-item">
        <label htmlFor="categoria">Categoría:</label>
          <select name="categoria" id="categoria" value={filterData.categoria} onChange={handleFilterChange}>
            <option value="Todas">Todas</option>
            <option value="Desarrollo Web">Desarrollo Web</option>
            <option value="Programación">Programación</option>
            <option value="Diseño Gráfico">Diseño Gráfico</option>
            <option value="Inglés">Inglés</option>
            <option value="Música">Música</option>
            <option value="Negocios y Emprendimiento">Negocios y Emprendimiento</option>
            <option value="Ciencias">Ciencias</option>
            <option value="Marketing Digital">Marketing Digital</option>
            <option value="Salud y Bienestar">Salud y Bienestar</option>
            <option value="Arte y Música">Arte y Música</option>
            <option value="Tecnología de Información">Tecnología de Información</option>

          </select>
        </div>
      </div>
      <div className="course-list">
        <MisCursosList filterData={filterData} />
      </div>
    </div>
  );
};

export default MisCursos;