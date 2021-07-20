import React from 'react'
import './profile.css'


const ProfileHeader = () => {
  
const handleNewPago = () =>{
  console.log('quiero añadir un nuevo pago')
}

  return (
    <div className='profile_container'>
      <div className='profile_header'>
        <img src='./assets/delegado/icon-edit.svg' alt='icono de editar'/>
        <span>Delegado</span>
    </div>
    <img className='profilePhoto' src='./assets/delegado/foto-de-prueba.jpg' alt='imagen de prueba'/>
    <div className='profile_header--info'>
      <h3>Maria Milagros Jaramillo</h3>
      <span>
        <img src='./assets/delegado/icon-direction-white.svg' alt='icono de direccion'/>
        <h4>Tulipan Calle# 32</h4>
      </span>
      <span>
        <img src='./assets/delegado/icon-email-white.svg' alt='icono de email'/>
        <h4>maria.jaramillo@gmail.com</h4>
      </span>
      <span>
        <img src='./assets/delegado/telefono.svg' alt='icono de telefono'/>
        <h4>0424-2345675</h4>
      </span>
      <button onClick={handleNewPago} >
        <img src='./assets/delegado/icon-more-dark.svg' alt='icono de nuevo registro'/>
        Añadir Pago
        </button>
    </div>
    </div>
  )
}

export default ProfileHeader

