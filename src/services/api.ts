import axios from 'axios';

import { Film, Resource } from '../types';
import { API_URL } from '../config';
const api = axios.create({
    baseURL: API_URL,
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
