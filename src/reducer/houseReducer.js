import { types } from "../types/types"


const initialState = {
list:[],
active: null
}

export const houseReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.houseAddNew:
    return { 
      ...state,
      list:[action.payload, ...state.list]
    }

  default:
    return state
  }
}
