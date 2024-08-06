import React, { MouseEvent, useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useTimer } from 'react-timer-hook';
import { AnimatePresence, motion } from 'framer-motion';

import { AnimationConfig, AppConfig, AssetsConfig } from '@/constants';

import { ImageShimmer } from './ImageShimmer';
import { ProgressBar } from './ProgressBar';

interface Story {
  id: string;
  url: string;
}

interface IStoryOverlayProps {
  stories: Story[];
  currentIndex: number;
  currentUserIndex: number;
  setCurrentIndex: (index: number) => void;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  children: React.ReactNode;
}

export const StoryOverlay = ({
  stories,
  currentIndex,
  setCurrentIndex,
  onClose,
  onNext,
  onPrev,
  currentUserIndex,
  children,
}: IStoryOverlayProps) => {
  const [hasStoryLoaded, setStoryLoaded] = useState(false);

  // Timer expiration handler
  const onExpire = () => {
    if (currentIndex + 1 < stories.length) {
      setCurrentIndex(currentIndex + 1);
      const date = new Date();
      date.setSeconds(date.getSeconds() + AppConfig.countdown);
      restart(date, false); // Restart timer for the next story
    } else {
      onNext(); // Move to the next user if no more stories
    }
  };

  const { restart } = useTimer({
    expiryTimestamp: new Date(),
    autoStart: false,
    onExpire,
  });

  // Handle tap events for navigation
  const handleTap = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width * 0.2) {
      onPrev(); // Previous story if tap is on the left side
    } else if (x > rect.width * 0.8) {
      onNext(); // Next story if tap is on the right side
    }
  };

  useEffect(() => {
    setStoryLoaded(false); // Reset story loaded state when index changes
  }, [currentIndex, currentUserIndex]);

  useEffect(() => {
    if (hasStoryLoaded) {
      const date = new Date();
      date.setSeconds(date.getSeconds() + AppConfig.countdown); // Set timer for the story
      restart(date, true);
    }
  }, [currentIndex, currentUserIndex, restart, hasStoryLoaded]);

  return (
    <motion.div
      data-testid={['overlay-wrapper', currentUserIndex, currentIndex].join('_')}
      variants={AnimationConfig.onUserClicked}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed left-0 top-0 z-10 flex items-center justify-center"
    >
      <div className="fixed inset-0 z-10 flex h-screen w-screen max-w-md items-center justify-center bg-black bg-opacity-75">
        <div className="relative h-full w-full">
          <div className="absolute top-0 z-50 flex w-full flex-col gap-4 p-3 backdrop-blur-sm backdrop-brightness-90">
            <div className="flex flex-row gap-1">
              {/* Progress bars for each story */}
              {stories.map((_, index) => (
                <div key={index} className="flex-grow">
                  <ProgressBar
                    duration={AppConfig.countdown}
                    isActive={currentIndex === index && hasStoryLoaded}
                  />
                </div>
              ))}
            </div>
            <div className="flex w-full flex-row justify-between">
              {children} {/* Render children components (e.g., overlays, controls) */}
              <button onClick={onClose} aria-label="Close" className="text-white">
                <ReactSVG src={AssetsConfig.getIcon('close')} />
              </button>
            </div>
          </div>
          <AnimatePresence mode="sync">
            <motion.div
              key={currentIndex}
              variants={AnimationConfig.onStoryChange}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex h-full w-full touch-none items-center justify-center"
            >
              <div
                data-testid={['overlay-inner', currentUserIndex, currentIndex].join('_')}
                className="relative flex h-full w-full items-center justify-center"
                onClick={handleTap}
              >
                <ImageShimmer
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw" // Responsive image sizes
                  src={`${stories[currentIndex].url}`}
                  alt={`Story ${currentIndex + 1}`}
                  className="z-20 aspect-[9/16] max-h-full max-w-full select-none object-cover"
                  onLoad={() => setStoryLoaded(true)}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
