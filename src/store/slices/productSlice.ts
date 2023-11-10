import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { shopAPI } from '../../api/api';
import { IProduct } from '../../interfaces/interfaces';


const initialState: IProduct | any = null;


export const getOneProduct = (id: string | void) => async (dispatch: Function) => {
    const data = await shopAPI.getOneProduct(id)
    dispatch(setProduct(data));
};


const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<IProduct>) => {
            return action.payload;
        }
    }
});


export const { setProduct } = productSlice.actions;
export const selectProduct = (state: RootState) => state.product;


export default productSlice.reducer;