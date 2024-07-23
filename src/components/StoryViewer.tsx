import React from 'react';

import { IUserStory } from '@/interfaces';

import { StoryOverlay } from './StoryOverlay';

interface IStoryViewerProps {
  stories: IUserStory['stories'];
  onClose: () => void;
  goToNext: () => void;
}
export const StoryViewer = ({ stories, onClose, goToNext }: IStoryViewerProps) => {
  // TODO: Implement view, auto-advance logic and manual navigation
  return (
    <div className="story-viewer">
      <StoryOverlay stories={stories} initialIndex={0} onClose={onClose} goToNext={goToNext} />
    </div>
  );
};
