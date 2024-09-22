"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getAuthState } from "@/store/auth";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import useLogout from "@/hooks/useLogout";
// import { DarkModeToggle } from "@/components/ui/DarkModeToggleButton";
import LoaderAnimation from "@/components/LoaderAnimation";

function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = useRouter();
  // const pathName = usePathname();
  // const { logoutHandler } = useLogout();
  // const [isLoading, setIsLoading] = useState(true);

  // const { loggedIn, token } = useSelector(getAuthState);

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     if (token) {
  //       const date = Date.now();
  //       let { exp: decodedTokenExp } = jwtDecode(token);

  //       decodedTokenExp = (decodedTokenExp || 0) * 1000;

  //       if (decodedTokenExp <= date) {
  //         await logoutHandler();
  //         router.replace("/auth/login");
  //       } else {
  //         // Token is valid, stay on the current page
  //         setIsLoading(false);
  //       }
  //     } else if (!loggedIn) {
  //       // console.log("Not logged in");
  //       router.replace("/auth/login");
  //     } else {
  //       setIsLoading(false);
  //     }
  //   };

  //   checkAuth();
  // }, [pathName, token, loggedIn, router, logoutHandler]);

  // if (isLoading) {
  //   return <LoaderAnimation type="book" />; // Or a more sophisticated loading component
  // }

  return <div>{children}</div>;
}

export default PageLayout;
