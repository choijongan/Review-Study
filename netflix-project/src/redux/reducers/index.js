import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "./movieReducer";

//많은 reducer를 하나로 합치는 작업하는 곳(combineReducer)
//store에 보내주는 rootReducer임.

export default combineReducers({
    movie: movieReducer,
});