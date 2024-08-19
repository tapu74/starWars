import React from 'react';
import { ResourceDetails } from './Details/ResourceDetails';
import { useResourceDetails } from '../hooks/useResourceDetails';
import { Spinner } from './Spinner';
import { ResourceType, SelectedItem } from '../types';

interface DetailsViewProps {
    item: SelectedItem;
    onResourceSelect: (type: ResourceType, url: string) => void;
}

export const DetailsView: React.FC<DetailsViewProps> = ({ item, onResourceSelect }) => {
    const {
        data: resourceDetails,
        isLoading,
        error,
    } = useResourceDetails(item.type, item.data.url);

    if (isLoading) return <Spinner />;
    if (error || !resourceDetails) {
        return (
            <div className="text-red-500">
                Error loading details: {error?.message || 'Unknown error'}
            </div>
        );
    }

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-8">
            {isLoading ? (
                <Spinner />
            ) : error || !resourceDetails ? (
                <div>Error loading details</div>
            ) : (
                <ResourceDetails
                    resourceType={item.type}
                    resource={resourceDetails}
                    onResourceSelect={onResourceSelect}
                />
            )}
        </div>
    );
};
