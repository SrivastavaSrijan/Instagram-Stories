import fs from 'fs';
import path from 'path';

import { NextApiRequest, NextApiResponse } from 'next';

const dataFilePath = path.join(process.cwd(), 'public', 'json', 'data.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, limit = 10 } = req.query;

  if (!fs.existsSync(dataFilePath)) {
    return res.status(404).json({ message: 'File not found' });
  }

  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
  const start = (+page - 1) * +limit;
  const end = start + +limit;
  const paginatedData = data.data.slice(start, end);

  res.status(200).json({ status: 200, success: true, data: paginatedData });
}
