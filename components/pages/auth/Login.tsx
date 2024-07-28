import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";

function Login() {
  return (
    <TabsContent value="login">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            {
              "Login into your account here. After login, Experience the quizz buzz dashboard."
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="Email">Email</Label>
            <Input id="email" type="email" placeholder="abc@ef.com" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="current" type="password" placeholder="abc@123" />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="rounded-full px-8 border-2 text-white hover:text-white dark:hover:text-black  border-white bg-black text-[15px]"
          >
            Login
          </Button>
          <Button
            type="submit"
            className=" ml-3 rounded-full px-8 border-2 text-white hover:text-white dark:hover:text-black  border-white bg-black text-[15px]"
          >
            Forget Password
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}

export default Login;
