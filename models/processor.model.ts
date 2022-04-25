import mongoose, { Schema } from 'mongoose';
import { IProcessor } from '../interfaces/processor.interface';

const ProcessorSchema: Schema = new Schema({
  company: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  // RAMTypes will be Array
  RAMType: [
    {
      type: Number,
      required: true,
    },
  ],
  baseClockSpeed: {
    type: Number,
    required: true,
  },
  coreCount: {
    type: Number,
    required: true,
  },
  additionalInfo: {
    type: String,
    required: false,
  },
  virtualization: {
    type: Boolean,
    required: true,
    default: true,
  },
});

// Export the model and return your IProcessor interface
export default mongoose.model<IProcessor>('Processor', ProcessorSchema);
