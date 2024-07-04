import mongoose, { Document, Schema } from 'mongoose';

interface IProject extends Document {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  hostLink:string
}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  githubLink: { type: String, required: true },
  hostLink: { type: String, required: true },
});

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
