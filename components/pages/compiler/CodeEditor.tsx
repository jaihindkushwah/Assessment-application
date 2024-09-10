"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import { CodeEditorNavbar } from "./CodeEditorNavbar";
import useCurrentTheme from "@/hooks/useCurrentTheme";
import { defaultCode, LanguageKey } from "./data/code";
interface CodeEditorProps {}

function CodeEditor({}: CodeEditorProps) {
  const [fontSize, setFontSize] = React.useState(16);
  const [language, setLanguage] = React.useState<LanguageKey>("java");
  const options = { fontSize };
  const { currentTheme } = useCurrentTheme();

  return (
    <div className="flex h-full items-center justify-center flex-col">
      <CodeEditorNavbar
        language={language}
        fontSize={fontSize}
        setLanguage={(value) => {
          setLanguage(value as LanguageKey);
        }}
        setFontSize={setFontSize}
      />
      <Editor
        defaultLanguage={language}
        language={language}
        height={"100%"}
        theme={"vs-" + currentTheme}
        width={"100%"}
        options={options}
        value={defaultCode[language]}
      />
    </div>
  );
}

export default CodeEditor;
