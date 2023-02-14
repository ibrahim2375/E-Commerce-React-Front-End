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
        addToCart: (state, action) => {
            const filterCart = state.cart.filter(item => item?.id === action.payload?.id);
            if (filterCart.length === 0) {
                state.cart.push(action.payload);
            }
        },
        removeItemFromCart: (state, action) => {
            const filteredCart = state.cart.filter(item => item?.id !== action.payload);
            state.cart = filteredCart;
        },
        updateCart: (state, action) => {
            const filteredCart = state.cart.map(item => item?.id === action.payload?.id ? { ...item, quantity: action.payload?.quantity } : item);
            state.cart = filteredCart;
        }
    }
})

// Action creators are generated for each case reducer function
export const { updateCart, removeItemFromCart, addToCart } = counterSlice.actions

export default counterSlice.reducer