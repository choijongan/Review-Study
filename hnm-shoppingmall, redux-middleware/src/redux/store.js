import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/ProductReducer";
let store = createStore(productReducer, applyMiddleware(thunk))

export default store