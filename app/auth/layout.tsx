"use client";
import { DarkModeToggle } from "@/components/ui/DarkModeToggleButton";

import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
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
