import React from 'react';
import { Film } from '../../types';

interface FilmDetailsProps {
    film: Film;
}

const FilmDetails: React.FC<FilmDetailsProps> = ({ film }) => (
    <>
        <h2 className="text-3xl font-bold mb-4">{film.title}</h2>
        <p className="mb-2">
            <span className="font-semibold">Episode:</span> {film.episode_id}
        </p>
        <p className="mb-2">
            <span className="font-semibold">Director:</span> {film.director}
        </p>
        <p className="mb-2">
            <span className="font-semibold">Producer:</span> {film.producer}
        </p>
        <p className="mb-2">
            <span className="font-semibold">Release Date:</span> {film.release_date}
        </p>
        <p className="mb-4 italic">{film.opening_crawl}</p>
    </>
);

export default FilmDetails;
