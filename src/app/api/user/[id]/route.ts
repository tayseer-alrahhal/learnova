
import User from "@/models/User";
import connectToDatabase from "@/lib/db";

type UserProps = {
    params: Promise<{ id: string }>;
}

export async function DELETE(req: Request, { params }: UserProps) {
    const { id } = await params;

    await connectToDatabase();

    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return new Response("User not found", { status: 404 });
        }

        return new Response("User deleted successfully", { status: 200 });
    } catch (error) {
        console.log("Failed to delete user", error);
        return new Response("Failed to delete user", { status: 500 });
    }
}