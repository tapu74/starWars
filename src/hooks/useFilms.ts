import { useQuery } from '@tanstack/react-query';
import { getFilms } from '../services/api';
import { Film } from '../types';

export const useFilms = () => {
    return useQuery<Film[], Error>({
        queryKey: ['films'],
        queryFn: getFilms,
        staleTime: 1000 * 60 * 60 * 24, // 24 hour
    });
};
