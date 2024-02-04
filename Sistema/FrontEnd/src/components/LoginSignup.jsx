import React, { useState } from 'react';
import './LoginSignup.css';

import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';
import person_icon from './Assets/person.png';
import logo from './Assets/logo.png';

export const LoginSignup = ( {onLogin} ) => {
  const [action, setAction] = useState('Login');

  const handleLoginClick = () => {
    onLogin();
    setAction("Login");
  };

  return (
    <div className={`container-general ${action === 'Sign Up' ? 'signup' : ''}`}>
      <div className='imagen-fondo'>
        <div className='left'>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className='right'>
        <div className={`container ${action === 'Sign Up' ? 'signup' : ''}`}>
          <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
          </div>
          <div className='inputs'>
            {action === "Login" ? <div></div> : <div className='input'>
              <img src={person_icon} alt="" />
              <input type="text" placeholder='Nombre' />
            </div>}

            {action === "Login" ? <div></div> : <div className='input'>
              <img src={person_icon} alt="" />
              <input type="text" placeholder='Apellidos' />
            </div>}
            
            {action === "Login" ? <div></div> : <div className='input'>
              <img src={email_icon} alt="" />
              <input type="email" placeholder='Email' />
            </div>}

            {action === "Login" ? <div></div> : <div className='input'>
              <img src={password_icon} alt="" />
              <input type="password" placeholder='Contraseña' />
            </div>}
        
            {action === "Login" ? <div></div> : <div className='input'>
              <img src={person_icon} alt="" />
              <input type="number" placeholder='DNI' />
            </div>}
            {action === "Login" ? <div></div> : 
            <div className='input'>
                <img src={person_icon} alt="" />
                <label>Género -</label>
                <select>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                </select>
            </div>
            }
            {action === "Login" ? <div></div> : <div className='input'>
              <img src={person_icon} alt="" />
              <input type="date" placeholder='Fecha de Nacimiento' />
            </div>}
            {action === "Login" ? <div></div> : <div className='input'>
              <img src={person_icon} alt="" />
              <input type="tel" placeholder='Número de Celular' />
            </div>}

            {action === "Sign Up" ? <div></div> : <div className='input'>
              <img src={email_icon} alt="" />
              <input type="email" placeholder='Email' />
            </div>}
            {action === "Sign Up" ? <div></div> : <div className='input'>
              <img src={password_icon} alt="" />
              <input type="password" placeholder='Password' />
            </div>}
          </div>
          {action === "Sign Up" ? <div></div> : <div className="forgot-password"><span> Lost Password? Click Here!</span></div>}
          <div className="submit-container">
            <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleLoginClick}>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};
