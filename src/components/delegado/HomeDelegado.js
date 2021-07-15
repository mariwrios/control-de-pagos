import React from 'react'
import './home-delegado.css'

export const HomeDelegado = () => {
  return (
    <div className='delegado-home_container'>
      <div className='delegado-home_hero'>
        <div className='delegado-home_hero--header'>
          <img src='./assets/delegado/icon-arrow-left.svg'/>
          <span>Delegado</span>
        </div>
        <h2>Lista de Vecinos</h2>
        <div className='delegado-home_hero--subtitle'>
          <img src='./assets/delegado/icon-direction.svg'/>
          <h4>Tulipan </h4>
          <h4> Calle #12</h4>
        </div>
        
        <input/>
      </div>
      
    </div>
  )
}
