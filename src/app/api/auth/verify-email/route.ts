import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/models/User";

export async function GET(request: Request) {
  // Extract token from URL
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json(
      { message: "Verification failed. Invalid token." },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();

    // Find the user with the verification token
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return NextResponse.json(
        { message: "Verification failed. Invalid or expired token." },
        { status: 400 }
      );
    }

    // Mark user as verified by clearing the verification token and adding verified flag
    user.verificationToken = '';
    user.isVerified = true;
    await user.save();

    // Redirect to successful verification page
    return NextResponse.redirect(new URL('/verify-success', request.url));
  } catch (error) {
    console.error("Email verification error:", error);
    return NextResponse.json(
      { message: "Verification failed. Please try again." },
      { status: 500 }
    );
  }
}
