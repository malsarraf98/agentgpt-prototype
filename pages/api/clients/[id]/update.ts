import { NextApiRequest, NextApiResponse } from 'next'
import { updateClientTagsAndNotes } from '@/lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') return res.status(405).end()

  const { id } = req.query
  const { tags, notes } = req.body

  try {
    await updateClientTagsAndNotes(id as string, tags, notes)
    res.status(200).json({ success: true })
  } catch (e) {
    res.status(500).json({ error: 'Failed to update client.' })
  }
}
