import React from 'react'
import { Link } from "react-router-dom"
import './ui.css'


export const Navbar = () => {
  return (
    <div className='navbar_container'>
       <nav>
          <ul>
            <li>
              <Link to="/inicio">Inicio</Link>
            </li>
            <li>
              <Link to="/pagos">Pagos</Link>
            </li>
            <li>
              <Link to="/perfil">Perfil</Link>
            </li>
            <li>
              <Link to="/ajustes">Ajustes</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
