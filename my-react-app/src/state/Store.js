import {configureStore} from '@reduxjs/toolkit'
import { loginReducer, registerReducer } from './Slice/AuthSlice'
import { productReducer, productsReducer } from './Slice/ProductSlice'





const store = configureStore({
    reducer: {
        user: loginReducer,
        register:registerReducer,
        products:productsReducer,
        product:productReducer,

    }
})

export default store
