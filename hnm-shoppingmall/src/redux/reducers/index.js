import { combineReducers } from "@reduxjs/toolkit";
import AuthenticateReducer from "./AuthenticateReducer";
import ProductReducer from "./ProductReducer";

export default combineReducers({
    auth: AuthenticateReducer,
    product: ProductReducer,
})