"use client";
// import Forget from "@/components/pages/auth/Forget";
// import Login from "@/components/pages/auth/Login";
// import Register from "@/components/pages/auth/Register";
// import { DarkModeToggle } from "@/components/ui/DarkModeToggleButton";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TabsDemo() {
  // const router = useRouter();
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/login");
  }, [router]);

  return (
    <main className="flex justify-center  mt-14 sm:mt-32 max-w-screen max-h-screen">
      <span className="text-center"> Redirecting to Login page</span>
      {/* <DarkModeToggle fixed={"top-right"} />
      <Tabs defaultValue="account" className="max-w-[480px]">
        <TabsList className="grid w-full grid-cols-3 sm:ml-0 ml-3">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="forget">Forget</TabsTrigger>
        </TabsList>

        <TabsContent value="forget">
          <Forget />
        </TabsContent>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="account">
          <Register />
        </TabsContent>
      </Tabs> */}
    </main>
  );
}
