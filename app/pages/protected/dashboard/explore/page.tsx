import ProblemExplore from "@/components/pages/programming/ProblemExplore";
import React from "react";
interface Props {
  searchParams: {
    page?: string;
    status?: string;
    difficulty?: string;
    tags?: string;
  };
}
function Page(props: Props) {
  return <ProblemExplore {...props} />;
}

export default Page;
