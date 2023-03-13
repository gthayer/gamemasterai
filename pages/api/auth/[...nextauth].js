import NextAuth from 'next-auth'
import RedditProvider from 'next-auth/providers/reddit'
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prismadb from '../../../lib/database/prismadb'

export default NextAuth({
  adapter: PrismaAdapter(prismadb),
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    session: async ({ session, user }) => {
      session.user.id = user.id
      return session
    }
  }
})