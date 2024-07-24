import React, { useState } from 'react';

import { CldImage } from 'next-cloudinary';

import { AssetsConfig } from '@/constants';
import { IUserStory } from '@/interfaces';

import { StoryOverlay } from './StoryOverlay';

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
              <CldImage
                width={64}
                height={64}
                src={`${AssetsConfig.profiles}${profilePicture}`}
                alt={username}
                className="aspect-square h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="w-16 truncate text-xs text-white">{username?.toLowerCase()}</p>
            {currentStoryViewed === index && (
              <StoryOverlay
                initialIndex={0}
                stories={stories}
                onClose={handleStoryClicked(null)}
                goToNext={handleStoryClicked((currentStoryViewed + 1) % userStories.length)}
              >
                <div className="flex flex-row items-center gap-2">
                  <div className="h-8 w-8 rounded-full">
                    <CldImage
                      width={32}
                      height={32}
                      className="aspect-square rounded-full object-cover"
                      src={`${AssetsConfig.profiles}${profilePicture}`}
                      alt={username}
                    />
                  </div>
                  <p className="text-xs text-white">{username?.toLowerCase()}</p>
                </div>
              </StoryOverlay>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
