
import connectToDatabase from "@/lib/db";
import { authOptions } from "@/lib/nextAuth";
import User from "@/models/User";
import { UpdateProfileSchema } from "@/utils/validationSchemas";
import { getServerSession } from "next-auth/next";
import { cloudinaryLoader } from "next-cloudinary";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { avatar, publicId } = await request.json();

        const validation = UpdateProfileSchema.safeParse({ avatar });
        if (!validation.success) {
            return NextResponse.json(
                { message: validation.error.errors[0].message },
                { status: 400 }
            );
        }

        const session = await getServerSession(authOptions);

        if (!session?.user?.email) {
            return new Response("Unauthorized", { status: 401 });
        }

        await connectToDatabase();

        const user = await User.findOneAndUpdate(
            { email: session.user.email },
            { $set: { avatar, updatedAt: new Date() } },
            { new: true }
        );

        return NextResponse.json(
            { message: "Profile updated successfully", user },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating profile:", error);
        return NextResponse.json(
            { message: "Error updating profile" },
            { status: 500 }
        );
    }
}
