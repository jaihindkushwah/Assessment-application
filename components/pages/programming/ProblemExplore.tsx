// "use client";

import { ProblemCard } from "@/components/ProblemCard";
import { getProblems } from "@/hooks/dsaProblem";
import ProblemFilter from "./ProblemFilter";
import Pagination from "./Pagination";

interface ProblemExploreProps {
  searchParams: {
    page?: string;
    status?: string;
    difficulty?: string;
    tags?: string;
  };
}

export default async function ProblemExplore({
  searchParams,
}: ProblemExploreProps) {
  const ProblemsData = await getProblems(searchParams);

  return (
    <>
      <div className="py-2 max-h-screen flex w-full">
        <div className="w-full">
          <div className="pb-2 flex justify-between items-center">
            <p className="text-xl font-bold">Explore Problems</p>
          </div>
          <div className="w-full  flex flex-col gap-2 ">
            {ProblemsData?.map((problem: any) => (
              <ProblemCard key={problem._id} {...problem} id={problem._id} />
            ))}
          </div>
          <div className="relative py-3 ">
            <Pagination />
          </div>
        </div>
        <ProblemFilter />
      </div>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps<
//   ProblemExploreProps
// > = async (context) => {
//   const sort = (context.query.sort as SortOption) || "default";
//   const initialProblems = await getProblems();

//   return {
//     props: {
//       initialProblems,
//       initialSort: sort,
//     },
//   };
// };
