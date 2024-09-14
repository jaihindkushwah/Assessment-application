"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomSidebarLink from "./CustomSidebarLink";

import { Sidebar, SidebarBody } from "@/components/ui/sidebar";
import Link from "next/link";

export function DashboardSidebar() {
  const [open, setOpen] = useState(true);
  return (
    <Sidebar open={open} animate={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 dark:bg-[#040656]">
        <div className="flex flex-col flex-1 overflow-y-scroll overflow-x-hidden p-2 pr-4">
          <Logo />
          <CustomSidebarLink />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Quizz Buzz
      </motion.span>
    </Link>
  );
};

// export const LogoIcon = () => {
//   return (
//     <Link
//       href="#"
//       className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
//     >
//       <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
//     </Link>
//   );
// };

// Dummy dashboard component with content
