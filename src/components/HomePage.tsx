import { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';

import { AssetsConfig } from '@/constants';
import { IUserData } from '@/interfaces';
import { fetchStories } from '@/services';

import { StoryList } from './StoryList';

export const HomePage = () => {
  // State to hold user stories fetched from the server
  const [userStories, setUserStories] = useState<IUserData[]>([]);

  useEffect(() => {
    (async () => {
      // Fetching stories with pagination parameters
      const stories = await fetchStories({ page: 1, limit: 10 });
      // If there are stories, update the state with the fetched data
      if ((stories?.data ?? []).length) setUserStories(stories.data);
    })();
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div className="items-between flex w-full flex-col backdrop-blur-sm">
      <header className="relative">
        <div className="flex h-11 w-full items-center justify-between px-4">
          <div className="w-32">
            {/* Logo icon */}
            <ReactSVG src={AssetsConfig.getIcon('logo')} />
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-6">
              {/* Plus icon */}
              <ReactSVG src={AssetsConfig.getIcon('plus')} />
            </div>
            <div className="w-6">
              {/* Heart icon */}
              <ReactSVG src={AssetsConfig.getIcon('heart')} />
            </div>
          </div>
        </div>
      </header>
      <div className="flex w-full flex-grow flex-col">
        {/* Pass userStories to StoryList component */}
        <StoryList userStories={userStories} />
      </div>
    </div>
  );
};
