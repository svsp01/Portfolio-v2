import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../utils/dbConnect';
import Career from '../../../models/Career';

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const careers = await Career.find({});
    return NextResponse.json({ success: true, data: careers });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();
    const career = await Career.create(body);
    return NextResponse.json({ success: true, data: career });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
