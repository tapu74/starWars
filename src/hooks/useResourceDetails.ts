import { useQuery } from '@tanstack/react-query';
import { getResourceDetails } from '../services/api';
import { Resource, ResourceType } from '../types';

export const useResourceDetails = (resourceType: ResourceType, url: string) => {
    return useQuery<Resource, Error>({
        queryKey: [resourceType, url],
        queryFn: () => getResourceDetails(url),
        staleTime: 1000 * 60 * 60 * 24, // 24 hour
        enabled: !!url,
    });
};
