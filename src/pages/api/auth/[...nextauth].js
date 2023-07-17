import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const authOptions = {
    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
    ],
    callbacks: {
        async signIn(user, account, profile) {
            // Add custom logic here for handling successful sign-in
            return true
        },
        async redirect(url, baseUrl) {
            // Add custom logic here for redirecting after sign-in
            return baseUrl
        },
        // ...add more callback functions here
    },
}

export default NextAuth(authOptions)
