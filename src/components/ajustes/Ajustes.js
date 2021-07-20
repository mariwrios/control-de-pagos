import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/authAction';

export const Ajustes = () => {
  const dispatch = useDispatch()
  const handleLogout = (e)=>{
    e.preventDefault();
    dispatch(logout())
    
  }
  return (
    <div>
      <button onClick={handleLogout} >logout</button>
    </div>
  )
}
