"use client";
import React, { useEffect, useState } from "react";
import SingleMcq from "./SingleMcq";
import { Question, questions } from "./dummyData";
import { Button } from "@/components/ui/button";

// create an arrays lenth of 10 and fill it with 0

interface answersType {
  id: number;
  answer: string;
}

function McqQuiz() {
  const [quizzes, setQuizzes] = useState<Question[]>(questions);
  const [quiz, setQuiz] = useState<Question>(questions[0]);
  const [count, setCount] = useState(1);

  const [answers, setAnswers] = useState<answersType[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  useEffect(() => {
    const filterQuiz = questions.filter((question) => question.id === count);
    setQuiz(filterQuiz[0]);
  }, [count]);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const saveAndNext = () => {
    // save then next;
    if (currentAnswer.length > 0) {
      setAnswers([...answers, { id: quiz.id, answer: currentAnswer }]);
      setCurrentAnswer("");
    }
    increment();
  };
  const submit = () => {
    // save then next;
    saveAndNext();
    const ans = [...answers, { id: quiz.id, answer: currentAnswer }];
    console.log("answers", ans);
  };

  return (
    <div className="flex items-center flex-col w-screen justify-center gap-10">
      <>
        <SingleMcq key={count} setAnswer={setCurrentAnswer} question={quiz} />
        <div>
          <span className="flex gap-2">
            <Button variant={"outline"} size="sm" onClick={decrement}>
              Previous
            </Button>
            {count === 10 ? (
              <Button variant={"outline"} size="sm" onClick={submit}>
                Submit
              </Button>
            ) : (
              <>
                <Button variant={"outline"} size="sm" onClick={saveAndNext}>
                  Save and Next
                </Button>
                <Button variant={"outline"} size="sm" onClick={increment}>
                  Next
                </Button>
              </>
            )}
          </span>
        </div>
      </>
    </div>
  );
}

export default McqQuiz;
