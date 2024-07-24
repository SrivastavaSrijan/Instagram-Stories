import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { AssetsConfig } from '@/constants';
import { IUserStory } from '@/interfaces';

import { ImageShimmer } from './ImageShimmer';
import { StoryOverlay } from './StoryOverlay';

interface IStoryListProps {
  userStories: IUserStory[];
}

export const StoryList = ({ userStories }: IStoryListProps) => {
  const [currentUserIndex, setCurrentUserIndex] = useState<number | null>(null);
  const [currentStoryIndices, setCurrentStoryIndices] = useState<Record<number, number>>({});

  const handleStoryClicked = (selectedIndex: number | null) => () => {
    setCurrentUserIndex(selectedIndex);
  };

  const handleNext = () => {
    if (currentUserIndex === null) return;

    const currentStories = userStories[currentUserIndex].stories;
    const currentStoryIndex = currentStoryIndices[currentUserIndex] ?? 0;

    if (currentStoryIndex + 1 < currentStories.length) {
      setCurrentStoryIndices({ ...currentStoryIndices, [currentUserIndex]: currentStoryIndex + 1 });
    } else {
      const nextUserIndex = currentUserIndex + 1;
      if (nextUserIndex < userStories.length) {
        setCurrentUserIndex(nextUserIndex);
        setCurrentStoryIndices({ ...currentStoryIndices, [nextUserIndex]: 0 });
      } else {
        setCurrentUserIndex(null);
      }
    }
  };

  const handlePrev = () => {
    if (currentUserIndex === null) return;

    const currentStoryIndex = currentStoryIndices[currentUserIndex] ?? 0;

    if (currentStoryIndex > 0) {
      setCurrentStoryIndices({
        ...currentStoryIndices,
        [currentUserIndex]: currentStoryIndex - 1,
      });
    } else {
      const prevUserIndex = currentUserIndex - 1;
      if (prevUserIndex >= 0) {
        setCurrentUserIndex(prevUserIndex);
        setCurrentStoryIndices({
          ...currentStoryIndices,
          [prevUserIndex]: userStories[prevUserIndex].stories.length - 1,
        });
      } else {
        setCurrentUserIndex(null);
      }
    }
  };

  return (
    <div className="w-full px-2 py-4 sm:px-3 md:px-5">
      <div className="flex gap-4 overflow-x-auto">
        {userStories.length === 0 && <p className="text-white">No stories available</p>}
        {userStories.map(({ profilePicture, username }, index) => (
          <div className="flex-shrink-0 cursor-pointer" key={index}>
            <button
              data-testid={username}
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
            </button>
            <p className="w-16 truncate text-center text-xs text-white">
              {username?.toLowerCase()}
            </p>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {currentUserIndex !== null && userStories[currentUserIndex] && (
          <StoryOverlay
            currentUserIndex={currentUserIndex}
            currentIndex={currentStoryIndices[currentUserIndex] ?? 0}
            setCurrentIndex={(indexToSet: number) =>
              setCurrentStoryIndices({ ...currentStoryIndices, [currentUserIndex]: indexToSet })
            }
            stories={userStories[currentUserIndex].stories ?? []}
            onClose={handleStoryClicked(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="h-8 w-8 rounded-full">
                <ImageShimmer
                  width={32}
                  height={32}
                  className="aspect-square rounded-full object-cover"
                  src={`${AssetsConfig.profiles}${userStories[currentUserIndex].profilePicture}`}
                  alt={userStories[currentUserIndex].username}
                />
              </div>
              <p className="text-xs text-white">{userStories[currentUserIndex].username}</p>
            </div>
          </StoryOverlay>
        )}
      </AnimatePresence>
    </div>
  );
};
