/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { getAccessToken } from './untils';


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

// find office 
export async function getOfficeById(id: number) {
    try {
        const products = await axios.get(API_URL + `office/` + id)
        return products.data;
    } catch (error) {
        console.error('fetch error:', error);
        throw error;
    }
}

// get additionalservices
export async function getadditionalServices() {
    try {
        const products = await axios.get(API_URL + `additionalservices`,)
        return products.data;
    } catch (error) {
        console.error('fetch error:', error);
        throw error;
    }
}

// booking 
export async function bookingOffice(formdata: {
    'CustomerID': number,
    'OfficeID': number,
    'StartDate': string,
    'EndDate': string,
    'Status': string,
    'Method': string,
    'AdditionalServices': any
}) {
    const token = getAccessToken();
    const book = axios.post(API_URL + 'booking', formdata, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return book;
}

// get ownbook
export async function getcustomerbook(id: number) {
    const token = getAccessToken();
    try {
        const book = await axios.get(API_URL + 'getbookingbycustomerid/' + id, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return book.data;
    } catch(error) {
        console.error('fetch error:', error);
        throw error;
    }
}

// cancel book
export async function cancelbook(id: number) {
    const token = getAccessToken();
    try {
        // console.log(token)
        const cancel = await axios.put(API_URL + 'cancelbook/' + id, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return cancel;
    } catch(error) {
        console.error('error:', error);
        throw error;
    }
}