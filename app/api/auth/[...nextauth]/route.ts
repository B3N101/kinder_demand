import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const authOptions = {
	secret: (process.env.NEXTAUTH_SECRET as string) ?? "",
	jwt: {
		secret: process.env.NEXTAUTH_SECRET as string,
	},
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: (process.env.GITHUB_ID as string) ?? "",
			clientSecret: (process.env.GITHUB_SECRET as string) ?? "",
		}),
	],
	pages: {
		// signIn: "/auth/signin",
		// signOut: "/auth/signout",
		// error: "/auth/error", // Error code passed in query string as ?error=
		// verifyRequest: "/auth/verify-request", // (used for check email message)
		// newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
	},
};

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};