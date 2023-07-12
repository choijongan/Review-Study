import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers"
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/ProductReducer";
import AuthenticateReducer from './reducers/AuthenticateReducer'

// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
    reducer:{
        auth: AuthenticateReducer,
        product: ProductReducer,
    }
})

export default store;