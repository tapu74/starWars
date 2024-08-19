import axios from 'axios';
import { Film, Resource } from '../types';
const api = axios.create({
    baseURL: 'https://swapi.dev/api',
});

export const getFilms = async (): Promise<Film[]> => {
    const response = await api.get('/films');
    return response.data.results;
};

export const getFilmDetails = async (id: string): Promise<Film> => {
    const response = await api.get(`/films/${id}`);
    return response.data;
};

export const getResourceDetails = async (url: string): Promise<Resource> => {
    const response = await axios.get<Resource>(url);
    return response.data;
};

// // Helper function to extract ID from URL
// export const getIdFromUrl = (url: string) => {
//     const parts = url.split('/');
//     return parts[parts.length - 2];
// };

// Helper function to get resource type from URL
// export const getResourceTypeFromUrl = (url: string | undefined) => {
//     if (!url) return '';
//     const parts = url.split('/');
//     return parts[parts.length - 3] || '';
// };
