import CodeEditor from "@/components/pages/compiler/CodeEditor";
import CodeRunSkeleton from "@/components/pages/compiler/ui/CodeRunSkeleton";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import TestCaseTabs from "@/components/pages/compiler/TestCaseTabs";
import ProblemSection from "@/components/pages/compiler/ProblemSection";
import { DarkModeToggle } from "@/components/ui/DarkModeToggleButton";

export function CompilerPage() {
  const isRunning = false;

  return (
    <div className="mt-2">
      <DarkModeToggle fixed={"bottom-right"} />
      <ResizablePanelGroup
        direction="horizontal"
        className="w-screen h-screen rounded-lg border"
      >
        <ResizablePanel
          defaultSize={42}
          className="border-r-4 dark:border-slate-800 border-slate-300"
        >
          <ProblemSection />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={58}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel
              defaultSize={75}
              className="border-b-2 dark:border-slate-800 border-slate-300"
            >
              <CodeEditor />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25}>
              {/* show skeleton when user click to run the code or submit */}
              <div className="">
                {isRunning ? <CodeRunSkeleton /> : <TestCaseTabs />}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default CompilerPage;
