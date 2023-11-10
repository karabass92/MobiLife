import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import shopSlice from "./slices/shopSlice";


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        shop: shopSlice
    },
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