import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import Contact from '../../../models/Contact';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const contact = await Contact.create(req.body);
    return res.status(201).json({ success: true, data: contact });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
}
