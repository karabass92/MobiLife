import axios from 'axios';
import { 
    baseURL,
    productURL,
    categoryURL
} from '../constants/api';


const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true
});


export const shopAPI = {
    async getAllProducts(limit?: number, offset?: number) {
        try {
            const data = await instance
                .get(`${productURL}${limit ? `?limit=${limit}` : ''}${offset ? `&offset=${offset}` : ''}`)
                .then(response => response.data);
            return data;
        } catch (e) {
            console.log(e);
        }
    },

    getProductsByCategory() {  },

    getProductsByTag() {  },

    async getOneProduct(productId: string | void) { 
        try {
            return await instance
                .get(`${productURL}${productId}`)
                .then(response => response.data)
        } catch (e) {
            console.log(e);
        }
    }
}