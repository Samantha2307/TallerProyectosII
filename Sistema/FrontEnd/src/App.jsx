import React, { useState } from 'react';
import MenuVertical from './components/MenuVertical';
import CoursesScreen from './components/CoursesScreen';
import Footer from './components/Footer';
import Header from './components/Header';
import "./global.css";
import "./styleguide.css";
import { Eaulavirtual } from "./screens/Eaulavirtual";
import { Evaluacion } from "./screens/Evaluacion";

function App() {
  const [selectedOption, setSelectedOption] = useState('Cursos');

  const handleMenuClick = (option) => {
    setSelectedOption(option);
  };

  return (
    
    <div className="App">
      <Evaluacion />,
      {/*<MenuVertical onSelect={handleMenuClick} selectedOption={selectedOption} />
      <div className="content" style={{ marginLeft: '17vw' }}>
        {<Header />}
      </div>
      <div className="content" style={{ marginLeft: '17vw' }}>
        {selectedOption === 'Cursos' && <CourseContent />}
    </div>
      <Footer />*/}
    </div>
  );
}

export default App;