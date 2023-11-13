import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL, categoryURL } from '../../constants/api';
import { ICategory } from '../../interfaces/interfaces';


interface ICategoryState {
    count: number,
    next: string | null,
    previous: string| null,
    results: Array<ICategory>
}


export const categoriesApi = createApi({

    reducerPath: 'categoriesApi',

    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),

    endpoints: (build) => ({
        getAllCategories: build.query<ICategoryState, any>({
            query: () => ({
                url: categoryURL,
            })
        })
    })
});