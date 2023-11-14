import axios from 'axios';
import { 
    baseURL,
    productURL,
    categoryURL,
    cartURL,
    cartVisitorURL
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

    async getProductsByCategory(categoryId: number, limit?: number, offset?: number) { 
        try {
            const data = await instance
                .get(`${categoryURL}${categoryId}/products/${limit ? `?limit=${limit}` : ''}${offset ? `&offset=${offset}` : ''}`)
                .then(response => response.data);
            return data;
        } catch (e) {
            console.log(e);
        }
    },
};


export const cartAPI = {

    async getAllProducts() {
        try {
            const data = await instance
                .get(`${cartURL}${cartVisitorURL}`)
                .then(response => response.data)
            return data;
        } catch (e) {
            console.log(e);
        }
    },

    async addProductToCart(sessionId: string, count: number, productId: number) {
        try {
            const data = {
                user_session: sessionId,
                quantity: count,
                products: productId
            };
            return await instance.post(cartURL, data)
        } catch (e) {
            console.log(e);
        }
    },

    async deleteProductFromCart(itemId: number) {
        try {
            return await instance.delete(cartURL)
        } catch (e) {
            console.log(e);
        }
    },

    async changeProductCount(itemId: number, count: number) {
        try {
            const data = {
                id: itemId,
                quantity: count
            }
            return await instance.put(cartURL, data)
        } catch (e) {
            console.log(e);
        }
    },
}