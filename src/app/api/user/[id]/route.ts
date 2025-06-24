import User from "@/models/User";
import connectToDatabase from "@/lib/db";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const userId = params.id;
    console.log("User ID to delete:", userId);

    await connectToDatabase();

    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return new Response("User not found", { status: 404 });
        }

        return new Response("User deleted successfully", { status: 200 });
    } catch (error) {
        console.log("Failed to delete user", error);
        return new Response("Failed to delete user", { status: 500 });
    }
}
