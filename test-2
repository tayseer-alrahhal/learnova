import bcrypt from 'bcrypt';
import CredentialsProvider from "next-auth/providers/credentials";
import { type AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import connectToDatabase from './db';
import User from "@/models/User";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                try {
                    await connectToDatabase();
                    const user = await User.findOne({ email: credentials?.email });
                    if (!user) {
                        throw new Error("")
                    }
                    const isValidPassword = await bcrypt.compare(
                        credentials?.password ?? "", user.password as string
                    );
                    if (!isValidPassword) {
                        throw new Error("")
                    }
                    return user;
                }
                catch {
                    return null
                }
            }
        })

    ],
    session: {
        strategy: 'jwt',
        maxAge: 1 * 24 * 60 * 60, // 1 day
    },
    callbacks: {
        async signIn({ account, profile }) {
            if (account?.provider === 'google') {
                await connectToDatabase();
                const existingUser = await User.findOne({ email: profile?.email });
                if (!existingUser) {
                    await User.create({
                        name: profile?.name,
                        email: profile?.email,
                    });
                }
            }
            return true;
        },

        async jwt({ token, user }) {
            if (user) {
                token.name = user.name;
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    email: token.email,
                    name: token.name,
                    image: token.picture,
                }
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/signin',
        signOut: '/signout',
    }
};
