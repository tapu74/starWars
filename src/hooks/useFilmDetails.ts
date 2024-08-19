import { useQuery } from '@tanstack/react-query';
import { getFilmDetails } from '../services/api';
import { Film } from '../types';

export const useFilmDetails = (filmId: string) => {
    return useQuery<Film, Error>({
        queryKey: ['filmDetails', filmId],
        queryFn: () => getFilmDetails(filmId),
        staleTime: 1000 * 60 * 60 * 24, // 24 hour
    });
};
