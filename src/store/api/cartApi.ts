import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL, cartURL } from '../../constants/api';


type AppToCartPayload = {
    user_session: string,
    quantity: number,
    products: number
}


export const cartApi = createApi({
    
    reducerPath: 'cartApi',

    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),

    endpoints: (build) => ({
        addProductToCart: build.mutation<AppToCartPayload, AppToCartPayload>({
            query: (body) => ({
                url: cartURL,
                method: 'POST',
                body: body
            })
        })
    })
});