import React from 'react'

export const RepresentantesList = () => {
  const list = [
    {
      name: "Maria Jaramillo",
      casa: "05",
      solvencia:"debe",
      id:1
    },
    {
      name: "Miguel Palma",
      casa: 10,
      solvencia:"no debe",
      id:2
    },
    {
      name: "Ramon Gonzalez",
      casa: 24,
      solvencia:"no debe",
      id:3
    },
    {
      name: " Petra Perez",
      casa: 16,
      solvencia:"debe",
      id:4
    },
    {
      name: "Jesus Jaramillo",
      casa: "05",
      solvencia:"no debe",
      id:5
    },{
      name: "Maria Jaramillo",
      casa: 15,
      solvencia:"debe",
      id:6
    },
    {
      name: "Marta Jimenez",
      casa: 50,
      solvencia:"no debe",
      id:7
    },{
      name: "Maria Jaramillo",
      casa: 35,
      solvencia:"debe",
      id:8
    }
  ]
  return (
    <div className='representante-list_container'>
        <ul>
          {
            list.map(({name, casa, solvencia, id})=>(
              <li key={id} className='representante-list_card' style={(solvencia==='debe') ? debe : Nodebe}>
                <h3>{name}</h3>
                <span style={{display:'flex', alignItems:'center', width:'100px', justifyContent:'space-between', marginRight:'5vw'}}>
                  <span style={{display:'flex', alignItems:'center', width:'45px', justifyContent:'space-between'}}>
                  <img src={(solvencia==='debe') ? './assets/delegado/icon-house-debe.svg' : './assets/delegado/icon-house-nodebe.svg'} alt='icono de casa'/>
                <h3>{casa}</h3>
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
