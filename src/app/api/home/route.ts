import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import dbConnect from '../../../utils/dbConnect';
import HomePage from '../../../models/HomePage';

export async function GET() {
  await dbConnect();
  try {
    const homePages = await HomePage.find({});
    return NextResponse.json({ success: true, data: homePages });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const body = await request.json();
    const { title, description, items } = body;

    if (!title || !description || !items) {
      return NextResponse.json(
        { success: false, error: 'Title, description, and items are required.' },
        { status: 400 }
      );
    }

    const newHomePage = await HomePage.create({ title, description, items });
    return NextResponse.json({ success: true, data: newHomePage }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}