import React from 'react'

export const RepresentantesList = () => {
  const list = [
    {
      name: "Maria Jaramillo",
      casa: "05",
      solvencia:"debe"
    },
    {
      name: "Miguel Palma",
      casa: 10,
      solvencia:"no debe"
    },
    {
      name: "Ramon Gonzalez",
      casa: 24,
      solvencia:"no debe"
    },
    {
      name: " Petra Perez",
      casa: 16,
      solvencia:"debe"
    },
    {
      name: "Jesus Jaramillo",
      casa: "05",
      solvencia:"no debe"
    },{
      name: "Maria Jaramillo",
      casa: 15,
      solvencia:"debe"
    },
    {
      name: "Marta Jimenez",
      casa: 50,
      solvencia:"no debe"
    },{
      name: "Maria Jaramillo",
      casa: 35,
      solvencia:"debe"
    }
  ]
  return (
    <div className='representante-list_container'>
        <ul>
          {
            list.map(({name, casa, solvencia})=>(
              <li style={(solvencia=='debe') ? debe : Nodebe}>
                <h3>{name}</h3>
                <span style={{display:'flex', alignItems:'center', width:'100px', justifyContent:'space-between'}}>
                  <span style={{display:'flex', alignItems:'center', width:'45px', justifyContent:'space-between'}}>
                  <img src={(solvencia=='debe') ? './assets/delegado/icon-house-debe.svg' : './assets/delegado/icon-house-nodebe.svg'}/>
                <h3>{casa}</h3>
                  </span>
                
                <img src={(solvencia=='debe') ? './assets/delegado/icon-more-debe.svg' : './assets/delegado/icon-more-nodebe.svg'}/>
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
