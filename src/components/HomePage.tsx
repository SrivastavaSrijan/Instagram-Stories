import { useEffect, useState } from 'react';

import Image from 'next/image';

import { AssetsConfig } from '@/constants';
import { IUserStory } from '@/interfaces';
import { fetchStories } from '@/services';

export const HomePage = () => {
  const [userStories, setUserStories] = useState<IUserStory[]>([]);

  useEffect(() => {
    (async () => {
      const stories = await fetchStories();
      if ((stories?.data ?? []).length) setUserStories(stories.data);
    })();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100">
      <header className="flex w-full justify-center bg-white p-4 shadow-md">
        <Image
          width={100}
          height={100}
          src={AssetsConfig.instagram}
          alt="Instagram"
          className="h-8"
        />
      </header>
      <main className="mt-4 flex flex-grow flex-col items-center">
        <div className="w-full max-w-sm">
          <div className="flex space-x-4 overflow-x-auto">
            {userStories.map((profile, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-300">
                  <Image
                    width={60}
                    height={60}
                    src={`${AssetsConfig.profiles}${profile.profilePicture}`}
                    alt={profile.username}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
