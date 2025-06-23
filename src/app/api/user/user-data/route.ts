import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";
import User from "@/models/User";
import connectToDatabase from "@/lib/db";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        return new Response("Unauthorized", { status: 401 });
    }

    await connectToDatabase();

    const user = await User.findOne({ email: session.user.email }).select("-password -verificationToken")
        .lean();;

    if (!user) {
        return new Response("User not found", { status: 404 });
    }

    return new Response(JSON.stringify(user), { status: 200 });
}
