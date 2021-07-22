import { types } from "../types/types";

export const addNewHouse = ( id, note ) => ({
  type: types.houseAddNew,
  payload: {
      id, ...note
  }
})