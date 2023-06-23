import { createStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";


let store = createStore(reducer)

export default store