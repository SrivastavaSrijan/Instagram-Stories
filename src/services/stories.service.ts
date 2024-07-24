import { EndpointsConfig } from '@/constants';
import { IData, IUserStory } from '@/interfaces';

export const fetchStories = async () => {
  const response = await fetch(EndpointsConfig.stories);
  return response.json() as Promise<IData<IUserStory[]>>;
};
