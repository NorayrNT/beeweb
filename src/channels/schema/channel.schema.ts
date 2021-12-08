import * as mongoose from "mongoose";

export const ChannelSchema = new mongoose.Schema({
    name: { type: String },
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    workspaceId: { type: mongoose.Types.ObjectId, ref: "Workspace"}
}, {
    timestamps: {createdAt: 'created_at', updatedAt: "updated_at"},
    autoIndex: false,
    validateBeforeSave: false,
    strictQuery: true,
    toJSON:   {virtuals: true},
    toObject: {virtuals: true}
});
