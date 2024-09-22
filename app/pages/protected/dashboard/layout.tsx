// import ProtectedHeader from "@/components/pages/protected/ProtectedHeader";
import ProtectedHeader from "@/components/pages/components/ProtectedHeader";
import { DashboardSidebar } from "@/components/pages/dashboard/Sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}
function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        "rounded-md flex flex-col md:flex-row h-screen bg-gray-100  w-full flex-1 dark:bg-[#040656] mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden"
      }
    >
      <DashboardSidebar />
      <div className="flex flex-1 flex-col overflow-y-hidden">
        <ProtectedHeader />
        <div className="p-2 md:p-10 md:pr-5 rounded-tl-2xl overflow-y-auto border-neutral-200 dark:gray-900 bg-white dark:bg-[#011531]  flex flex-col gap-2 flex-1 w-full h-full">
          {/* <ProtectedHeader /> */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
