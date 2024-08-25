import McqQuiz from "@/components/pages/mcqquizz/MCQ";
import Quizz from "@/components/pages/mcqquizz/Quizz";
import { DarkModeToggle } from "@/components/ui/DarkModeToggleButton";
import React from "react";

function Page() {
  return (
    <div className="w-full h-full flex items-center p-3">
      {/* <McqQuiz /> */}
      <DarkModeToggle fixed={"bottom-right"} />
      <Quizz />
    </div>
  );
}

export default Page;
