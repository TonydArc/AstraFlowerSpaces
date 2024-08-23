import axios from 'axios';


const API_URL = 'http://127.0.0.1:8000/api/';

//get offices
export async function getOffices() {
    try {
        const products = await axios.get(API_URL + `availableoffice`)
        return products.data;
    } catch (error) {
        console.error('fetch error:', error);
        throw error;
    }
}

// get 