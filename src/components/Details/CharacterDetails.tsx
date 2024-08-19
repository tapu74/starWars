import React from 'react';
import { Character } from '../../types';

interface CharacterDetailsProps {
    character: Character;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => (
    <>
        <h2 className="text-3xl font-bold mb-4">{character.name}</h2>
        <p className="mb-2"><span className="font-semibold">Height:</span> {character.height}</p>
        <p className="mb-2"><span className="font-semibold">Mass:</span> {character.mass}</p>
        <p className="mb-2"><span className="font-semibold">Hair Color:</span> {character.hair_color}</p>
        <p className="mb-2"><span className="font-semibold">Skin Color:</span> {character.skin_color}</p>
        <p className="mb-2"><span className="font-semibold">Eye Color:</span> {character.eye_color}</p>
        <p className="mb-2"><span className="font-semibold">Birth Year:</span> {character.birth_year}</p>
        <p className="mb-2"><span className="font-semibold">Gender:</span> {character.gender}</p>
    </>
);

export default CharacterDetails;