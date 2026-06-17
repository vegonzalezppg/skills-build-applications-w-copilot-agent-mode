import { Schema, model, Document } from 'mongoose';

export interface ILeaderboard extends Document {
  userId: string;
  userName: string;
  totalPoints: number;
  totalWorkouts: number;
  totalCalories: number;
  teamId?: string;
  rank: number;
  updatedAt: Date;
}

const leaderboardSchema = new Schema<ILeaderboard>(
  {
    userId: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    totalPoints: { type: Number, default: 0 },
    totalWorkouts: { type: Number, default: 0 },
    totalCalories: { type: Number, default: 0 },
    teamId: { type: String },
    rank: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Leaderboard = model<ILeaderboard>('Leaderboard', leaderboardSchema);
