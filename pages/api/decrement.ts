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
    counter--;
  }
  res.status(200).json({ value: counter })
}