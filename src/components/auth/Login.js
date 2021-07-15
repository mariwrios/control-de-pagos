import React from 'react'
import './login.css'

export const Login = () => {
  return (
    <div className='login__container'>
      <img src='./assets/auth/logo.svg'/>
      <form>
        
        <input placeholder='Escriba su correo'/>
        
        <input placeholder='Escriba su contraseña'/>
        <button>Iniciar Sesión</button>
      </form>

      <h4>¿Olvidaste tu contraseña?</h4>
      
    </div>
  )
}


