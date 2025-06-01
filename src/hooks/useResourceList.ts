import { useQueries } from '@tanstack/react-query';
import { getResourceDetails } from '../services/api';

export const useResourceList = (resourceType: string, urls: string[]) => {
    const resourceQueries = useQueries({
        queries: urls.map((url) => ({
            queryKey: [resourceType, url],
            queryFn: () => getResourceDetails(url),
            staleTime: 1000 * 60 * 60 * 24, // 1 hour
        })),
    });

    const isLoading = resourceQueries.some((query) => query.isLoading);
    const error = resourceQueries.some((query) => query.isError);

    return { resourceQueries, isLoading, error };
};
