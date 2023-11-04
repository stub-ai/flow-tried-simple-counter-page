import type { NextApiRequest, NextApiResponse } from 'next'
import { counter } from './counter';

type Data = {
  value: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    counter.value++;
  }
  res.status(200).json({ value: counter.value })
}