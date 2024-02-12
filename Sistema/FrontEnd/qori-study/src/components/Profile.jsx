import React, { useState, useEffect } from 'react';
import './Profile.css'
import ProfileInfo from './ProfileInfo';

export const Profile = () => {
  const [selectedOption, setSelectedOption] = useState('Datos Personales');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  
  const [iconStyle, setIconStyle] = useState({
    datosPersonales: {
      color: 'white',
      iconSrc: `${process.env.PUBLIC_URL}/img/datos.png`,
    },
    seguridad: {
      color: 'white',
      iconSrc: `${process.env.PUBLIC_URL}/img/correocontraseña.png`,
    },
  });

  useEffect(() => {
    if (selectedOption === 'Datos Personales') {
      setIconStyle({
        datosPersonales: {
          color: '#68C2E8',
          iconSrc: `${process.env.PUBLIC_URL}/img/datos_selected.png`,
        },
        seguridad: {
          color: 'white',
          iconSrc: `${process.env.PUBLIC_URL}/img/correocontraseña.png`,
        },
      });
    } else if (selectedOption === 'Seguridad') {
      setIconStyle({
        datosPersonales: {
          color: 'white',
          iconSrc: `${process.env.PUBLIC_URL}/img/datos.png`,
        },
        seguridad: {
          color: '#68C2E8',
          iconSrc: `${process.env.PUBLIC_URL}/img/correocontraseña_selected.png`,
        },
      });
    }
  }, [selectedOption]);

  return (
    <>
      <div className='container'>
        <div className='text-profile'>Mi Perfil</div>
        <div class="container-datos">
          <img
            src={`${process.env.PUBLIC_URL}/img/perfil1.png`}
            className="imagen-circular"
            alt="Imagen Circular"
          />
          <div class='datos'>
            <ProfileInfo value="Juan Pérez Melgar" />
            <ProfileInfo value="·" />
            <ProfileInfo value="902689369" iconSrc1={`${process.env.PUBLIC_URL}/img/tel.png`} />
            <ProfileInfo value="·" />
            <ProfileInfo value="jperezm@gmail.com" iconSrc2={`${process.env.PUBLIC_URL}/img/cor.png`} />
            <ProfileInfo value="·" />
            <ProfileInfo value="77698542" iconSrc3={`${process.env.PUBLIC_URL}/img/id-card.png`} />
          </div>
        </div>
        <button class="submit">Cambiar Foto</button>
        <div class="options">
          <div
           className={`option ${selectedOption === 'Datos Personales' ? 'selected' : ''}`}
           onClick={() => handleOptionClick('Datos Personales')}
          >
            <img className='icon'
              src={iconStyle.datosPersonales.iconSrc}
              alt="Datos Personales"
              style={{ color: iconStyle.datosPersonales.color }}
            />
            <span className="content1"> Datos Personales </span>
          </div>
          <div
            className={`option ${selectedOption === 'Seguridad' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('Seguridad')}
          >
            <img className='icon'
              src={iconStyle.seguridad.iconSrc}
              alt='Seguridad'
              style={{ color: iconStyle.seguridad.color }}
            />
            <span className="content1"> Seguridad </span>
          </div>
        </div>
        <div className='divider'></div>
        <div className='datosgenerales'>
        {selectedOption === 'Datos Personales' && (
          <>
            <div className='left'>
              <div>
                <div className='text'>Fecha de Nacimiento</div>
                <input className='datos-container' type="date" defaultValue="2012-04-05" />
              </div>
              <div>
                <div className='text'>Número de Celular</div>
                <input className='datos-container' type="phone" defaultValue="902689369" />
              </div>
            </div>
            <div className='left'>
              <div>
                <div className='text'>Pais de Residencia</div>
                <input className='datos-container' type="text" defaultValue="Perú" />
              </div>
              <div>
                <div className='text'>Nombre de Usuario</div>
                <input className='datos-container' type="text" defaultValue="Jperez" />
              </div>
            </div>
          </>
        )}
        {selectedOption === 'Seguridad' && (
                    <>
                    <div className='left'>
                      <div>
                        <div className='text'>Correo Electrónico</div>
                        <div className='text'style={{ fontSize: '90%', fontWeight: 'bold', marginLeft: '10%'}}>jperezm@gmail.com </div>
                      </div>
                    </div>
                    <div className='left'>
                      <div>
                        <div className='text'>Contraseña</div>
                        <input className='datos-container' type="password" defaultValue="12345" />
                      </div>
                      <div>
                        <div className='text'>Confirmar Contraseña</div>
                        <input className='datos-container' type="password" defaultValue="12345" />
                      </div>
                    </div>
                  </>
        )}
        </div>
        <button class="submit1">Actualizar Datos</button>
      </div>
    </>
  )
}
export default Profile;