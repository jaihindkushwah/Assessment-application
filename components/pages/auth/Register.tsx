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
function Register() {
  return (
    <TabsContent value="account">
      <Card>
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            {"Create your account here. And experience the quizz buzz dashboard."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Pedro Duarte" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="abc@ef.com" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder={'abc@123'} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="re-password">Confirm-Password</Label>
            <Input id="re-password" type="password" placeholder={'abc@123'} />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="rounded-full px-8 border-2 text-white hover:text-white dark:hover:text-black  border-white bg-black text-[15px]"
          >
            Register
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}

export default Register;
