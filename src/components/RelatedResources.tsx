import React from 'react';
import ResourceList from './ResourceList';
import { Resource, ResourceType, Film, Character, Vehicle, Starship } from '../types';

interface RelatedResourcesProps {
    resource: Resource;
    onResourceSelect: (type: ResourceType, url: string) => void;
}

export const RelatedResources: React.FC<RelatedResourcesProps> = ({
    resource,
    onResourceSelect,
}) => {
    const relatedResources = [
        { type: 'characters', urls: (resource as Film).characters },
        { type: 'vehicles', urls: (resource as Film).vehicles },
        { type: 'starships', urls: (resource as Film).starships },
        { type: 'films', urls: (resource as Character | Vehicle | Starship).films },
        { type: 'pilots', urls: (resource as Vehicle | Starship).pilots },
    ].filter((item) => item.urls && item.urls.length > 0);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {relatedResources.map((item) => (
                <ResourceList
                    key={item.type}
                    title={item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    urls={item.urls}
                    resourceType={item.type === 'pilots' ? 'characters' : item.type}
                    onItemClick={(url) =>
                        onResourceSelect(
                            item.type === 'pilots'
                                ? 'character'
                                : (item.type.slice(0, -1) as ResourceType),
                            url
                        )
                    }
                />
            ))}
        </div>
    );
};
