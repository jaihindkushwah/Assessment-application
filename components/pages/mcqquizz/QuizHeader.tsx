import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

function QuizHeader() {
  return (
    <header className="flex justify-end p-3 gap-2">
      <span className="mr-2.5">
        <h1>Timer</h1>
        <h1>60:00</h1>
      </span>
      <span>
        <h1>Name : Shivam</h1>
        <p>Email : 6QYJt@example.com</p>
      </span>
      <span>
        <h1>Roll No: 1234567879</h1>
        <p>Date of Birth: 01/01/2000</p>
      </span>
      <Avatar className="w-16 h-16">
        <AvatarImage
          className="h-full w-full"
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback className="h-full w-full">AM</AvatarFallback>
      </Avatar>
    </header>
  );
}

export default QuizHeader;
