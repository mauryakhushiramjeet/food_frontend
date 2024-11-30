import { configureStore } from "@reduxjs/toolkit";
import CartReduser from "./CartSlice"
import LoginReducer from"./LoginSlice"
 const appStore=configureStore({
reducer:{
    cart:CartReduser,
    login:LoginReducer
}
 })
 export default appStore;