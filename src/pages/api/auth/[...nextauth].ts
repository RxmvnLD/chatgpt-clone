import NextAuth, { User as NextAuthUser } from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { randomBytes, randomUUID } from "crypto";
import { dbConnect } from "@/config/mongoose";
import User from "@/models/User";

dbConnect();

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Type your password"
        }
      },
      async authorize(credentials, req) {
        console.log(credentials);
        //Find user with matching email
        const user = await User.findOne({
          email: credentials?.email
        });
        //If user doesn't exist throw error
        if (!user) return null;
        //Check hased password with DB password
        const checkPassword = await compare(
          credentials?.password ?? "",
          user.password
        );
        //Incorrect password - send response
        if (!checkPassword) return null;
        return { id: user.id, email: user.email } as NextAuthUser;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.user = user;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) session.user = token.user as NextAuthUser;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET
  }
};

export default NextAuth(authOptions);
