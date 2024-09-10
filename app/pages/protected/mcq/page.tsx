import Quizz from "@/components/pages/mcqquizz/Quizz";
import { DarkModeToggle } from "@/components/ui/DarkModeToggleButton";
import QuizAssessmentProvider from "@/contexts/QuizAssessment";
import React from "react";

function Page() {
  return (
    <div className="w-full h-full flex items-center p-3">
      <QuizAssessmentProvider>
        <DarkModeToggle fixed={"bottom-right"} />
        <Quizz />
      </QuizAssessmentProvider>
    </div>
  );
}

export default Page;
