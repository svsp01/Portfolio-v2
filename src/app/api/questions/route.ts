import Question from '@/models/Question';
import dbConnect from '../../../utils/dbConnect';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    await dbConnect();
  
    try {
        const questionDoc = await Question.findOne();
        return NextResponse.json({ 
          success: true, 
          data: questionDoc ? questionDoc.questions : []
        });
      } catch (error) {
        return NextResponse.json({ success: false, error: 'Error fetching questions' });
      }
  }

export async function POST(request: NextRequest) {
    await dbConnect();
  
    try {
        const body = await request.json();
        const questions = body
        console.log(questions, ">>>>>>>>")

        if (!Array.isArray(questions) || questions.length === 0 || questions.length > 5) {
          return NextResponse.json({ success: false, error: 'Please provide an array of 1 to 5 questions' });
        }
  
        await Question.deleteMany({});
        const questionDoc = await Question.create({ questions });
        return NextResponse.json({ success: true, data: questionDoc.questions });
      } catch (error) {
        return NextResponse.json({ success: false, error: 'Error updating questions' });
      }
  }