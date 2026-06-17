import { Schema, model } from 'mongoose';
const leaderboardSchema = new Schema({
    userId: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    totalPoints: { type: Number, default: 0 },
    totalWorkouts: { type: Number, default: 0 },
    totalCalories: { type: Number, default: 0 },
    teamId: { type: String },
    rank: { type: Number, default: 0 },
}, { timestamps: true });
export const Leaderboard = model('Leaderboard', leaderboardSchema);
//# sourceMappingURL=Leaderboard.js.map