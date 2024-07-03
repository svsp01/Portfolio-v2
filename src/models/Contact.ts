
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    // match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
  },
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);