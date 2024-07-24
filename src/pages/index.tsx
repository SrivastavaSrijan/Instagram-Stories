import React from 'react';

import { HomePage } from '@/components';

const Index = () => {
  // TODO: Add state management for current story and pass it to StoryViewer
  return (
    <div>
      <title>Instagram</title>
      <div className="flex min-h-screen w-full justify-center  bg-gray-900">
        <div className="w-full min-w-80 max-w-screen-sm bg-black">
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default Index;
