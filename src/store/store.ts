import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import shopSlice from "./slices/shopSlice";
import { categoriesApi } from "./api/categoriesApi";
import { productApi } from "./api/productApi";
import { cartApi } from "./api/cartApi";


export const store = configureStore({
    reducer: {
        shop: shopSlice,
        [productApi.reducerPath]: productApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(categoriesApi.middleware)
            .concat(productApi.middleware)
            .concat(cartApi.middleware),
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