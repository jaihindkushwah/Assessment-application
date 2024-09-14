import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TestCasesInput from "./TestCasesInput";
import TestOutput from "./TestOutput";

function TestCaseTabs() {
  return (
    <Tabs defaultValue="input" className="w-full h-full">
      <TabsList className="bg-inherit pb-0 pt-0">
        <TabsTrigger className="px-2 py-1" value="input">
          Test Cases
        </TabsTrigger>
        <TabsTrigger className="px-2 py-1" value="output">
          Test Output
        </TabsTrigger>
      </TabsList>
      <TabsContent className="mt-0" value="input">
        <TestCasesInput />
      </TabsContent>
      <TabsContent className="mt-0" value="output">
        <TestOutput />
      </TabsContent>
    </Tabs>
  );
}

export default TestCaseTabs;
