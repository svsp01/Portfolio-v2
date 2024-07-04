import mongoose, { Document, Schema } from 'mongoose';

interface ICareer extends Document {
  type: 'education' | 'work';
  title: string;
  organization: string;
  duration: string;
  description: string;
  skills: string[];
  score: number;
}

const CareerSchema: Schema = new Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  organization: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  skills: { type: [String], required: true },
  score: { type: Number, required: true },
});

export default mongoose.models.Career || mongoose.model<ICareer>('Career', CareerSchema);
