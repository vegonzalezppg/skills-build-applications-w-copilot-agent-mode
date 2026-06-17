import { Document } from 'mongoose';
export interface IWorkout extends Document {
    userId: string;
    name: string;
    exercises: string[];
    duration: number;
    intensity: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Workout: import("mongoose").Model<IWorkout, {}, {}, {}, Document<unknown, {}, IWorkout> & IWorkout & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
//# sourceMappingURL=Workout.d.ts.map