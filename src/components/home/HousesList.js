import React from 'react'
import { useSelector } from 'react-redux'

export const HousesList = () => {
 const {list} = useSelector(state => state.house)

  return (
    <div className='representante-list_container'>
        <ul>
          {
            list.map(({namer, apellidor, casar, solvencia=true, id})=>(
              <li key={id} className='representante-list_card' style={(solvencia==='debe') ? debe : Nodebe}>
                <h3>{namer} {apellidor}</h3>
                <span style={{display:'flex', alignItems:'center', width:'100px', justifyContent:'space-between', marginRight:'5vw'}}>
                  <span style={{display:'flex', alignItems:'center', width:'45px', justifyContent:'space-between'}}>
                  <img src={(solvencia==='debe') ? './assets/delegado/icon-house-debe.svg' : './assets/delegado/icon-house-nodebe.svg'} alt='icono de casa'/>
                <h3>{casar}</h3>
                  </span>
                
                <img src={(solvencia==='debe') ? './assets/delegado/icon-more-debe.svg' : './assets/delegado/icon-more-nodebe.svg'} alt='icono de agregar mas informacion'/>
                </span>
               
              </li>
            ))
          }
        </ul>
    </div>
  )
}

const debe = {
  color: '#FF5F68'
}

const Nodebe = {
  color: '#47A7BC'
}
