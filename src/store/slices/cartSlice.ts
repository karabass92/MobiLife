import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IProduct } from '../../interfaces/interfaces';


const initialState: IProduct[] = [];


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<IProduct>) => {
            state.push(action.payload)
        },
        removeProductFromCart: (state, action: PayloadAction<IProduct>) => {
        }
    }
});


export const {
    addProductToCart
} = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;


export default cartSlice.reducer;