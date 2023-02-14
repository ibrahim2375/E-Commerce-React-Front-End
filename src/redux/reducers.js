import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user: null,
    categories: [],
    products: [],
    mostSellingProducts: [],
    bestDealsProducts: [],
    weeklyProducts: [],
    offers: [],
    cart: [],
    favorite: [],

}
export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        increment: state => {

        },
        decrement: state => {

        },
        incrementByAmount: (state, action) => {

        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer