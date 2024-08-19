import React from 'react';
import VehicleDetails from './VehicleDetails';
import { Starship } from '../../types';

interface StarshipDetailsProps {
    starship: Starship;
}

const StarshipDetails: React.FC<StarshipDetailsProps> = ({ starship }) => (
    <>
        <VehicleDetails vehicle={starship} />
        <p className="mb-2">
            <span className="font-semibold">Starship Class:</span> {starship.starship_class}
        </p>
        <p className="mb-2">
            <span className="font-semibold">Hyperdrive Rating:</span> {starship.hyperdrive_rating}
        </p>
        <p className="mb-2">
            <span className="font-semibold">MGLT:</span> {starship.MGLT}
        </p>
    </>
);

export default StarshipDetails;
