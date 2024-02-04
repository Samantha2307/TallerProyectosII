import React from 'react'
import './Profile.css'
import person_icon from './Assets/person.png'
import ProfileInfo from './ProfileInfo';

export const Profile = () => {
  return (
    <>
      
      <div className='container'>
      <div className='text-profile'>Editar Perfil</div>
      <div class="container-datos">
      <img
          src={person_icon}
          className="imagen-circular"
          alt="Imagen Circular"
        />
        <div class='datos'>
          <ProfileInfo  value="Juan Pérez Melgar" />
          <ProfileInfo  value="902689369" />
          <ProfileInfo  value="jperezm@gmail.com" />
        </div>
      </div>
      <div class="submit">Cambiar Foto</div>
      <div class="options">
      <div className="options"><span> Datos Personales</span></div>
      <div className="options"><span> Correo</span></div>
      <div className="options"><span> Contraseña</span></div>
      </div>
      <div className='divider'></div>
      <div className='left'>
        <div>
        <div className='text'>Fecha de Nacimiento</div>
        <div className='datos-container'>04/05/2012</div>
        </div>
        <div>
        <div className='text'>Número de Celular</div>
        <div className='datos-container'>Perú</div>
        </div>
      </div>
      <div className='left'>
        <div>
        <div className='text'>Pais de Residencia</div>
        <div className='datos-container'>04/05/2012</div>
        </div>
        <div>
        <div className='text'>Nombre de Usuario</div>
        <div className='datos-container'>Perú</div>
        </div>
      </div>
      </div>
    </>
  )
}