import { Document } from 'mongoose';
export interface IActivity extends Document {
    userId: string;
    type: string;
    description: string;
    duration: number;
    caloriesBurned: number;
    timestamp: Date;
    createdAt: Date;
}
export declare const Activity: import("mongoose").Model<IActivity, {}, {}, {}, Document<unknown, {}, IActivity> & IActivity & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
//# sourceMappingURL=Activity.d.ts.map