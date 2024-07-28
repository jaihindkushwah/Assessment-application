import Login from "@/components/pages/auth/Login";
import Register from "@/components/pages/auth/Register";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <main className="flex items-center flex-col mt-10 sm:mt-14 w-screen ">
      <Tabs defaultValue="account" className="w-screen max-w-[500px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>
        <Login />
        <Register />
      </Tabs>
    </main>
  );
}
