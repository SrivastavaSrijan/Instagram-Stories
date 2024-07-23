import { EndpointsConfig } from '@/constants';
import { IData, IUserStory } from '@/interfaces';

export const fetchStories = async () => {
  // Fetch stories from the API
  // TODO: Implement API call to fetch story data
  const response = await fetch(EndpointsConfig.stories);
  return response.json() as Promise<IData<IUserStory[]>>;
};
