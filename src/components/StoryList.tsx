import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { AssetsConfig } from '@/constants';
import { IUserStory } from '@/interfaces';

import { ImageShimmer } from './ImageShimmer';
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
      <div className="flex gap-4 overflow-x-auto">
        {userStories.map(({ profilePicture, username }, index) => (
          <div className="flex-shrink-0 cursor-pointer" key={index}>
            <div
              className="relative z-0 inline-block h-16 w-16 items-center justify-center  rounded-full bg-gray-300 bg-gradient-to-tr from-[#F9CE34] via-[#EE2A7B] to-[#6228D7] p-[2px]"
              onClick={handleStoryClicked(index)}
            >
              <div className="rounded-full bg-black p-[3px]">
                <ImageShimmer
                  width={59}
                  height={59}
                  src={`${AssetsConfig.profiles}${profilePicture}`}
                  alt={username}
                  className="aspect-square h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            <p className="w-16 truncate text-center text-xs text-white">
              {username?.toLowerCase()}
            </p>
          </div>
        ))}
      </div>

      <AnimatePresence mode="sync">
        {currentStoryViewed !== null && userStories[currentStoryViewed] && (
          <motion.div
            key={currentStoryViewed}
            initial={{ scale: 0.8, opacity: 0.9, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1, x: '-50%', y: '-50%' }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
            }}
            exit={{ scale: 0.8, opacity: 0, x: '-50%', y: '-50%' }}
            className="fixed left-0 top-0 z-50 flex items-center justify-center"
          >
            <StoryOverlay
              initialIndex={0}
              stories={userStories[currentStoryViewed].stories ?? []}
              onClose={handleStoryClicked(null)}
              goToNext={handleStoryClicked((currentStoryViewed + 1) % userStories.length)}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="h-8 w-8 rounded-full">
                  <ImageShimmer
                    width={32}
                    height={32}
                    className="aspect-square rounded-full object-cover"
                    src={`${AssetsConfig.profiles}${userStories[currentStoryViewed].profilePicture}`}
                    alt={userStories[currentStoryViewed].username}
                  />
                </div>
                <p className="text-xs text-white">{userStories[currentStoryViewed].username}</p>
              </div>
            </StoryOverlay>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
