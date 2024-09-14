import Login from "@/components/pages/auth/Login";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      <header className="absolute top-2 right-2">
        <span className="flex gap-4 items-center">
          <Link href={"/auth/register"}>Register</Link>
          <Link href={"/auth/forget"}>Forget Password</Link>
        </span>
      </header>
      <div className="flex items-center justify-center  mt-14 sm:mt-32 max-w-screen max-h-screen">
        <Login />
      </div>
    </div>
  );
}

export default Page;
