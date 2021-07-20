import { types } from "../types/types"


const initialState = {
login: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

  case types.authLogin:
    return { 
      ...state,
       login: true,
       user:[action.payload]
      }

  case types.authLogout:
    return { 
      ...state,
        login: false,
        user:[]
      }

  default:
    return state
  }
}
