// /types/next-auth.d.ts
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
  interface User {
    id: string;
    firstname: string;
    lastname: string;
    photo: string;
    email: string;
    created: string;
    phone: string;
    point_amount: number;
    upoint_number: number;
    order_edit_permission: number;
    ebazaar_token: string;
  }

  interface Session {
    ebazaar_token: string;
    user: User;
  }
  interface Adapter {
    createUser(User: AdapterUser): () => Promise<User> | undefined;
  }
}
