// models/User.js
import mongoose, { Document, Model, Schema } from "mongoose";

export interface IUser extends Document {
    id: string;
    name: string;
    email: string;
    password?: string;
    role: string;
    verificationToken: string;
    isVerified: boolean;
    studentId?: string;
    phone?: string;
    bio?: string;
    institution?: string;
    program?: string;
    location?: string;
    avatar?: string;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    role: { type: String, required: true },
    verificationToken: { type: String },
    isVerified: { type: Boolean, default: false },

    studentId: { type: String },
    phone: { type: String },
    bio: { type: String },
    institution: { type: String },
    program: { type: String },
    location: { type: String },
    avatar: { type: String },
}, {
    timestamps: true,
});

const User: Model<IUser> = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
