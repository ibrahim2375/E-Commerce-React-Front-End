import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user: null,
    token: null,
    categories: [],
    products: [],
    mostSellingProducts: [],
    bestDealsProducts: [],
    weeklyProducts: [],
    offers: [],
    cart: [],
    favorite: [],
    searchList: ["hi"],

}
export const ProductsSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        Login: (state, action) => {
            state.user = action.payload;
            state.token = action.payload.token;
        },
        Logout: (state, action) => {
            state.user = null;
            state.token = null;
        },
        Products: (state, action) => {
            state.products = action.payload
        },
        addCategories: (state, action) => {
            state.categories = action.payload;
        },
        Cart: (state, action) => {
            state.cart = action.payload
        },
        addToCart: (state, action) => {
            const filterCart = state.cart.filter(item => item?.productId === action.payload?.productId);
            if (filterCart.length === 0) {
                state.cart.push(action.payload);
            }
        },
        removeItemFromCart: (state, action) => {
            const filteredCart = state.cart.filter(item => item?.productId !== action.payload);
            state.cart = filteredCart;
        },
        updateCart: (state, action) => {
            const filteredCart = state.cart.map(item => item?.productId === action.payload?.productId ? { ...item, quantity: action.payload?.quantity } : item);
            state.cart = filteredCart;
        },
        SearchList: (state, action) => {
            let filteredList = state.searchList?.filter(item => item === action.payload?.searchQuery);
            if (filteredList?.length === 0) {
            state.searchList.push(action.payload?.searchQuery);
            }
        },
    }
})

// Action creators are generated for each case reducer function
export const { Login, Logout, Products, addCategories, updateCart, removeItemFromCart, addToCart, Cart, SearchList } = ProductsSlice.actions

export default ProductsSlice.reducer
