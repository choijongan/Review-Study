import { combineReducers } from 'redux'
import authenticateReducer from './authenticateReducer'
import ProductReducer from './ProductReducer'
import detailReducer from './detailReducer'

export default combineReducers({
    detail : detailReducer,
    auth : authenticateReducer,
    product : ProductReducer,
}) //index.js에 reducer 두개를 불러오고 auth, product라는 임의의 이름을 주고 합친다. combinereducers는 합칠때 필요함.