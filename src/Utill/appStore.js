import { configureStore } from "@reduxjs/toolkit";
import CartReduser from "./CartSlice"
 const appStore=configureStore({
reducer:{
    cart:CartReduser
}
 })
 export default appStore;