"use server";

import * as z from "zod";

import { signIn, signOut } from "../../auth";
import { cookies } from "next/headers";

import { LoginSchema } from "@/schemas/login";
import { DEFAULT_LOGIN_REDIRECT } from "../../../routes";

export async function doLogout() {
  const cookieStore = cookies();

  cookieStore.getAll().forEach((cookie) => {
    cookieStore.set(cookie.name, "", { expires: new Date(0), path: "/" });
  });

  await signOut({ redirectTo: DEFAULT_LOGIN_REDIRECT });
}

export const cLogin = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    throw { error: "Invalid fields" };
  }

  const { phone, password } = validateFields.data;
  try {
    const response = await signIn("credentials", {
      phone,
      password,
      redirect: false,
    });

    if (response?.error) {
      return { error: "Invalid credentials" };
    }

    return { success: true, redirectTo: DEFAULT_LOGIN_REDIRECT };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
};
