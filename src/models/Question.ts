// models/Question.ts

import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  questions: {
    type: [String],
    required: [true, 'Please provide at least one question'],
    validate: [arrayLimit, '{PATH} must have at least 1 and no more than 5 questions']
  }
});

function arrayLimit(val: string[]) {
  return val.length > 0 && val.length <= 5;
}

export default mongoose.models.Question || mongoose.model('Question', QuestionSchema);