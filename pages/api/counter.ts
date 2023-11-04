import type { NextApiRequest, NextApiResponse } from 'next'

export let counter = { value: 0 };

type Data = {
  value: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ value: counter.value })
}