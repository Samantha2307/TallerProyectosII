import React, { useState, useEffect } from 'react';
import './Profile.css'
import ProfileInfo from './ProfileInfo';
import perfilUsuario from './jsons/perfilUsuario.json'; 
import datoslUsuario from './jsons/datosUsuario.json'; 

export const Profile = () => {
  const [errorPopupVisible, setErrorPopupVisible] = useState(false);
  const [mensajePopup, setMensajePopup] = useState(null);
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);
  const usuario = perfilUsuario.perfilUsuario[0];
  const user = datoslUsuario.datosUsuario[0];
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

  const actualizarDatos = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/perfil/aDatosPersonales/902259917/peru/6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario_pais: usuario.usuario_pais,
          usuario_telefono: usuario.usuario_telefono,
        }),
      });

      if (response.ok) {
          setSuccessPopupVisible(true);
          setTimeout(() => {
            setSuccessPopupVisible(false);
          }, 3000);
      } else {
        setErrorPopupVisible(true);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud a la API:', error);
      setErrorPopupVisible(true);
    }
  };
  const actualizarContraseña = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/perfil/aPassword/sbkdak/1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          
        }),
      });

      if (response.ok) {
     
        setMensajePopup('Contraseña actualizada con éxito');
      } else {
        setMensajePopup('Error al actualizar contraseña: ' + response.statusText);
      }
    } catch (error) {
      setMensajePopup('Error al realizar la solicitud a la API: ' + error.message);
    }
  };
  const cambiarFoto = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/perfil/aImagen/a/1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario_imagen: usuario.usuario_imagen,
        }),
      });

      if (response.ok) {
     
        console.log('Foto Actualizada con éxito');
      } else {
        console.error('Error al actualizar Foto:', response.statusText);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud a la API:', error);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='text-profile'>Mi Perfil</div>
        <div class="container-datos">
          <img
            src={usuario.usuario_imagen}
            className="imagen-c"
          />
          <div class='datos'>
            <ProfileInfo value={usuario.nombre}/>
            <ProfileInfo value="·" />
            <ProfileInfo value={usuario.usuario_telefono} iconSrc1={`${process.env.PUBLIC_URL}/img/tel.png`} />
            <ProfileInfo value="·" />
            <ProfileInfo value={usuario.usuario_correo} iconSrc2={`${process.env.PUBLIC_URL}/img/cor.png`} />
            <ProfileInfo value="·" />
            <ProfileInfo value={usuario.usuario_dni} iconSrc3={`${process.env.PUBLIC_URL}/img/id-card.png`} />
          </div>
        </div>
        <button class="submit" onClick={cambiarFoto}>Cambiar Foto</button>
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
                <div className='text'style={{ fontSize: '90%', marginLeft: '3%'}}> {user.usuario_fecha_nacimiento}</div>
                </div>
              <div>
                <div className='text'>Número de Celular</div>
                <input className='datos-container' type="phone" Value={user.usuario_telefono} />
              </div>
            </div>
            <div className='left'>
              <div>
                <div className='text'>Pais de Residencia</div>
                <input className='datos-container' type="text" Value={user.usuario_pais} />
              </div>
            </div>
            <button class="submit1" onClick={actualizarDatos}>Actualizar Datos</button>
             {/* Popup de éxito */}
        {successPopupVisible && (
          <div className="popup success">
            <p>¡Datos actualizados con éxito!</p>
          </div>
        )}

        {/* Popup de error */}
        {errorPopupVisible && (
          <div className="popup error">
            <p>Error al actualizar datos. Por favor, inténtalo nuevamente.</p>
          </div>
        )}
          </>
        )}
        {selectedOption === 'Seguridad' && (
                    <>
                    <div className='left'>
                      <div>
                        <div className='text'>Correo Electrónico</div>
                        <div className='text'style={{ fontSize: '90%', fontWeight: 'bold', marginLeft: '10%'}}>{usuario.usuario_correo}</div>
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
                    <button class="submit1" onClick={actualizarContraseña}>Actualizar Contraseña</button>
                    {mensajePopup && (
                   <div className="popup">
                    <p>{mensajePopup}</p>
                    <button onClick={() => setMensajePopup(null)}>Cerrar</button>
  </div>
)}
                  </>
        )}
        </div>
      </div>
    </>
  )
}
export default Profile;