"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  router.replace("/pages/protected/dashboard");

  return (
    <main className="flex justify-center  mt-14 sm:mt-32 max-w-screen max-h-screen">
      <span className="text-center"> Redirecting to Login page</span>
    </main>
  );
}

export default Page;
