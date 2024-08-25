import Register from "@/components/pages/auth/Register";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      <header className="absolute top-2 right-2">
        {/* link dropdown to move to register, forget password */}
        <span className="flex gap-4 items-center">
          <Link href={"/auth/login"}>Login</Link>
          <Link href={"/auth/forget"}>Forget Password</Link>
        </span>
      </header>
      <div className="flex items-center justify-center  mt-14 sm:mt-32 max-w-screen max-h-screen">
        <Register />
      </div>
    </div>
  );
}

export default Page;
