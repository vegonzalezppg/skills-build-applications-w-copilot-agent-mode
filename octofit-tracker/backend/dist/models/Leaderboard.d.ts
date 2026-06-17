import { Document } from 'mongoose';
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
export declare const Leaderboard: import("mongoose").Model<ILeaderboard, {}, {}, {}, Document<unknown, {}, ILeaderboard> & ILeaderboard & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
//# sourceMappingURL=Leaderboard.d.ts.map