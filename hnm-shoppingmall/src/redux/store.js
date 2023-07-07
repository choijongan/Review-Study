import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers"


let store = createStore(rootReducer, applyMiddleware(thunk))

export default store;