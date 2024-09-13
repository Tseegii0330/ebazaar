import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  ...authConfig,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.ebazaar_token = user.ebazaar_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.ebazaar_token && typeof token.ebazaar_token === "string") {
        session.ebazaar_token = token.ebazaar_token;
      }
      return session;
    },
  },
});
