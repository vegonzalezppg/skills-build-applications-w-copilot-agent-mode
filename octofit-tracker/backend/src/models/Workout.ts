import { Schema, model, Document } from 'mongoose';

export interface IWorkout extends Document {
  userId: string;
  name: string;
  exercises: string[];
  duration: number;
  intensity: string;
  createdAt: Date;
  updatedAt: Date;
}

const workoutSchema = new Schema<IWorkout>(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    exercises: [{ type: String }],
    duration: { type: Number, required: true },
    intensity: { type: String, required: true },
  },
  { timestamps: true }
);

export const Workout = model<IWorkout>('Workout', workoutSchema);
