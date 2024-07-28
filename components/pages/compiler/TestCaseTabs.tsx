import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TestCasesInput from "./TestCasesInput";
import TestOutput from "./TestOutput";

function TestCaseTabs() {
  return (
    <Tabs defaultValue="input" className="w-full h-full">
      <TabsList className="border-0 p-0 h-0">
        <TabsTrigger value="input">Test Cases</TabsTrigger>
        <TabsTrigger value="output">Test Output</TabsTrigger>
      </TabsList>
      <TabsContent value="input">
        <TestCasesInput />
      </TabsContent>
      <TabsContent value="output">
        <TestOutput />
      </TabsContent>
    </Tabs>
  );
}

export default TestCaseTabs;
