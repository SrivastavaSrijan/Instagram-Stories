export const fetchStories = async () => {
  // Fetch stories from the API
  // TODO: Implement API call to fetch story data
  const response = await fetch('/api/stories');
  return response.json();
};
