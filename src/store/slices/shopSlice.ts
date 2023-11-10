import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { shopAPI } from '../../api/api';
import { IProduct } from '../../interfaces/interfaces';


const initialState: Array<IProduct> = [];


export const getAllProducts = () => async (dispatch: Function) => {
    const data = await shopAPI.getAllProducts()
    dispatch(setProducts(data));
};


const shopSlice = createSlice({
    name: 'shop',
    initialState: initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<IProduct[]>) => {
            return action.payload;
        }
    }
});


export const { setProducts } = shopSlice.actions;
export const selectShop = (state: RootState) => state.shop;


export default shopSlice.reducer;