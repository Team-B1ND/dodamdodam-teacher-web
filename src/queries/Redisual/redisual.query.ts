import { AxiosError } from 'axios';
import { QUERY_KEYS } from 'queries/queryKey';
import { useQuery, UseQueryOptions } from 'react-query';
import redisualRepositoryImpl from 'repositories/Redisual/redisual.repositoryImpl';
import { OutResponse } from 'types/Out/out.type';

export const useGetRedisualQuery = (options?: UseQueryOptions<OutResponse, AxiosError, OutResponse, string>) =>
  useQuery(QUERY_KEYS.redisual.getResidual, () => redisualRepositoryImpl.getResdisual(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });
