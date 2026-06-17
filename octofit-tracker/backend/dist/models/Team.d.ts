import { Document } from 'mongoose';
export interface ITeam extends Document {
    name: string;
    description: string;
    members: string[];
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Team: import("mongoose").Model<ITeam, {}, {}, {}, Document<unknown, {}, ITeam> & ITeam & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
//# sourceMappingURL=Team.d.ts.map