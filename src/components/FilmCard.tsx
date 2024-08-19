import React from 'react';
import { Film } from '../types';

interface FilmCardProps {
    film: Film;
    onClick: () => void;
}

export const FilmCard: React.FC<FilmCardProps> = ({ film, onClick }) => {
    return (
        <div
            className="bg-gray-800 rounded-lg shadow-lg p-4 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
            onClick={onClick}
        >
            <h3 className="text-xl font-semibold mb-2">{film.title}</h3>
            <p className="text-sm mb-1">Episode: {film.episode_id}</p>
            <p className="text-sm mb-1">Director: {film.director}</p>
            <p className="text-sm">Release: {film.release_date}</p>
        </div>
    );
};
