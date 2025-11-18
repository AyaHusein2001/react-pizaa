import  useReducer  from "./features/user/userSlice";
import  cartReducer  from "./features/cart/CartSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        user: useReducer,
        cart: cartReducer
    }
})

export default store