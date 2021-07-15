import React from 'react'
import { useForm } from '../../hooks/useForm'
import './login.css'

export const Login = () => {
  const initialForm ={
    email: '',
    password:''
  }
  const [formValues, handleInputChange, reset] = useForm(initialForm)

  const {email, password} = formValues;

  const hadleInputSubmit = (e) => {
    e.preventDefault();
    console.log(formValues)
  }

  return (
    <div className='login__container'>
      <img src='./assets/auth/logo.svg'/>

      <form onSubmit={hadleInputSubmit}>
        
        <input placeholder='Escriba su correo' name='email' value={email} onChange={handleInputChange} type='email' autoComplete='off'/>
        
        <input placeholder='Escriba su contraseña' name='password' value={password} onChange={handleInputChange} type='password' autoComplete='off'/>
        <button>Iniciar Sesión</button>
      </form>

      <h4>¿Olvidaste tu contraseña?</h4>
      
    </div>
  )
}


