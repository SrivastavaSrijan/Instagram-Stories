// pages/api/stories.ts
import fs from 'fs';
import path from 'path';

import type { NextApiRequest, NextApiResponse } from 'next';

import { AssetsConfig } from '@/constants';
import { IData, IUserStory } from '@/interfaces';

export default function handler(req: NextApiRequest, res: NextApiResponse<IData<IUserStory[]>>) {
  const filePath = path.join(process.cwd(), AssetsConfig.stories);
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const userProfiles: IUserStory[] = JSON.parse(jsonData);

  res.status(200).json({ status: 200, data: userProfiles });
}
