import axios from "axios";
import { ENDPOINT } from "../../config";

export function getproductsAPI() {
    return axios.get(`${ENDPOINT}/products`)
}

export function getProductDetailAPI(id) {
    return axios.get(`${ENDPOINT}/product/${id}`)
} 