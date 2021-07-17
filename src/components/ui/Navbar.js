import React from 'react'
import { Link } from "react-router-dom"
import './ui.css'


export const Navbar = () => {
  return (
    <div className='navbar_container'>
       <nav>
          <ul>
            <li>
              <Link to="/inicio">
                <img src='./assets/ui/icon-inicio.svg'/>
                Inicio
                </Link>
            </li>
            <li>
              <Link to="/pagos">
              <img src='./assets/ui/icon-pagos.svg'/>
                Pagos</Link>
            </li>
            <li>
              <Link to="/perfil">
              <img src='./assets/ui/icon-perfil.svg'/>
                Perfil</Link>
            </li>
            <li>
              <Link to="/ajustes">
              <img src='./assets/ui/icon-ajustes.svg'/>
                Ajustes</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
