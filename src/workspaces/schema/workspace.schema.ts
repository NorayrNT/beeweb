import * as mongoose from "mongoose";

export const WorkspaceSchema = new mongoose.Schema({
    name: { type: String},
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    slag: { type: String, unique: true, required: true }
}, {
    timestamps: {createdAt: 'created_at', updatedAt: "updated_at"},
    autoIndex: false,
    validateBeforeSave: false,
    strictQuery: true,
    toJSON:   {virtuals: true},
    toObject: {virtuals: true},    
})