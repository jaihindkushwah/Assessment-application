// import ProtectedHeader from "@/components/pages/protected/ProtectedHeader";
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
    <div>
      {/* <ProtectedHeader /> */}
      {children}
    </div>
  );
}

export default DashboardLayout;
