import React from 'react';
import { Vehicle } from '../../types';


interface VehicleDetailsProps {
    vehicle: Vehicle;
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ vehicle }) => (
    <>
        <h2 className="text-3xl font-bold mb-4">{vehicle.name}</h2>
        <p className="mb-2"><span className="font-semibold">Model:</span> {vehicle.model}</p>
        <p className="mb-2"><span className="font-semibold">Manufacturer:</span> {vehicle.manufacturer}</p>
        <p className="mb-2"><span className="font-semibold">Class:</span> {vehicle.vehicle_class}</p>
        <p className="mb-2"><span className="font-semibold">Cost in Credits:</span> {vehicle.cost_in_credits}</p>
        <p className="mb-2"><span className="font-semibold">Length:</span> {vehicle.length}</p>
        <p className="mb-2"><span className="font-semibold">Max Atmosphering Speed:</span> {vehicle.max_atmosphering_speed}</p>
        <p className="mb-2"><span className="font-semibold">Crew:</span> {vehicle.crew}</p>
        <p className="mb-2"><span className="font-semibold">Passengers:</span> {vehicle.passengers}</p>
        <p className="mb-2"><span className="font-semibold">Cargo Capacity:</span> {vehicle.cargo_capacity}</p>
        <p className="mb-2"><span className="font-semibold">Consumables:</span> {vehicle.consumables}</p>
    </>
);

export default VehicleDetails;