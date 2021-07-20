import React from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import './payment.css'


Modal.setAppElement('#root');

export const PaymentModal = () => {
    
const handlePaymentSave = (e) => {
    e.preventDefault();
    console.log('Se guardo un pago')
}

  return (
   <Modal
   isOpen={ true }
   ariaHideApp={false}
   className="modal"

          >
           <h3>Añadir pago</h3>   
           <form className='modal__form'> 
               <div className='modal_container--input'>
                <input className='modal_input' placeholder='Name' type='text'/>
                <input className='modal_input' placeholder='Nro de Casa' type='text'/>
               </div>
              <div className='modal_container--input'>
                <input className='modal_input' placeholder='Nro de referencia' type='number'/>
                <input className='modal_input'  placeholder='Monto a pagar' type='number'/>
              </div>
              <DateTimePicker
                    />
                    <DateTimePicker
                    />
                    
         
               <input  type='file'/>
               <button className='modal_button--save' onClick={handlePaymentSave}>
                   Guardar
               </button>
           </form>
   </Modal>
  )
}
