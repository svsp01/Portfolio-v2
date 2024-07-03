import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for HomePage document
interface IHomePage extends Document {
  title: string;
  description: string;
  items: { icon: string; text: string }[];
}

// Define the schema for HomePage
const HomePageSchema: Schema<IHomePage> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  items: [{
    icon: { type: String, required: true },
    text: { type: String, required: true }
  }]
});

// Export the model ensuring it's only defined once
export default mongoose.models.HomePage || mongoose.model<IHomePage>('HomePage', HomePageSchema);
