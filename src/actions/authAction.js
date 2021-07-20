import { types } from "../types/types"



export const login = (email, password) => ({
  type: types.authLogin,
  payload:{
    email,
    password
  }
})

export const logout = () => ({
  type: types.authLogout
})