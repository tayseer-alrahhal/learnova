import connectToDatabase from "@/lib/db";
import { authOptions } from "@/lib/nextAuth";
import User from "@/models/User";
import { UpdateProfileSchema } from "@/utils/validationSchemas";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const { name, role, studentId, phone, bio, institution, program, location, avatar } = await request.json();

    const validation = UpdateProfileSchema.safeParse({ name, role, studentId, phone, bio, institution, program, location, avatar });
    if (!validation.success) {
        return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });
    }

    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        return new Response("Unauthorized", { status: 401 });
    }

    try {
        await connectToDatabase();

        const user = await User.findOneAndUpdate(
            { email: session.user.email },
            { $set: { name, role, studentId, phone, bio, institution, program, location, avatar } },
            { new: true }
        );

        return Response.json({ message: "Profile updated", user });

    } catch (error) {
        console.error("Error updating profile:", error);
        return Response.json({ message: "Error updating profile" }, { status: 500 });
    }
}
