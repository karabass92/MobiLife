import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ICart, ICartItem } from '../../interfaces/interfaces';


const initialState: ICart = {
    sessionid: '',
    products: []
};


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setSessionId: () => {

        },
        setAllProducts: () => {

        },
        addProduct: () => {

        },
        removeProduct: () => {
            
        },
        removeAllProducts: (state) => {
            return {...state, products:[]}
        }
    }
});