"use client";
import { DarkModeToggle } from "@/components/ui/DarkModeToggleButton";
import useProfile from "@/hooks/useProfile";
import { getAuthState } from "@/store/auth";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const { getProfileDetails } = useProfile();
  const { loggedIn } = useSelector(getAuthState);
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      const token = localStorage.getItem("token");
      if (token && !loggedIn) {
        await getProfileDetails(token);
      }

      if (loggedIn) {
        // If we're on the login page and logged in, redirect to dashboard
        if (pathname === "/auth/login") {
          router.replace("/pages/protected/dashboard");
        } else {
          // Otherwise, stay on the current page
          setIsLoading(false);
        }
      } else {
        // If not logged in, redirect to login page
        if (!pathname.startsWith("/auth/")) {
          router.replace("/auth/login");
        } else {
          setIsLoading(false);
        }
      }
    };

    checkAuthAndRedirect();
  }, [loggedIn, getProfileDetails, router, pathname]);

  if (isLoading) {
    return <div>Loading...</div>; // Or a more sophisticated loading component
  }

  return (
    <div>
      <Link href={"/"} className="ml-4 mt-8 top-4">
        Home
      </Link>
      {children}
      <DarkModeToggle fixed={"bottom-right"} />
    </div>
  );
}

export default Layout;
