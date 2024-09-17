import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ProblemsData: IProblemCardProps[] = [
  {
    title: "Problem 1",
    difficulty: "Easy",
    id: "1",
  },
  {
    title: "Problem 2",
    difficulty: "Medium",
    id: "2",
  },
  {
    title: "Problem 3",
    difficulty: "Hard",
    id: "3",
  },
  {
    title: "Problem 4",
    difficulty: "Easy",
    id: "4",
  },
  {
    title: "Problem 5",
    difficulty: "Medium",
    id: "5",
  },
  {
    title: "Problem 6",
    difficulty: "Hard",
    id: "6",
  },
  {
    title: "Problem 7",
    difficulty: "Easy",
    id: "7",
  },
  {
    title: "Problem 8",
    difficulty: "Medium",
    id: "8",
  },
  {
    title: "Problem 9",
    difficulty: "Hard",
    id: "9",
  },
  {
    title: "Problem 10",
    difficulty: "Easy",
    id: "10",
  },
];

interface IProblemCardProps {
  title: string;
  description?: string;
  difficulty: string;
  id: string;
  attempt?: string;
}
const ProblemCard: React.FC<IProblemCardProps> = ({
  title,
  difficulty,
  id,
}) => {
  const link = "#";
  return (
    <Link
      href={link}
      className="flex dark:bg-blend-lighten max-w-[700px] dark:bg-[#071a34] justify-between cursor-pointer shadow-slate-600 hover:shadow-lg w-full items-center flex-wrap font-sans px-4 py-2 border-2  rounded-xl"
    >
      <span className=" flex flex-col items-center gap-2">
        <p className="text-base">{title}</p>
        <p className="text-xs text-green-700">{difficulty}</p>
      </span>
      <span className="flex flex-col items-center text-sm gap-2">
        <Link
          title="Solve"
          href={link}
          className="dark:bg-[#071426] hover:dark:bg-[#01060c] hover:bg-slate-300 bg-slate-200 px-4 py-1 font-medium rounded-md text-sm"
        >
          Solve
        </Link>
        <p>1.5k</p>
      </span>
    </Link>
  );
};

function ProblemExplore() {
  return (
    <div className="py-2 ">
      <div className="pb-2 flex justify-between items-center">
        <p className="text-xl font-bold">Explore Problems</p>
        <p className="mr-4 text-xl font-bold">Filters</p>
      </div>
      <div className="w-full  flex flex-col gap-2 ">
        {/* <div className="flex flex-col gap-2 min-h-20 items-center "> */}
        {ProblemsData.map((problem) => (
          <ProblemCard key={problem.id} {...problem} />
        ))}
        {/* </div> */}
      </div>
    </div>
  );
}

export default ProblemExplore;
