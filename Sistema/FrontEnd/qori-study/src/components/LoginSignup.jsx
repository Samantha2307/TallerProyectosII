import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';
import logo from './Assets/logo.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Login');
  const [pais, setPais] = useState('');
  
  // Lista de países (puedes agregar más según sea necesario)
  const countries = [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Paraguay",
    "Perú",
    "Uruguay",
    "Venezuela"
  ];

  const handleChange = (event) => {
    setPais(event.target.value);
  };

  return (
    <div className={`container-general ${action === 'Sign Up' ? 'signup' : ''}`}>
      <div className='imagen-fondo'>
        <div className='left'>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className='right'>
        <div className="section">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5" style={{paddingTop: '0.5rem!important', paddingBottom: '5rem!important'}}>
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3">
                    <span onClick={() => setAction('Login')} className={action === 'Login' ? 'active' : ''}>Log In</span>
                    <span onClick={() => setAction('Sign Up')} className={action === 'Sign Up' ? 'active' : ''}>Sign Up</span>
                  </h6>
                  <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Log In</h4>
                            <div className="form-group">
                              <input type="email" className="form-style" placeholder="Email"/>
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input type="password" className="form-style" placeholder="Password"/>
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <Link to="/home" className="btn mt-4">Login</Link>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-3 pb-3">Sign Up</h4>
                            <div className="form-group">
                              <input type="text" className="form-style" placeholder="Nombre Completo"/>
                              <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input type="email" className="form-style" placeholder="Email"/>
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input type="password" className="form-style" placeholder="Contraseña"/>
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <div className="form-group mt-2">
                              <select
                                className="form-style"
                                value={pais}
                                onChange={handleChange}
                              >
                                <option value="">Seleccione su país</option>
                                {countries.map(country => (
                                  <option key={country} value={country}>{country}</option>
                                ))}
                              </select>
                              <i className="input-icon uil uil-globe"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input type="date" className="form-style" placeholder="Fecha de Nacimiento"/>
                              <i className="input-icon uil uil-calendar-alt"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input type="number" className="form-style" placeholder="Número de Celular"/>
                              <i className="input-icon uil uil-phone"></i>
                            </div>
                            <a href="https://www.web-leb.com/code" className="btn mt-4">Register</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
