import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { shopAPI } from '../../api/api';
import { IShop } from '../../interfaces/interfaces';


const initialState: IShop = {
    count: 1,
    next: null,
    previous: null,
    results: []
};


export const getAllProducts = (limit?: number, offset?: number) => async (dispatch: Function) => {
    const data = await shopAPI.getAllProducts(limit, offset)
    dispatch(setProducts(data));
};


export const getProductsByCategory = (categoryId: number, limit?: number, offset?: number) => async(dispatch: Function) => {
    const data = await shopAPI.getProductsByCategory(categoryId, limit, offset)
    dispatch(setProducts(data));
};


const shopSlice = createSlice({
    name: 'shop',
    initialState: initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<IShop>) => {
            console.log(action.payload)
            return action.payload;
        }
    }
});


export const { setProducts } = shopSlice.actions;
export const selectProducts = (state: RootState) => state.shop.results;
export const selectTotalProductsCount = (state: RootState) => state.shop.count;
export const seletNextPage = (state: RootState) => state.shop.next;
export const selectPreviousPage = (state: RootState) => state.shop.previous;


export default shopSlice.reducer;