"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo-ebazaar.svg";
import { cLogin } from "@/app/actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas/login";

const formSchema = z.object({
  phone: z.string().min(8),
  password: z.string(),
});

const LoginForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    try {
      const result = await cLogin(values);

      if (result?.error) {
        console.error(result.error);
      } else {
        router.push("/");
      }
    } catch (e) {
      console.error(e);
      throw new Error("Check your Credentials");
    }
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-28 rounded-lg border shadow-lg">
      <div className="flex justify-center p-3">
        <Image src={Logo} width={118} height={49} alt="ebazaar-logo" />
      </div>
      <div className="p-3">
        <Form {...form}>
          <form
            className="space-y-8 w-full"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="p-2 border rounded-sm">
                  <FormLabel className="text-gray-600">Нэвтрэх нэр</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your username"
                      name="phone"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="p-2 border rounded-sm">
                  <FormLabel className="text-gray-600">Нууц үг</FormLabel>
                  <FormControl className="m-0">
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-green-600 hover:bg-green-700"
              type="submit"
            >
              Нэвтрэх
            </Button>
            <Button
              className="w-full bg-gray-400"
              onClick={() => router.push("/auth/register")}
            >
              Бүртгүүлэх
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
