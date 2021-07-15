import React from 'react'
import { HeaderHomeDelegado } from './HeaderHomeDelegado'
import './home-delegado.css'
import { RepresentantesList } from './RepresentantesList'

export const HomeDelegado = () => {
  return (
    <div className='delegado-home_container'>
   <HeaderHomeDelegado/>
   <RepresentantesList/>
      
    </div>
  )
}
