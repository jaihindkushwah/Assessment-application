"use client";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  // const router = useRouter();
  const router = useRouter();

  // useEffect(() => {
  router.push("/auth/login");
  // }, [router]);

  return (
    <main className="flex justify-center  mt-14 sm:mt-32 max-w-screen max-h-screen">
      <span className="text-center"> Redirecting to Login page</span>
    </main>
  );
}
