import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from './reducers' //그냥 이렇게 써도되고, /reducers/index해도됨. 자동적용

import { configureStore } from "@reduxjs/toolkit";

let store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    ) //임의로 두 reducer 합친 index이름을 rootReducer로 주고 store로 보낸다
    //항상 combinereducer, thunk, applymiddleware, composewithdevtools를 써줘야 했음.

export default store