import axios from 'axios';

import { Film, Resource } from '../types';
import { API_URL } from '../config';
const api = axios.create({
    baseURL: API_URL,
});

// Centralized error handler
function handleApiError(error: unknown) {
    if (axios.isAxiosError(error)) {
        // You can customize this logic as needed
        const message = error.response?.data?.message || error.message || 'API Error';
        throw new Error(message);
    }
    throw error;
}

export const getFilms = async (): Promise<Film[]> => {
    try {
        const response = await api.get('/films');
        return response.data.results;
    } catch (error) {
        handleApiError(error);
        throw error; // for type safety
    }
};

export const getFilmDetails = async (id: string): Promise<Film> => {
    try {
        const response = await api.get(`/films/${id}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};

export const getResourceDetails = async (url: string): Promise<Resource> => {
    try {
        const response = await axios.get<Resource>(url);
        return response.data;
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};
