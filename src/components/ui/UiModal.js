import React, { useEffect } from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import './ui.css'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../actions/modalAction';
import {  useHistory, useLocation, useParams } from 'react-router-dom';


Modal.setAppElement('#root');

export const  UiModal = ({history}) => {
const {pathname} = useLocation()

const {openModal} = useSelector(state => state.modal)
const dispatch = useDispatch()

const startCloseModal = () => {
  // TODO: cerrar el modal
  dispatch( closeModal() );
}
    
const handlePaymentSave = (e) => {
    e.preventDefault();
    console.log('Se guardo un pago')
}

  return (
   <Modal
   isOpen={ openModal }
   className="modal"
   onRequestClose={startCloseModal }
   

          >{
            (pathname==='/perfil')&&  <div>
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
        </div>
          }
         {
            (pathname==='/inicio')&&  <div>
            <h3>Añadir pago</h3>   
            <form className='modal__form'> 
                <div className='modal_container--input'>
                  <input className='modal_input' placeholder='Name' type='text'/>
                  <input className='modal_input' placeholder='Nro de Casa' type='text'/>
                </div>
                <button className='modal_button--save' onClick={handlePaymentSave}>
                    Guardar
                </button>
            </form>
        </div>
          }
           
   </Modal>
  )
}
