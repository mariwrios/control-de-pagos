import React from 'react'
import { HeaderHome } from './HeaderHome'
import './home.css'
import { RepresentantesList } from './RepresentantesList'

export const Home = () => {
  return (
    <div className='delegado-home_container'>
   <HeaderHome/>  
   <RepresentantesList/>
      
    </div>
  )
}
