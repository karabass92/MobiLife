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
    tagTypes: ['CartItem'],

    endpoints: (build) => ({
        addProductToCart: build.mutation<AddToCartPayload, AddToCartPayload>({
            query: (body) => ({
                url: cartURL,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['CartItem']
        }),
        removeProductFromCart: build.mutation<void, number>({
            query: (id) => ({
                url: `${cartURL}${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['CartItem']
        }),
        getProducts: build.query({
            query: (promo: string) => ({
                url: cartVisitorURL,
                params: {
                    id: localStorage.getItem('id'),
                    promo: promo.toLocaleLowerCase()
                }
            }),
            providesTags: ['CartItem']
        })
    })
});