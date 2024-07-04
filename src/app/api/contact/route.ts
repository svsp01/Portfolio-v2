import dbConnect from '../../../utils/dbConnect';
import Contact from '../../../models/Contact';
import Question from '@/models/Question';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    await dbConnect();
  
    try {
      const contact = await Question.find({}).sort('order');
      return NextResponse.json({ success: true, data: contact });
    } catch (error) {
      return NextResponse.json({ success: false, error });
    }
  }

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const body = await request.json();
    const contact = await Contact.create(body);
    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
