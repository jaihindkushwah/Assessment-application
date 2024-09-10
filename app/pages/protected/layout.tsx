"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getAuthState } from "@/store/auth";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import useLogout from "@/hooks/useLogout";
import { DarkModeToggle } from "@/components/ui/DarkModeToggleButton";

function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathName = usePathname();
  const { logoutHandler } = useLogout();

  const { loggedIn, token } = useSelector(getAuthState);

  useEffect(() => {
    // check token validity
    // if not valid, redirect to login
    // if valid, render children
    if (token) {
      const date = Date.now();
      let { exp: decodedTokenExp } = jwtDecode(token);

      decodedTokenExp = (decodedTokenExp || 0) * 1000;
      // console.log("decodedToken", decodedTokenExp, date);

      if (decodedTokenExp <= date) {
        logoutHandler();
        router.replace("/auth/login");
      }
    }
  }, [pathName, token, router, logoutHandler]);

  if (!loggedIn) {
    return router.replace("/auth/login");
  }

  return (
    <div>
      {children}
      <DarkModeToggle fixed={"bottom-right"} />
    </div>
  );
}

export default PageLayout;
