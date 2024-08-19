import React from 'react';
import { Resource, ResourceType, Film, Character, Vehicle, Starship } from '../../types';
import FilmDetails from './FilmDetails';
import CharacterDetails from './CharacterDetails';
import VehicleDetails from './VehicleDetails';
import StarshipDetails from './StarshipDetails';
import { RelatedResources } from '../RelatedResources';

interface ResourceDetailsProps {
    resourceType: ResourceType;
    resource: Resource;
    onResourceSelect: (type: ResourceType, url: string) => void;
}

export const ResourceDetails: React.FC<ResourceDetailsProps> = ({
    resourceType,
    resource,
    onResourceSelect,
}) => {
    const renderResourceDetails = () => {
        switch (resourceType) {
            case 'film':
                return <FilmDetails film={resource as Film} />;
            case 'character':
                return <CharacterDetails character={resource as Character} />;
            case 'vehicle':
                return <VehicleDetails vehicle={resource as Vehicle} />;
            case 'starship':
                return <StarshipDetails starship={resource as Starship} />;
            default:
                return <p>Unknown resource type: {resourceType}</p>;
        }
    };

    return (
        <div>
            <div className="bg-gray-700 rounded-lg p-6 mb-8">{renderResourceDetails()}</div>
            <RelatedResources resource={resource} onResourceSelect={onResourceSelect} />
        </div>
    );
};
