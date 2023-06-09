import {applyMiddleware, configureStore} from '@reduxjs/toolkit'
import reduxThunk from 'redux-thunk'
import rightSlice from './rightSlice';
import leftSlice from './leftSlice';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = configureStore({
    reducer : {
        left : leftSlice,
        right : rightSlice
    }
},enhancer(applyMiddleware(reduxThunk)))
export default store;