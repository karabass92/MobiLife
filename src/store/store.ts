import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import shopSlice from "./slices/shopSlice";
import { categoriesApi } from "./api/categoriesApi";
import { productApi } from "./api/productApi";


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        shop: shopSlice,
        [productApi.reducerPath]: productApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(categoriesApi.middleware)
            .concat(productApi.middleware),
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