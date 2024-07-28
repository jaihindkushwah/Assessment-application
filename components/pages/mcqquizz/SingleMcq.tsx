import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Question } from "./dummyData";

interface Props {
  // children: React.ReactNode;
  question: Question;
  setAnswer: (answer: string) => void;
}

function SingleMcq({ question, setAnswer }: Props) {
  return (
    <div className="flex flex-col gap-10 mb-4">
      <div className=" flex flex-col gap-1">
        <span>Questions {question.id}.</span>
        <p>{question.question}</p>
      </div>
      <RadioGroup
        onValueChange={setAnswer}
        defaultValue=""
        className=" ml-4 flex flex-col gap-8"
      >
        {question.options.map((option, index) => (
          <div key={index + option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={option} />
            <Label htmlFor={option}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default SingleMcq;
