// "use client";
import { DashboardSidebar } from "./Sidebar";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { dashboardRouteHandler } from "./route";
import ProtectedHeader from "../components/ProtectedHeader";
// import PromotionalBanner from "./PromotionalBanner";
interface Props {
  searchParams: {
    route: string;
  };
}

async function Dashboard(props: Props) {
  const { searchParams } = props;
  let routeName = searchParams?.route;
  console.log(routeName);

  // const params = useSearchParams();
  // const routeName = params.get("route");
  // useEffect(() => {
  // console.log(routeName);
  // }, [routeName]);

  return <>{dashboardRouteHandler(routeName)}</>;
}
export default Dashboard;
