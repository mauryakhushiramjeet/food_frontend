import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        item: [],
    }, reducers: {
        //in redux we won,t muted the state and return is medatry
        //but in redux toolkit latest reduc we can muted the state 
        //redux toolkit uses immer behind the seen
        addItem: (state, action) => {
            state.item.push(action.payload)
        },
        removeItem: (state) => {
            state.item.pop()
        },
         
        clearCart:(state)=>{
            state.item.length=0;
        }

    }
})
 export const {addItem,removeItem,clearCart}=CartSlice.actions
export  default CartSlice.reducer;