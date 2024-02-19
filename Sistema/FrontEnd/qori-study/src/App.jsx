import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';
import MenuVertical from './components/MenuVertical';
import CoursesScreen from './components/CoursesScreen';
import MisCursos from './components/MisCursos';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import BotonFlotante from './components/BotonFlotante';
import Chat from './components/Chat';
import './components/BotonFlotante.css';
import CourseDetail from './components/CourseDetail';
import VideoCourse from './components/VideoCourse';
import  Evaluacion from './components/Evaluacion';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginSignup} />
          <Route path="/home" component={Home} />
          <Route path="/home/perfil" component={Profile} />
          <Route path="/home/cursos" component={CoursesScreen} />
          <Route path="/home/miscursos" component={MisCursos} />
          <Route path="/curso/:idCurso" component={Detalle} />
          <Route path="/course/programacion-basica" component={VideoCourse} />
        </Switch>
        <BotonFlotante />
      </div>
    </Router>
  );
}
function Detalle(){
  const [selectedOption, setSelectedOption] = useState('Cursos');

  const handleMenuClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <MenuVertical onSelect={handleMenuClick} selectedOption={selectedOption} />
      <div className="content" style={{ marginLeft: '16%' }}>
        <Header />
      </div>
      <div className="content" style={{ marginLeft: '16%' }}>
        <CourseDetail />
        {selectedOption === 'Perfil' && <Profile />}
        {selectedOption === 'Mis cursos' && <MisCursos />}
      </div>
      <Footer />
    </>
  );
}

function Home() {
  const [selectedOption, setSelectedOption] = useState('Perfil');
  const [chatAbierto] = useState(false);

  const handleMenuClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <MenuVertical onSelect={handleMenuClick} selectedOption={selectedOption} />
      <div className="content" style={{ marginLeft: '16%' }}>
        <Header />
      </div>
      <div className="content" style={{ marginLeft: '16%' }}>
        {selectedOption === 'Perfil' && <Profile />}
        {selectedOption === 'Cursos' && <CoursesScreen />}
        {selectedOption === 'Mis cursos' && <MisCursos />}
        {selectedOption === 'Certificados' && <Evaluacion />}
      </div>
      <Footer />
      {chatAbierto && <Chat chatAbierto={chatAbierto} />}
    </>
  );
}

export default App;
