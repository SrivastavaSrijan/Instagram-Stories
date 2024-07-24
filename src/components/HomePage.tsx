import { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';

import { AssetsConfig } from '@/constants';
import { IUserStory } from '@/interfaces';
import { fetchStories } from '@/services';

import { StoryList } from './StoryList';

export const HomePage = () => {
  const [userStories, setUserStories] = useState<IUserStory[]>([]);

  useEffect(() => {
    (async () => {
      const stories = await fetchStories();
      if ((stories?.data ?? []).length) setUserStories(stories.data);
    })();
  }, []);

  return (
    <div className="items-between flex w-full flex-col backdrop-blur-sm">
      <header className="relative">
        <div className=" flex h-11 w-full items-center justify-between px-4">
          <div className="w-32">
            <ReactSVG src={AssetsConfig.getIcon('logo')} />
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-6">
              <ReactSVG src={AssetsConfig.getIcon('plus')} />
            </div>
            <div className="w-6">
              <ReactSVG src={AssetsConfig.getIcon('heart')} />
            </div>
          </div>
        </div>
      </header>
      <div className="flex w-full flex-grow flex-col">
        <StoryList userStories={userStories} />
      </div>
    </div>
  );
};
