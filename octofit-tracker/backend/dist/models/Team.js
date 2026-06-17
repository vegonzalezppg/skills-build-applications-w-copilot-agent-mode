import { Schema, model } from 'mongoose';
const teamSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    members: [{ type: String }],
    createdBy: { type: String, required: true },
}, { timestamps: true });
export const Team = model('Team', teamSchema);
//# sourceMappingURL=Team.js.map