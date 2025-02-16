import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../redux/loginThunk"

export const store = configureStore({
    reducer:{
        profile:profileReducer
    }
})