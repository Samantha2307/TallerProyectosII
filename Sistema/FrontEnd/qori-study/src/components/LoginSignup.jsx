import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './LoginSignup.css';
import logo from './Assets/logo.png';
import { useAuth } from '../AuthContext';

const LoginSignup = () => {
  const [action, setAction] = useState('Login');
  const [pais, setPais] = useState('');
  const [error, setError] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [nombre, setNombre] = useState('');
  const [correo2, setCorreo2] = useState('');
  const [clave2, setClave2] = useState('');
  const [nacimiento, setnacimiento] = useState('');
  const [celular, setcelular] = useState('');
  const history = useHistory();

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

  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/v1/Auth/Login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo, clave })
      });
  
      // Verificar el estado de la respuesta
      if (response.ok) {
        // Manejar la respuesta en caso de éxito
        const responseData = await response.json();
        if(responseData.status!=="error"){
          console.log("Inicio de sesión exitoso:", responseData);
          const userId = responseData[0].id_usuario; // Accede al ID de usuario correctamente
          login(userId);
          history.push('/home');
        }
        else{
          console.log("Error al iniciar sesión", responseData);
          setError('¡Datos incorrectos!');
        }
      } else {
        // Manejar la respuesta en caso de error
        const responseData = await response.json();
        setError(responseData.message || 'Error al iniciar sesión');
        console.error("Inicio de sesión fallido:", responseData);
      }
    } catch (error) {
      setError('Error de conexión. Por favor, inténtalo de nuevo.');
      console.error("Error de conexión:", error);
    }
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = `http://localhost:4000/api/v1/sesion/registrarUsuario?nombres=${nombre}&apellidos=-&correo=${correo2}&password=${clave2}&genero=0&fecha_nacimiento=${nacimiento}&numero=${celular}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("Registro exitoso:", responseData);
        setError("¡USUARIO REGISTRADO CON EXITO!");
      } else {
        const responseData = await response.json();
        setError(responseData[0].mensaje || 'Error al registrar usuario');
        console.error("Error al registrar usuario:", responseData);
      }
    } catch (error) {
      setError('Error de conexión. Por favor, inténtalo de nuevo.');
      console.error("Error de conexión:", error);
    }
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
                            <form onSubmit={handleSubmit}>
                              <div className="form-group">
                              <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    required
                                  />
                                <i className="input-icon uil uil-at"></i>
                              </div>
                              <div className="form-group mt-2">
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    value={clave}
                                    onChange={(e) => setClave(e.target.value)}
                                    required
                                  />
                                <i className="input-icon uil uil-lock-alt"></i>
                              </div>
                              <button type="submit" className="btn mt-4">Login</button>
                              {error && <p className="error-message">{error}</p>}
                            </form>
                          </div>
                        </div>
                      </div>
                      
  <div className="card-back">
    <div className="center-wrap">
      <div className="section text-center">
        <h4 className="mb-3 pb-3">Sign Up</h4>
        <form onSubmit={handleSignupSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-style"
              placeholder="Nombre Completa"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <i className="input-icon uil uil-user"></i>
          </div>
          <div className="form-group mt-2">
            <input
              type="text"
              className="form-style"
              placeholder="Correo"
              value={correo2}
              onChange={(e) => setCorreo2(e.target.value)}
              required
            />
            <i className="input-icon uil uil-at"></i>
          </div>
          <div className="form-group mt-2">
            <input
              type="password"
              className="form-style"
              placeholder="Contraseña"
              value={clave2}
              onChange={(e) => setClave2(e.target.value)}
              required
            />
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
            <input
              type="date"
              className="form-style"
              placeholder="aaaa-mm-dd"
              value={nacimiento}
              onChange={(e) => setnacimiento(e.target.value)}
              required
            />
            <i className="input-icon uil uil-calendar-alt"></i>
          </div>
          <div className="form-group mt-2">
            <input
              type="number"
              className="form-style"
              placeholder="Número de Celular"
              value={celular}
              onChange={(e) => setcelular(e.target.value)}
              required
            />
            <i className="input-icon uil uil-phone"></i>
          </div>
          <button type="submit" className="btn mt-4">Register</button>
        </form>
        {error && <p className="error-message">{error}</p>}
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
