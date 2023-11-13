import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import shopSlice from "./slices/shopSlice";
import productSlice from "./slices/productSlice";
import { categoriesApi } from "./api/categoriesApi";


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        shop: shopSlice,
        product: productSlice,
        [categoriesApi.reducerPath]: categoriesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(categoriesApi.middleware),
    devTools: true
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;