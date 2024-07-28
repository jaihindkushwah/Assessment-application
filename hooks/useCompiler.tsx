import { useState } from "react";

export function useCompiler() {
  const [problems, setProblems] = useState([]);

  return {
    problems,
    setProblems,
  };
}
