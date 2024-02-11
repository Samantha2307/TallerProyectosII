import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';
import MenuVertical from './components/MenuVertical';
import CoursesScreen from './components/CoursesScreen';
import MisCursos from './components/MisCursos';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginSignup} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const [selectedOption, setSelectedOption] = useState('Perfil');

  const handleMenuClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <MenuVertical onSelect={handleMenuClick} selectedOption={selectedOption} />
      <div className="content" style={{ marginLeft: '16%' }}>
        {<Header />}
      </div>
      <div className="content" style={{ marginLeft: '16%' }}>
        {selectedOption === 'Perfil' && <Profile />}
        {selectedOption === 'Cursos' && <CoursesScreen />}
        {selectedOption === 'Mis cursos' && <MisCursos />}
      </div>
      <Footer />
    </>
  );
}

export default App;
