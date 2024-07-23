import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useTimer } from 'react-timer-hook';

import Image from 'next/image';

import { AppConfig, AssetsConfig } from '@/constants';

import { ProgressBar } from './ProgressBar';

interface Story {
  id: string;
  url: string;
}

interface IStoryOverlayProps {
  stories: Story[];
  initialIndex: number;
  onClose: () => void;
  goToNext: () => void;
  children: React.ReactNode;
}

export const StoryOverlay = ({
  stories,
  initialIndex,
  onClose,
  goToNext,
  children,
}: IStoryOverlayProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const onExpire = () => {
    if (currentIndex + 1 < stories.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      const date = new Date();
      date.setSeconds(date.getSeconds() + AppConfig.countdown);
      restart(date, false);
    } else {
      goToNext();
    }
  };

  const { seconds, restart } = useTimer({
    expiryTimestamp: new Date(),
    autoStart: false,
    onExpire,
  });

  useEffect(() => {
    const date = new Date();
    date.setSeconds(date.getSeconds() + AppConfig.countdown); // Set timer for 3 seconds
    restart(date, true);
  }, [currentIndex, restart]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % stories.length);
  };
  console.log(seconds, currentIndex);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + stories.length) % stories.length);
  };

  return (
    <div className="fixed inset-0 z-10 flex h-screen w-screen max-w-sm items-center justify-center bg-black bg-opacity-75">
      <div className="relative h-full w-full">
        <div className="absolute top-0 z-50  flex w-full flex-col gap-4 p-3 backdrop-blur-md">
          {/* <ProgressBar width={seconds} /> */}
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
        <div className="relative flex h-full w-full items-center justify-center">
          <Image
            src={`${AssetsConfig.cats}${stories[currentIndex].url}`}
            alt={`Story ${currentIndex + 1}`}
            layout="fill"
            className="z-20 aspect-[9/16] max-h-full max-w-full select-none object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 transform space-x-4">
          <button onClick={handlePrev} className="text-white">
            Prev
          </button>
          <button onClick={handleNext} className="text-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
