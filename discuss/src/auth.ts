import NextAuth from 'next-auth';
import GitHub from '@auth/core/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/db';
import Google from '@auth/core/providers/google';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
     throw new Error('GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET must be set');
}

export const {
     handlers: { GET, POST },
     auth,
     signIn,
     signOut,
} = NextAuth({
     adapter: PrismaAdapter(db),
     providers: [
          // github
          GitHub({
               clientId: GITHUB_CLIENT_ID,
               clientSecret: GITHUB_CLIENT_SECRET,
          }),
          // google 
          Google({
               
          })
     ],
     // This is a custom callback that will be called when a session is created.
     callbacks: {
          async session({ session, user }: any) {
               if (session && user) {
                    session.user.id = user.id;
               }
               return session;
          },
     },
});
