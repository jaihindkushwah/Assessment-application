"use client";
import {
  RichTextEditor,
  RichTextReader,
  useRichTextEditor,
} from "@/components/TextEditor";
import { Button } from "@/components/ui/button";
import React from "react";

function CreateProblem() {
  const [contents, setContents] = React.useState<string>("");
  const editor = useRichTextEditor();
  const [isViewing, setIsViewing] = React.useState(false);

  const onClick = () => {
    setContents(JSON.stringify(editor?.getJSON() || ""));
    console.log(contents);
  };

  // if(!editor) return null;
  return (
    <div>
      <div>
        <div className="w-1/2">
          <RichTextEditor editor={editor} />
        </div>
        <div className="w-1/2">
          {isViewing ? <RichTextReader contents={contents} /> : null}
        </div>
      </div>
      <Button onClick={onClick}>Preview</Button>
      <Button
        onClick={() => {
          setIsViewing(!isViewing);
        }}
      >
        {isViewing ? "View" : "Edit"}
      </Button>
    </div>
  );
}

export default CreateProblem;
