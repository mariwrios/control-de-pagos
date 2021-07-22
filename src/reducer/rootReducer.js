import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { houseReducer } from "./houseReducer";
import { modalReducer } from "./modalReducer";
import { payReducer } from "./payReducer";


export const rootReducer = combineReducers({
auth: authReducer,
pagos: payReducer,
modal: modalReducer,
house: houseReducer
})