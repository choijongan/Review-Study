import { legacy_createStore as createStore } from "redux";
import productReducer from "./reducers/ProductReducer";
let store = createStore(productReducer)

export default store