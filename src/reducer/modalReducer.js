import { types } from "../types/types"

const initialState = {
  openModal: false
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {

  case types.OpenModal:
    return { 
      ...state,
      openModal: true
    }

  case types.CloseModal:
    return {
      ...state,
      openModal: false
    }




  default:
    return state
  }
}
