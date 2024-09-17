"use client";
import { useCompilerAPI } from "@/hooks/useCompilerAPI";
import React, { useCallback, useEffect } from "react";

interface LanguageOptions {
  javascript: string;
  python: string;
  java: string;
  c: string;
  cpp: string;
}

export type LanguageKey = keyof LanguageOptions;

interface ICompilerOutput {
  code: number;
  output: string;
  signal: string;
  stderr: string;
  stdout: string;
}

interface ICompilerContext {
  handleRunSubmit: () => void;
  setProblems: (value: any) => void;
  setLanguage: (value: any) => void;
  setInputTestCase: (value: any) => void;
  setCode: (value: any) => void;
  problems: any;
  language: LanguageKey;
  inputTestCase: string;
  code: string;
  setOutput: (value: any) => void;
  output?: ICompilerOutput;
  currentTestCaseTab: string;
  setCurrentTestCaseTab: (value: string) => void;
}

const CompilerContext = React.createContext<ICompilerContext>({
  handleRunSubmit: () => {},
  setProblems: (value: any) => {},
  setLanguage: (value: any) => {},
  setInputTestCase: (value: any) => {},
  setCode: (value: any) => {},
  problems: [],
  language: "java",
  inputTestCase: "",
  code: "",
  setOutput: (value: any) => {},
  currentTestCaseTab: "input",
  setCurrentTestCaseTab: (value: string) => {},
});

interface CompilerProviderProps {
  children: React.ReactNode;
}

export function useCompiler() {
  return React.useContext(CompilerContext);
}
interface LanguageOptions {
  javascript: string;
  python: string;
  java: string;
  c: string;
  cpp: string;
}

const defaultCode: LanguageOptions = {
  javascript:
    "console.log('hello world');\n// Your other JavaScript code here;",
  python: "print('hello world')\n# Your other Python code here;",
  c: 'printf("hello world");\n// Your other C code here;',
  cpp: 'cout << "hello world";\n// Your other C++ code here;',
  java: 'import java.util.*;\nclass HelloWorld{\n  public static void main(String[] args){\n    System.out.println("Hello World");\n  }\n}',
};

function CompilerProvider({ children }: CompilerProviderProps) {
  const [problems, setProblems] = React.useState([]);
  const [language, setLanguage] = React.useState<LanguageKey>("java");
  const [inputTestCase, setInputTestCase] = React.useState("");
  const [code, setCode] = React.useState("");
  const { handleRun } = useCompilerAPI();
  const [output, setOutput] = React.useState<ICompilerOutput>();
  const [currentTestCaseTab, setCurrentTestCaseTab] = React.useState("input");

  const handleRunSubmit = useCallback(() => {
    handleRun({
      input: inputTestCase,
      language: language,
      code: code,
    })
      .then((res) => {
        console.log(res);
        setOutput(res);
        setCurrentTestCaseTab("output");
      })
      .catch((err) => {});
  }, [handleRun, inputTestCase, language, code]);

  useEffect(() => {
    setCode(defaultCode[language]);
  }, [language]);

  return (
    <CompilerContext.Provider
      value={{
        setOutput,
        output,
        handleRunSubmit,
        setProblems,
        setLanguage,
        setInputTestCase,
        setCode,
        problems,
        language,
        inputTestCase,
        code,
        setCurrentTestCaseTab,
        currentTestCaseTab,
      }}
    >
      {children}
    </CompilerContext.Provider>
  );
}

export default CompilerProvider;
