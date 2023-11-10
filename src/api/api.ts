import axios from 'axios';
import { baseURL } from '../constants/api';


const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true
});


export const shopAPI = {
    async getAllProducts() {
        try {
            return await instance
                .get(`/product`)
                .then(response => response.data)
        } catch (e) {
            console.log(e)
        }
    },

    getProductsByCategory() {  },

    getProductsByTag() {  },

    getOneProduct() {  }
}