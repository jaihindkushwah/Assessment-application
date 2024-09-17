"use client";
import { DarkModeToggle } from "@/components/ui/DarkModeToggleButton";
import useProfile from "@/hooks/useProfile";
import { getAuthState } from "@/store/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

interface Props {
  children: React.ReactNode;
}
function Layout({ children }: Props) {
  const { getProfileDetails } = useProfile();
  const { loggedIn } = useSelector(getAuthState);

  // console.log(pathName);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !loggedIn) {
      getProfileDetails(token);
    }
  }, [loggedIn, getProfileDetails]); // Only runs when `loggedIn` or `getProfileDetails` changes

  useEffect(() => {
    if (loggedIn) {
      redirect("/pages/protected/dashboard");
    }
  }, [loggedIn]);

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
