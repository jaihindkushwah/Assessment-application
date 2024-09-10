"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuizAssessment } from "@/contexts/QuizAssessment";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

// create an arrays lenth of 10 and fill it with
const arr = new Array(100).fill(0);
function QuestionsAvatar() {
  const { questions } = useQuizAssessment();
  const [marked, setMarked] = useState<number[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  const handleMark = (index: number) => {
    if (marked.includes(index)) {
      setMarked(marked.filter((i) => i !== index));
    } else {
      setMarked([...marked, index]);
    }
    router.push(pathname + `?question=${index + 1}`);
  };
  return (
    <div className="flex flex-wrap justify-start items-start content-start gap-1">
      {arr.map((_, index) => (
        <Avatar
          key={index}
          className={`cursor-pointer hover:bg-slate-500 border ${
            marked.includes(index) ? "bg-green-500 hover:bg-green-600" : ""
          }`}
          onClick={() => handleMark(index)}
        >
          <AvatarImage className="bg-inherit" alt="@shadcn" />
          <AvatarFallback className="bg-inherit">{index + 1}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}

export default QuestionsAvatar;
