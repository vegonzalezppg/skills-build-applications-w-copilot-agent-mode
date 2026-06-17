import { Schema, model } from 'mongoose';
const workoutSchema = new Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    exercises: [{ type: String }],
    duration: { type: Number, required: true },
    intensity: { type: String, required: true },
}, { timestamps: true });
export const Workout = model('Workout', workoutSchema);
//# sourceMappingURL=Workout.js.map