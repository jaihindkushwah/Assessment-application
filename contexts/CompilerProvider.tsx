"use client";
import LoaderAnimation from "@/components/LoaderAnimation";
import { useCompilerAPI } from "@/hooks/useCompilerAPI";
import { useParams } from "next/navigation";
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
  handleFinalSubmit: () => void;
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
  handleFinalSubmit: () => {},
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
  const [problems, setProblems] = React.useState("");
  const [language, setLanguage] = React.useState<LanguageKey>("java");
  const [inputTestCase, setInputTestCase] = React.useState("");
  const [code, setCode] = React.useState("");
  const { handleRun, getProblemById, handleSubmit } = useCompilerAPI();
  const [output, setOutput] = React.useState<ICompilerOutput>();
  const [currentTestCaseTab, setCurrentTestCaseTab] = React.useState("input");
  const [isLoading, setIsLoading] = React.useState(false);

  const params = useParams();
  const { id } = params as { id: string };
  const handleFinalSubmit = useCallback(() => {
    setIsLoading(true);
    handleRun({
      input: inputTestCase,
      language: language,
      code: code,
      problemId: id,
    })
      .then((res) => {
        console.log(res);
        setOutput(res);
        setCurrentTestCaseTab("output");
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, [handleRun, inputTestCase, language, code, id]);

  const handleRunSubmit = useCallback(() => {
    setIsLoading(true);
    handleRun({
      input: inputTestCase,
      language: language,
      code: code,
      problemId: id,
    })
      .then((res) => {
        console.log(res);
        setOutput(res);
        setCurrentTestCaseTab("output");
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, [handleRun, inputTestCase, language, code, id]);

  useEffect(() => {
    console.log(id);
    try {
      if (!id) {
        setProblems(localStorage.getItem("content") || "");
        return;
      }
      getProblemById(id).then((res) => {
        setProblems(res.content);
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  }, [getProblemById, id]);
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
        handleFinalSubmit,
      }}
    >
      {isLoading ? (
        <LoaderAnimation
          className="fixed top-0 left-0 w-full h-full z-40 dark:bg-[#acabab]"
          style={{ backgroundColor: "#acabab", opacity: 0.3 }}
          type="roundLoading"
          animationStyle={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "120px",
            height: "120px",
          }}
        />
      ) : null}
      {children}
    </CompilerContext.Provider>
  );
}

export default CompilerProvider;
