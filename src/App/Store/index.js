import { createStore } from 'redux'
import RootReducer from './Reducers/RootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const Store = createStore(RootReducer,undefined,composeWithDevTools())

export default Store