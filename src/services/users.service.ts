import { EndpointsConfig } from '@/constants';
import { IData, IUserData } from '@/interfaces';

export const fetchStories = async (query: { page: number; limit: number }) => {
  const response = await fetch(
    EndpointsConfig.stories + `?page=${query.page}&limit=${query.limit}`,
  );
  return response.json() as Promise<IData<IUserData[]>>;
};
