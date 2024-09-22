"use client";
import React, { useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
// import { useRouter } from "next/router";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IFilterCheckboxProps extends React.ComponentProps<typeof Checkbox> {
  title: string;
}
const FilerCheckbox: React.FC<IFilterCheckboxProps> = ({ title, ...props }) => {
  return (
    <span className="flex gap-2 items-center">
      <Checkbox {...props} />
      <p>{title}</p>
    </span>
  );
};

// const convertObjectToString = (obj = {}) => {
//   return Object.entries(obj)
//     .map((item) => {
//       if (item[1]) {
//         return item[0];
//       }
//     })
//     .filter((item) => item)
//     .join(",");
// };

function ProblemFilter() {
  //   const [status, setStatus] = useState({
  //     solved: false,
  //     unsolved: false,
  //   });
  //   const [difficulty, setDifficulty] = useState({
  //     easy: false,
  //     medium: false,
  //     hard: false,
  //   });
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  //   const handleFilterRoute = useCallback(() => {
  //     const updatedSearchParams = new URLSearchParams(searchParams.toString());

  //     const newDifficulty = convertObjectToString(difficulty);
  //     const newStatus = convertObjectToString(status);
  //     if (newStatus) {
  //       updatedSearchParams.set("status", newStatus);
  //     } else {
  //       updatedSearchParams.delete("status");
  //     }
  //     if (newDifficulty) {
  //       updatedSearchParams.set("difficulty", newDifficulty);
  //     } else {
  //       updatedSearchParams.delete("difficulty");
  //     }
  //     // console.log(updatedSearchParams.get("status"));
  //     let newFilter = path + "?" + updatedSearchParams.toString();
  //     // console.log(newFilter);
  //     router.push(newFilter);
  //   }, [difficulty, path, router, status]);

  //   const handleSetDifficulty = (key: string, value: boolean | string) => {
  //     setDifficulty({ ...difficulty, [key]: value });
  //   };
  const handleFilter = useCallback(
    (key: string, value: string, checked: boolean | string) => {
      // setStatus({ ...status, [key]: value });
      const updatedSearchParams = new URLSearchParams(searchParams.toString());
      const status1 = updatedSearchParams.get(key)?.split(",") || [];
      // ['solved']
      const newStatus = status1.filter((item) => value != item);
      if (checked) {
        newStatus.push(value);
      }
      if (newStatus.length > 0) {
        updatedSearchParams.set(key, newStatus.join(","));
      } else {
        updatedSearchParams.delete(key);
      }
      updatedSearchParams.set("page", "1");
      let newFilter = path + "?" + updatedSearchParams.toString();
      // console.log(newFilter);
      router.push(newFilter);
      //   console.log(newStatus);
    },
    [searchParams]
  );
  const handleCheckboxCheck = useCallback(
    (key: string, value: string) => {
      const updatedSearchParams = new URLSearchParams(searchParams.toString());
      const status = updatedSearchParams.get(key)?.split(",");
      //   console.log(status);
      if (status && status.includes(value)) {
        return true;
      }
      return false;
    },
    [searchParams]
  );

  //   useEffect(() => {
  //     console.log("dev");
  //     handleFilterRoute();
  //   }, [handleFilterRoute]);

  return (
    <div className=" ml-3 relative max-w-[330px] w-full  sm:block hidden">
      {/* <button
        onClick={() => {
          handleFilterRoute("status", "solved");
        }}
        className="px-5 bg-gray-700 border-red-300 border "
      >
        Set
      </button>
      <button
        onClick={() => {
          handleFilterRoute("status", "unsolved");
        }}
        className="px-5 bg-gray-700 border-red-300 border "
      >
        unSet
      </button> */}
      <div className="pb-2 flex flex-col p-5  gap-3 items-center sticky top-0 right-0">
        <Card className="w-fit mt-3 pt-5 ">
          {/* <CardHeader></CardHeader> */}
          <CardContent className="min-h-[300px] ">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg">Status</p>
              <FilerCheckbox
                checked={handleCheckboxCheck("status", "solved")}
                onCheckedChange={(e) => {
                  handleFilter("status", "solved", e);
                }}
                title="Solved"
              />
              <FilerCheckbox
                checked={handleCheckboxCheck("status", "unsolved")}
                onCheckedChange={(e) => {
                  handleFilter("status", "unsolved", e);
                }}
                title="Unsolved"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <p className="font-bold text-lg ">Difficulty</p>
              <FilerCheckbox
                onCheckedChange={(e) => {
                  handleFilter("difficulty", "easy", e);
                }}
                checked={handleCheckboxCheck("difficulty", "easy")}
                title="Easy"
              />
              <FilerCheckbox
                onCheckedChange={(e) => {
                  handleFilter("difficulty", "medium", e);
                }}
                checked={handleCheckboxCheck("difficulty", "medium")}
                title="Medium"
              />
              <FilerCheckbox
                checked={handleCheckboxCheck("difficulty", "hard")}
                onCheckedChange={(e) => {
                  handleFilter("difficulty", "hard", e);
                }}
                title="Hard"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <p className="font-bold text-lg">Tags</p>
              <div className="grid md:grid-cols-1 lg:grid-cols-2  grid-cols-2  gap-2 ">
                <FilerCheckbox title="Array" />
                <FilerCheckbox title="Linked List" />
                <FilerCheckbox title="Tree" />
                <FilerCheckbox title="Graph" />
                <FilerCheckbox title="Math" />
                <FilerCheckbox title="Bitmask" />
                <FilerCheckbox title="String" />
                <FilerCheckbox title="Backtracking" />
                <FilerCheckbox title="Greedy" />
                <FilerCheckbox title="Heap" />
                <FilerCheckbox title="Sorting" />
                <FilerCheckbox title="Stack" />
                <FilerCheckbox title="Search" />
                <FilerCheckbox title="Binary Search" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div></div>
    </div>
  );
}

export default ProblemFilter;
