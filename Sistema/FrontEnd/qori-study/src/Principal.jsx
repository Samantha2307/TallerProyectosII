import React, { useState } from 'react';
import MenuVertical from './components/MenuVertical';
import CoursesScreen from './components/CoursesScreen';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import MisCursos from './components/MisCursos';

function App() {
  const [selectedOption, setSelectedOption] = useState('Cursos');

  const handleMenuClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <MenuVertical onSelect={handleMenuClick} selectedOption={selectedOption} />
      <div className="content" style={{ marginLeft: '16%' }}>
        {<Header />}
      </div>
      <div className="content" style={{ marginLeft: '16%' }}>
        {selectedOption === 'Perfil' && <Profile />}
        {selectedOption === 'Cursos' && <CoursesScreen />}
        {selectedOption === 'Mis cursos' && <MisCursos />}
        {/* Agrega más condiciones para otras opciones si es necesario */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
