import React from 'react'

export const ProfilePagosList = () => {
  return (
    <div className='pagos-list_container'>
      <ul>
        {
          pagosList.map(({fecha, ref, id})=>(
            <li key={id}>
              <div className='pagos-list_info-pago'>
                <h4>Referencia: <span>{ref}</span></h4>
                <div>
                  <img src='./assets/delegado/icon-calendar.svg'/>
                  <h3>{fecha}</h3>
                </div>
              </div>
              <button>
                Factura
                <img src='./assets/delegado/icon-descargar.svg'/>
              </button>
             
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const pagosList = [
  {
    fecha:'02/05/21',
    ref:'93845',
    id:1
  },
  {
    fecha:'02/05/21',
    ref:'93845',
    id:2
  },
  {
    fecha:'02/05/21',
    ref:'93845',
    id:3
  },
  {
    fecha:'02/05/21',
    ref:'93845',
    id:4
  },
  {
    fecha:'02/05/21',
    ref:'93845',
    id:5
  },
  {
    fecha:'02/05/21',
    ref:'93845',
    id:6
  },
  {
    fecha:'02/05/21',
    ref:'93845',
    id:7,
  },
  {
    fecha:'02/05/21',
    ref:'93845',
    id: 8
  }
]