"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

// create an arrays lenth of 10 and fill it with 0

export const questions = new Array(100).fill(0);

function QuestionsAvatar() {
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
      {questions.map((_, index) => (
        <Avatar
          key={index}
          className={`cursor-pointer hover:bg-slate-500 ${
            marked.includes(index) ? "bg-green-500 hover:bg-green-600" : ""
          }`}
          onClick={() => handleMark(index)}
        >
          <AvatarImage
            className="bg-inherit"
            // src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback className="bg-inherit">{index + 1}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}

export default QuestionsAvatar;
