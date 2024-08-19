import React from 'react';
import { useQueries } from '@tanstack/react-query';
import { ChevronRight } from 'lucide-react';
import { getResourceDetails } from '../services/api';
import { Spinner } from './Spinner';

interface ResourceListProps {
    title: string;
    urls: string[];
    resourceType: string;
    onItemClick: (url: string) => void;
}

const ResourceList: React.FC<ResourceListProps> = ({ title, urls, resourceType, onItemClick }) => {
    const resourceQueries = useQueries({
        queries: urls.map((url) => ({
            queryKey: [resourceType, url],
            queryFn: () => getResourceDetails(url),
            staleTime: 1000 * 60 * 60 * 24, // 1 hour
        })),
    });

    const isLoading = resourceQueries.some((query) => query.isLoading);
    const error = resourceQueries.some((query) => query.isError);

    if (isLoading) return <Spinner />;
    if (error) return <div>Error loading resources</div>;

    return (
        <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">{title}</h3>
            <ul className="space-y-2">
                {resourceQueries.map((query, index) => (
                    <li key={urls[index]}>
                        {query.data && (
                            <button
                                onClick={() => onItemClick(urls[index])}
                                className="flex items-center justify-between w-full p-2 rounded text-left bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-200"
                            >
                                <span>
                                    {'name' in query.data
                                        ? query.data.name
                                        : 'title' in query.data
                                          ? query.data.title
                                          : 'Unnamed'}
                                </span>
                                <ChevronRight className="h-5 w-5 text-yellow-400" />
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceList;
