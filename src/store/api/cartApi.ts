import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL, cartURL, cartVisitorURL } from '../../constants/api';


type AddToCartPayload = {
    user_session: string,
    quantity: number,
    products: number
}


export const cartApi = createApi({
    
    reducerPath: 'cartApi',
    refetchOnReconnect: true,
    baseQuery: fetchBaseQuery({ 
        baseUrl: baseURL, 
        credentials: 'include' 
    }),

    endpoints: (build) => ({
        addProductToCart: build.mutation<AddToCartPayload, AddToCartPayload>({
            query: (body) => ({
                url: cartURL,
                method: 'POST',
                body: body
            })
        }),
        getProducts: build.query({
            query: () => ({
                url: cartVisitorURL,
                params: {
                    id: localStorage.getItem('id')
                }
            }),
        })
    })
});