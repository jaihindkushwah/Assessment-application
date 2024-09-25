import Dashboard from "@/components/pages/dashboard/Dashboard";
import React from "react";

interface Props {
  searchParams: {
    route: string;
  };
}
function DashboardPage(props: Props) {
  return <Dashboard {...props} />;
}

export default DashboardPage;
