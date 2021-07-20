import React from 'react'

export const HeaderHome = () => {

  const handleNewPersonRegister = ()=>{
    console.log('Quiero registrar a una nueva persona')
  }


  return (
    <div className='delegado-home_hero'>
    <div className='delegado-home_hero--header'>
      <span>Delegado</span>
    </div>
    <h2>Lista de Vecinos</h2>
    <div className='delegado-home_hero--subtitle'>
      <img src='./assets/delegado/icon-direction.svg' alt='icono de direccion'/>
      <h4>Tulipan, Calle #12 </h4>
    </div>
    <div className='delegado-home__buscador--container'>
    <input/>
    <img src='./assets/delegado/icon-lupa.svg' alt='icono de buscador'/>
   
    </div>
    <button onClick={handleNewPersonRegister} >
        <img src='./assets/delegado/icon-more-dark.svg' alt='icono de nuevo registro'/>
        Nuevo Registro
        </button>
  </div>
  )
}
