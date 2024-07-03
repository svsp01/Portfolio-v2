import mongoose, { Document, Schema } from 'mongoose';

interface ICareer extends Document {
  year: string;
  title: string;
  organization: string;
  type: 'education' | 'work';
  description: string;
  location: string;
}

const CareerSchema: Schema = new Schema({
  year: { type: String, required: true },
  title: { type: String, required: true },
  organization: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
});

export default mongoose.models.Career || mongoose.model<ICareer>('Career', CareerSchema);
