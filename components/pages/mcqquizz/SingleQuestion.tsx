"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import McqQuiz from "./MCQ";

function SingleQuestion() {
  const params = useSearchParams();
  const questionNo = params.get("question");
  const [questionData, setQuestionData] = React.useState<any>(null);
  useEffect(() => {
    if (questionNo) {
      setQuestionData(questionNo);
    }
  }, [questionNo]);

  return (
    <div className="flex items-center mt-5 h-full flex-col">
      <h1>
        SingleQuestion{" "}
        <span className="text-3xl shadow-lg">{questionData}</span>
      </h1>
      <McqQuiz />
    </div>
  );
}

export default SingleQuestion;
