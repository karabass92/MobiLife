import axios from 'axios';
import { 
    baseURL,
    productURL
} from '../constants/api';


const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true
});


export const shopAPI = {
    async getAllProducts() {
        try {
            return await instance
                .get(`${productURL}`)
                .then(response => response.data);
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