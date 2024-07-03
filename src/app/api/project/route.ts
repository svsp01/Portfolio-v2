import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import Project from '../../../models/Project';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const projects = await Project.find({});
    return res.status(200).json({ success: true, data: projects });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const project = await Project.create(req.body);
    return res.status(201).json({ success: true, data: project });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
}
