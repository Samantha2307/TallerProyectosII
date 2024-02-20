import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import BotonFlotante from './components/BotonFlotante';
import './components/BotonFlotante.css';
import Chat from './components/Chat';
import CourseDetail from './components/CourseDetail';
import CoursesScreen from './components/CoursesScreen';
import Evaluacion from './components/Evaluacion';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginSignup from './components/LoginSignup';
import MenuVertical from './components/MenuVertical';
import MisCursos from './components/MisCursos';
import Profile from './components/Profile';
import VideoCourse from './components/VideoCourse';

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
          <Route path="/video/curso/:id" component={VideoCourse} />
        </Switch>
        <BotonFlotante />
      </div>
    </Router>
  );
}
function Detalle() {
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
