import type { NextApiRequest, NextApiResponse } from 'next'

let counter = 0;

type Data = {
  value: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    if (req.url && req.url.endsWith('/increment')) {
      counter++;
    } else if (req.url && req.url.endsWith('/decrement')) {
      counter--;
    }
  }
  res.status(200).json({ value: counter })
}