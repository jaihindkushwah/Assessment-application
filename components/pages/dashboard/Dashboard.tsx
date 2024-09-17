"use client";
import { DashboardSidebar } from "./Sidebar";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { dashboardRouteHandler } from "./route";
import ProtectedHeader from "../components/ProtectedHeader";
// import PromotionalBanner from "./PromotionalBanner";

function Dashboard() {
  const params = useSearchParams();
  const routeName = params.get("route");
  useEffect(() => {
    console.log(routeName);
  }, [routeName]);

  return (
    <>
      {/* <PromotionalBanner /> */}
      <div
        className={
          "rounded-md flex flex-col md:flex-row h-screen bg-gray-100  w-full flex-1 dark:bg-[#040656] mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden"
        }
      >
        <DashboardSidebar />
        <div className="flex flex-1 flex-col overflow-y-auto">
          <ProtectedHeader />
          <div className="p-2 md:p-10 rounded-tl-2xl overflow-y-auto border-neutral-200 dark:gray-900 bg-white dark:bg-[#011531]  flex flex-col gap-2 flex-1 w-full h-full">
            {dashboardRouteHandler(routeName)}
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
