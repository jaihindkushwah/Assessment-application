"use client";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useLogin from "@/hooks/useLogin";
import { getAuthState } from "@/store/auth";
import { useSelector } from "react-redux";

const FormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be at most 100 characters long")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one number"),
});

function Login() {
  const { handleLogin, loginError } = useLogin();
  const authState = useSelector(getAuthState);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmitForm(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    handleLogin(data).then(() => {
      form.reset();
    });
  }
  return (
    <main className="flex  max-w-screen flex-col  items-center justify-start sm:justify-center">
      <div className="flex items-center mt-5 flex-col md:w-[640px] sm:w-[560px] w-screen">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitForm)}
            className="w-2/3 space-y-6"
          >
            <h1 className="text-xl sm:text-3xl font-bold text-center">Login</h1>
            {loginError && (
              <p className="text-red-500 text-center">{loginError}</p>
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-left flex gap-2">
              <Button
                type="submit"
                className="rounded-full px-8 border-2 text-white hover:text-white dark:hover:text-black  border-white bg-black text-[15px]"
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}

export default Login;
