import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL, productURL } from '../../constants/api';
import { IProduct } from '../../interfaces/interfaces';


export const productApi = createApi({

    reducerPath: 'productApi',

    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),

    endpoints: (build) => ({
        getProduct: build.query<IProduct | any, string | void>({
            query: (productId: string) => ({
                url: `${productURL}${productId}`,
            }),
        })
    })
});