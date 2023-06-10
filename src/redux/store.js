import { configureStore} from '@reduxjs/toolkit'
import rightSlice from './rightSlice';
import leftSlice from './leftSlice';

const store = configureStore({
    reducer : {
        left : leftSlice,
        right : rightSlice
    }
})
export default store;