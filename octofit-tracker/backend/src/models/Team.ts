import { Schema, model, Document } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  description: string;
  members: string[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

const teamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true },
    description: { type: String },
    members: [{ type: String }],
    createdBy: { type: String, required: true },
  },
  { timestamps: true }
);

export const Team = model<ITeam>('Team', teamSchema);
