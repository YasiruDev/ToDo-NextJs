
import axios from 'axios';
import { BASE_URL } from '../config';
axios.defaults.baseURL = BASE_URL;


export const request = async (method, endPoint, data) => {
    try {
        const res = await axios({
            method: method,
            url: endPoint,
            ...(data && { data })
        })
        return res.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }

}
