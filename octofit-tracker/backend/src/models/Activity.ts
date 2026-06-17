import { Schema, model, Document } from 'mongoose';

export interface IActivity extends Document {
  userId: string;
  type: string;
  description: string;
  duration: number;
  caloriesBurned: number;
  timestamp: Date;
  createdAt: Date;
}

const activitySchema = new Schema<IActivity>(
  {
    userId: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String },
    duration: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    timestamp: { type: Date, required: true },
  },
  { timestamps: true }
);

export const Activity = model<IActivity>('Activity', activitySchema);
