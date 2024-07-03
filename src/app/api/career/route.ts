import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import Career from '../../../models/Career';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const careers = await Career.find({});
    return NextResponse.json({ success: true, data: careers });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const body = await request.json();
    const career = await Career.create(body);
    return NextResponse.json({ success: true, data: career });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
