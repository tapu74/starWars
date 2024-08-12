import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export const useFetch = ( url: string) => {
  return useQuery({
    queryKey: [url],
    queryFn: () => fetchData(url),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

};
