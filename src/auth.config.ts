import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas/login";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log(process.env.BASE_URL, "basee");
        if (!credentials) return null;

        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { phone, password } = validateFields.data;

          const res = await fetch(
            `${process.env.BASE_URL}/login/?phone=${phone}&password=${password}`
          );

          const data = await res.json();

          if (data.code === 200) {
            return { ...data };
          } else {
            return null;
          }
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
