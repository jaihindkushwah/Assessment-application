import "./css/styles.css";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import React from "react";
import QuestionsAvatar from "./QuestionsAvatar";
import SingleQuestion from "./SingleQuestion";
import QuizHeader from "./QuizHeader";

function Quizz() {
  return (
    <ResizablePanelGroup
      id={"QuizSection"}
      direction="horizontal"
      className="w-screen h-screen rounded-lg border"
    >
      <ResizablePanel
        defaultSize={22.5}
        className="border-r-4 dark:border-slate-800 border-slate-300"
      >
        <div
          id={"QuizSection"}
          className="flex h-[96vh] p-3 overflow-scroll overflow-x-hidden "
        >
          <QuestionsAvatar />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={77.5}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel className="border-b-2 dark:border-slate-800 border-slate-300">
            {/* <CodeEditor /> */}
            <QuizHeader />
            <SingleQuestion />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Quizz;
