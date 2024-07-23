import React from 'react';

import { IUserProfile } from '@/interfaces';

interface IStoryViewerProps {
  stories: IUserProfile['stories'];
}
export const StoryViewer = ({ stories }: IStoryViewerProps) => {
  // TODO: Implement view, auto-advance logic and manual navigation
  return <div className="story-viewer">{JSON.stringify(stories, null, 2)}</div>;
};
