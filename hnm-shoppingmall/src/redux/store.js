import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import ProductReducer from "./reducers/ProductReducer";


let store = createStore(ProductReducer, applyMiddleware(thunk))

export default store;