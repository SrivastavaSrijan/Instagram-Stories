import React from 'react';

import { StoryList } from '@/components';

const HomePage = () => {
  // TODO: Add state management for current story and pass it to StoryViewer
  return (
    <div className="home-page">
      <StoryList />
    </div>
  );
};

export default HomePage;
