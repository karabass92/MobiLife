import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


const initialState: Array<number> = []


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setAllProducts: (state, action: PayloadAction<number[]>) => {
            return action.payload;
        },
        addProduct: (state, action: PayloadAction<number>) => {
            state.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.filter(el => el !== action.payload);
        },
        removeAllProducts: (state) => {
            state = [];
        }
    }
});


export const {
    setAllProducts,
    addProduct,
    removeProduct,
    removeAllProducts
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;