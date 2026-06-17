import { Schema, model } from 'mongoose';
const activitySchema = new Schema({
    userId: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String },
    duration: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    timestamp: { type: Date, required: true },
}, { timestamps: true });
export const Activity = model('Activity', activitySchema);
//# sourceMappingURL=Activity.js.map