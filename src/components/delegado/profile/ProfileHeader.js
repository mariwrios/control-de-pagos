import React from 'react'

import './profile-delegado.css'
const ProfileHeader = () => {
  return (
    <div className='profile_container'>
      <div className='profile_header'>
        <img src='./assets/delegado/icon-edit.svg'/>
        <span>Delegado</span>
    </div>
    <img className='profilePhoto' src='./assets/delegado/foto-de-prueba.jpg'/>
    <div className='profile_header--info'>
      <h3>Maria Jaramillo</h3>
      <span>
        <img src='./assets/delegado/icon-direction-white.svg'/>
        <h4>Tulipan Calle# 32</h4>
      </span>
      <span>
        <img src='./assets/delegado/icon-email-white.svg'/>
        <h4>maria.jaramillo@gmail.com</h4>
      </span>
      <span>
        <img src='./assets/delegado/telefono.svg'/>
        <h4>0424-2345675</h4>
      </span>
    </div>
    </div>
  )
}

export default ProfileHeader

