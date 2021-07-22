import React from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import './ui.css'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../actions/modalAction';
import { useLocation} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { addNewHouse } from '../../actions/houseAction';


Modal.setAppElement('#root');

const initialPaymentForm ={
  namep: 'mari@gmail.com',
  casap:'123456',
  referenciap:'',
  montop:''
}

const initialRegisterForm ={
  namer: '',
  apellidor:'',
  casar:'',
  telefonor:''
}

export const  UiModal = () => {
const {pathname} = useLocation()
const {openModal} = useSelector(state => state.modal)
const dispatch = useDispatch()

const [valuePayment, handleInputChangePayment, resetp] = useForm(initialPaymentForm)

const [valueRegister, handleInputChangeRegister, resetr] = useForm(initialRegisterForm)

const {namep, casap, referenciap, montop} = valuePayment


const {namer, apellidor, casar, telefonor} = valueRegister


const startCloseModal = () => {
  dispatch( closeModal() );
}
    
const handlePaymentSave = (e) => {
    e.preventDefault();
   

  if(pathname==='/perfil'){
    console.log('Se registro un pago');
    console.log(valuePayment)
  }else if (pathname==='/inicio'){
    console.log('Se registro una casa');
    dispatch(addNewHouse(Math.random(), valueRegister))
    console.log(valueRegister)
  }

  dispatch( closeModal() );
  resetr()

}

  return (
   <Modal
   isOpen={ openModal }
   className="modal"
   onRequestClose={startCloseModal }
   

          >{
              (pathname==='/perfil')
                 &&  
                  <div>
                    <h3>Añadir pago</h3>   
                    <form className='modal__form'> 
                      <div className='modal_container--input'>
                        <input 
                          className='modal_input' 
                          placeholder='Name' 
                          type='text' 
                          value={namep} 
                          name='namep'
                          onChange={handleInputChangePayment}
                        />
                        <input 
                          className='modal_input' 
                          placeholder='Nro de Casa' 
                          type='text' 
                          value={casap} 
                          name='casap'
                          onChange={handleInputChangePayment}
                          />
                      </div>
                      <div className='modal_container--input'>
                        <input 
                          className='modal_input' 
                          placeholder='Nro de referencia' 
                          type='number'
                          value={referenciap} 
                          name='referenciap'
                          onChange={handleInputChangePayment}
                          />
                        <input 
                          className='modal_input'  
                          placeholder='Monto a pagar' 
                          type='number'
                          value={montop} 
                          name='montop'
                          onChange={handleInputChangePayment}
                          />
                      </div>
                      <DateTimePicker/>
                      <DateTimePicker/>
                      <input  type='file'/>
                      <button className='modal_button--save' onClick={handlePaymentSave}>
                          Guardar
                      </button>
                    </form>
                  </div>
          }
         {
              (pathname==='/inicio')
                &&  
                  <div>
                      <h3>Añadir Casa</h3>   
                      <form className='modal__form'> 
                          <div className='modal_container--input'>
                            <input 
                              className='modal_input' 
                              placeholder='Name' 
                              type='text'
                              value={namer} 
                              name='namer'
                              onChange={handleInputChangeRegister}
                              />
                              
                            <input 
                              className='modal_input' 
                              placeholder='Apellido' 
                              type='text'
                              value={apellidor} 
                              name='apellidor'
                              onChange={handleInputChangeRegister}
                              />
                                                
                          </div>
                          <div>
                            <input 
                              className='modal_input' 
                              placeholder='Nro de Casa' 
                              type='text'
                              value={casar} 
                              name='casar'
                              onChange={handleInputChangeRegister}/>
                            <input 
                              className='modal_input' 
                              placeholder='Telefono' 
                              type='number'
                              value={telefonor} 
                              name='telefonor'
                              onChange={handleInputChangeRegister}/>   
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
