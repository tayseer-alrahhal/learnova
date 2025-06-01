// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authPages = ["/signin", "/signup", "/login"];

const protectedRoutes = ["/profile", "/dashboard"];

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const { pathname } = req.nextUrl;

    const isProtected = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );
    if (isProtected && !token) {
        return NextResponse.redirect(new URL("/signin", req.url));
    }

    const isAuthPage = authPages.some((route) => pathname.startsWith(route));
    if (isAuthPage && token) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/profile/:path*", "/dashboard/:path*", "/signin", "/signup", "/login"],
};
