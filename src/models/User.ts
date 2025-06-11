// models/User.js
import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
    id: string;
    name: string;
    email: string;
    password?: string;
    role: string;
    verificationToken: string;
    isVerified: boolean;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    role: { type: String, required: true },
    verificationToken: { type: String },
    isVerified: { type: Boolean, default: false },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
