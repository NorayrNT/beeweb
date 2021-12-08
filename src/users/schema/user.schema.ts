import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: { type: String, unique: true,required: true },
    password: { type: String, min:10, required: true},
    img: {type: String, required: false}
},{
    timestamps: {createdAt: 'created_at', updatedAt: "updated_at"},
    autoIndex: false,
    validateBeforeSave: false,
    strictQuery: true,
    toJSON:   {virtuals: true},
    toObject: {virtuals: true}
})
