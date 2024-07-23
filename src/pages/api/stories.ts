// pages/api/stories.ts
import fs from 'fs';
import path from 'path';

import type { NextApiRequest, NextApiResponse } from 'next';

import { AssetsConfig } from '@/constants';
import { IUserProfile } from '@/interfaces';

export default function handler(req: NextApiRequest, res: NextApiResponse<IUserProfile[]>) {
  const filePath = path.resolve(AssetsConfig.stories);
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const userProfiles: IUserProfile[] = JSON.parse(jsonData);

  res.status(200).json(userProfiles);
}
