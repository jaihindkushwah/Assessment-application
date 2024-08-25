import Forget from "@/components/pages/auth/Forget";
import Link from "next/link";
import React from "react";

function ForgetPage() {
  return (
    <div>
      <header className="absolute top-2 right-2">
        <span className="flex gap-4 items-center">
          <Link href={"/auth/login"}>Login</Link>
          <Link href={"/auth/register"}>Register</Link>
        </span>
      </header>
      <div className="flex items-center justify-center  mt-14 sm:mt-32 max-w-screen max-h-screen">
        <Forget />
      </div>
    </div>
  );
}

export default ForgetPage;
