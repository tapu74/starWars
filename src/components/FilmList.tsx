import React from 'react';
import { FilmCard } from './FilmCard';
import { Spinner } from './Spinner';
import { useFilms } from '../hooks/useFilms';
import { Film } from '../types';

interface FilmListProps {
    onSelectFilm: (film: Film) => void;
}

export const FilmList: React.FC<FilmListProps> = ({ onSelectFilm }) => {
    const { data: films, isLoading, error } = useFilms();

    if (isLoading) return <Spinner />;
    if (error) return <div className="text-center mt-8">An error occurred</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {films?.map((film) => (
                <FilmCard key={film.episode_id} film={film} onClick={() => onSelectFilm(film)} />
            ))}
        </div>
    );
};
