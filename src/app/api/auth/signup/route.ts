import crypto from 'crypto'
import bcrypt from 'bcrypt';
import connectToDatabase from "@/lib/db";
import { RegisterSchema } from "@/utils/validationSchemas";
import { NextResponse } from "next/server";
import User from "@/models/User";
import { sendEmail, generateVerificationEmail } from "@/lib/email";

export async function POST(request: Request) {
    const { name, email, password, role } = await request.json();

    const validation = RegisterSchema.safeParse({ name, email, password, role });
    if (!validation.success) {
        return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });
    }

    try {
        await connectToDatabase();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "Sign Up failed. User already exists. ❌" }, { status: 400 });
        }

        const verificationToken = crypto.randomBytes(32).toString('hex')

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role,
            verificationToken,
        });
        await newUser.save();

        // Generate verification URL
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || `${request.headers.get('x-forwarded-proto') || 'http'}://${request.headers.get('host')}`;
        const verificationUrl = `${baseUrl}/api/auth/verify-email?token=${verificationToken}`;

        // Send verification email
        await sendEmail({
            to: email,
            subject: 'Verify Your LearnOva Account',
            html: generateVerificationEmail(name, verificationUrl)
        });

        return NextResponse.json({ message: "Awesome! Your account has been created. Please check your email to verify your account 🎉" }, { status: 201 });


        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ message: "Sign Up failed. Please try again. ❌" }, { status: 500 });
    }
}
