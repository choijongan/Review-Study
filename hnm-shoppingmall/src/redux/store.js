import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productReducer from "./reducers/ProductReducer";


let store = createStore(productReducer, applyMiddleware(thunk))

export default store