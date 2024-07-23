import React, { useState } from 'react';

import Image from 'next/image';

import { AssetsConfig } from '@/constants';
import { IUserStory } from '@/interfaces';

import { StoryViewer } from './StoryViewer';

interface IStoryListProps {
  userStories: IUserStory[];
}
export const StoryList = ({ userStories }: IStoryListProps) => {
  const [currentStoryViewed, setCurrentStoryViewed] = useState<number | null>(null);
  const handleStoryClicked = (selectedIndex: number | null) => () => {
    setCurrentStoryViewed(selectedIndex);
  };
  return (
    <div className="bg-grey- w-full px-5 py-4">
      <div className="flex space-x-4 overflow-x-auto">
        {userStories.map(({ profilePicture, username, stories }, index) => (
          <div key={index} className="flex-shrink-0 cursor-pointer">
            <div
              className="relative inline-block h-16 w-16 items-center justify-center  rounded-full bg-gray-300 bg-gradient-to-tr from-[#F9CE34] via-[#EE2A7B] to-[#6228D7] p-[2px]"
              onClick={handleStoryClicked(index)}
            >
              <Image
                width={64}
                height={64}
                src={`${AssetsConfig.profiles}${profilePicture}`}
                alt={username}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="w-16 truncate text-xs text-white">{username?.toLowerCase()}</p>
            {currentStoryViewed === index && (
              <StoryViewer
                stories={stories}
                onClose={handleStoryClicked(null)}
                goToNext={handleStoryClicked(currentStoryViewed + 1)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
