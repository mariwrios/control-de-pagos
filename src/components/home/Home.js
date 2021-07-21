import React from 'react'
import { UiModal } from '../ui/UiModal'
import { HeaderHome } from './HeaderHome'
import './home.css'
import { RepresentantesList } from './RepresentantesList'

export const Home = () => {
  return (
    <div className='delegado-home_container'>
   <HeaderHome/> 
   <UiModal/> 
   <RepresentantesList/>
      
    </div>
  )
}
