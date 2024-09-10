"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/login");
  }, [router]);

  return (
    <main className="flex justify-center  mt-14 sm:mt-32 max-w-screen max-h-screen">
      <span className="text-center"> Redirecting to Login page</span>
    </main>
  );
}

export default Page;
