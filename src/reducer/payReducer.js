import {types} from '../types/types'

const initialState = {
  pagos:[]

}

export const payReducer = (state = initialState, action) => {
  switch (action.type) {

  case types.payLoad:
    return { ...state }

  default:
    return state
  }
}

