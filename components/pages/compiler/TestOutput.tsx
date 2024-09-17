"use client";
import { useCompiler } from "@/contexts/CompilerProvider";
import React from "react";

function TestOutput() {
  const { output } = useCompiler();
  return (
    // <div className="">
    <div className=" dark:bg-black bg-white  px-2 py-3 max-h-[200px] h-28 rounded-md overflow-y-auto">
      <pre className="text-[14px]">{output?.output}</pre>
    </div>
    // </div>
  );
}

export default TestOutput;
