import React, { MouseEvent, useEffect } from 'react';
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
  const onExpire = () => {
    if (currentIndex + 1 < stories.length) {
      setCurrentIndex(currentIndex + 1);
      const date = new Date();
      date.setSeconds(date.getSeconds() + AppConfig.countdown);
      restart(date, false);
    } else {
      onNext();
    }
  };

  const { restart } = useTimer({
    expiryTimestamp: new Date(),
    autoStart: false,
    onExpire,
  });

  const handleTap = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width * 0.2) {
      onPrev();
    } else if (x > rect.width * 0.8) {
      onNext();
    }
  };

  useEffect(() => {
    const date = new Date();
    date.setSeconds(date.getSeconds() + AppConfig.countdown); // Set timer for 3 seconds
    restart(date, true);
  }, [currentIndex, currentUserIndex, restart]);

  return (
    <motion.div
      data-testid={currentIndex + '_' + currentUserIndex}
      variants={AnimationConfig.onUserClicked}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed left-0 top-0 z-10 flex items-center justify-center"
    >
      <div className="fixed inset-0 z-10 flex h-screen w-screen max-w-sm items-center justify-center bg-black bg-opacity-75">
        <div className="relative h-full w-full">
          <div className="absolute top-0 z-50  flex w-full flex-col gap-4 p-3 backdrop-blur-sm backdrop-brightness-90">
            <div className="flex flex-row gap-1">
              {stories.map((_, index) => (
                <div key={index} className="flex-grow">
                  <ProgressBar duration={AppConfig.countdown} isActive={currentIndex === index} />
                </div>
              ))}
            </div>
            <div className="flex w-full flex-row justify-between">
              {children}
              <button onClick={onClose} className=" text-white">
                <ReactSVG src={AssetsConfig.getIcon('close')} />
              </button>
            </div>
          </div>
          <AnimatePresence mode="sync">
            <motion.div
              key={currentIndex + '_' + currentUserIndex}
              variants={AnimationConfig.onStoryChange}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative z-20 flex h-full w-full"
            >
              <div
                onClick={handleTap}
                className="relative flex h-full w-full touch-none items-center justify-center"
              >
                <ImageShimmer
                  fill
                  sizes="50vw"
                  src={`${AssetsConfig.cats}${stories[currentIndex].url}`}
                  alt={`Story ${currentIndex + 1}`}
                  className="z-20 aspect-[9/16] max-h-full max-w-full select-none object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
