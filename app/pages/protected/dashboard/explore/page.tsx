import ProblemExplore from "@/components/pages/programming/ProblemExplore";
import React from "react";
interface Props {
  searchParams: {
    data: string;
  };
}
function Page(props: Props) {
  return <ProblemExplore {...props} />;
}

export default Page;
