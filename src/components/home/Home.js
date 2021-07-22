import React from 'react'
import { UiModal } from '../ui/UiModal'
import { HeaderHome } from './HeaderHome'
import './home.css'
import { HousesList } from './HousesList'

export const Home = () => {
  return (
    <div className='delegado-home_container'>
   <HeaderHome/> 
   <UiModal/> 
   <HousesList/>
      
    </div>
  )
}
