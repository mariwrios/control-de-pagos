import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/authAction'
import { useForm } from '../../hooks/useForm'
import './login.css'

export const Login = () => {
const dispatch = useDispatch()

  const initialForm ={
    email: 'mari@gmail.com',
    password:'123456'
  }
  const [formValues, handleInputChange] = useForm(initialForm)

  const {email, password} = formValues;

  const hadleInputSubmit = (e) => {
    e.preventDefault();
    dispatch(login())
   console.log(email,password)
  }


  return (
    <div className='login__container'>
      <img src='./assets/auth/logo.svg' alt='Logo de ASOVECIB'/>

      <form onSubmit={hadleInputSubmit}>
        
        <input 
        placeholder='Escriba su correo' 
        name='email' 
        value={email} 
        onChange={handleInputChange} 
        type='email' 
        autoComplete='off'/>
        
        <input 
        placeholder='Escriba su contraseña' 
        name='password' value={password} 
        onChange={handleInputChange} 
        type='password' 
        autoComplete='off'/>
        <button>Iniciar Sesión</button>
      </form>

      <h4>¿Olvidaste tu contraseña?</h4>
      
    </div>
  )
}


