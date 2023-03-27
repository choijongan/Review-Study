import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from './reducers' //그냥 이렇게 써도되고, /reducers/index해도됨. 자동적용
import detailReducer from './reducers/ProductReducer'
import authenticateReducer from './reducers/authenticateReducer'
import ProductReducer from "./reducers/ProductReducer";


import { configureStore } from "@reduxjs/toolkit";

// let store = createStore(
//     rootReducer, 
//     composeWithDevTools(applyMiddleware(thunk))
//     ) 임의로 두 reducer 합친 index이름을 rootReducer로 주고 store로 보낸다
    //항상 combinereducer, thunk, applymiddleware, composewithdevtools를 써줘야 했음.
    //configurestore는 자동임. 거기에 index.js를 쓸필요 없이 내용 그대로 가져오면 됨.
const store = configureStore({
    reducer:{
        detail : detailReducer,
        auth : authenticateReducer,
        product : ProductReducer,
    }
})

export default store