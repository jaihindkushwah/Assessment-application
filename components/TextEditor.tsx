"use client";

import React, { ButtonHTMLAttributes } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import Paragraph from "@tiptap/extension-paragraph";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import FontFamily from "@tiptap/extension-font-family";
import Codes from "@tiptap/extension-code";

import CodeBlock from "@tiptap/extension-code-block";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Pilcrow,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  ListTree,
  Heading4,
  Heading5,
  Space,
  Minus,
  CodeXml,
} from "lucide-react";
import { Level } from "@tiptap/extension-heading";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// const fontSizes = {
//   Small: "14px",
//   Normal: "16px",
//   Large: "18px",
//   "Extra Large": "20px",
// };

const fontFamilies = {
  "Font Sans":
    "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  Arial: "Arial, sans-serif",
  TimesNewRoman: "Times New Roman, serif",
  CourierNew: "Courier New, monospace",
  Georgia: "Georgia, serif",
  Verdana: "Verdana, sans-serif",
};
interface IToolbarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  icon: React.ElementType;
  title: string;
}

export const ToolbarButton: React.FC<IToolbarButtonProps> = ({
  active,
  icon: Icon,
  title,
  ...props
}) => (
  <button
    className={`p-2 rounded-lg transition-colors ${
      active
        ? "bg-slate-200  dark:bg-slate-900  text-blue-600"
        : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
    }`}
    title={title}
    {...props}
  >
    <Icon className="h-5 w-5" />
  </button>
);

export const RichTextEditorExtensions = [
  StarterKit.configure({
    paragraph: false,
  }),
  Paragraph.configure({
    HTMLAttributes: {
      style: `font-size: 15px`,
    },
  }),
  Codes,
  CodeBlock,
  FontFamily,
  TextStyle,
];

export const EditorDefaultProps = {
  attributes: {
    class:
      "prose min-h-40 focus:outline-none focus:ring-0 prose-blue prose-headings:scroll-mt-[80px] dark:prose-invert",
  },
};
// const TextSizes=[
//   {
//     name:
//   }
// ]

export interface IRichTextEditorToolBarProps {
  editor: Editor;
  containerClass?: string;
}

export const RichTextEditorToolBar: React.FC<IRichTextEditorToolBarProps> = ({
  editor,
  containerClass,
}) => {
  const setFontFamilyHandler = (value: string) => {
    editor.chain().focus().setFontFamily(value).run();
  };
  return (
    <div
      className={cn([
        "flex flex-wrap fixed z-40 top-0 w-screen gap-1 p-2 border-b border-slate-200 bg-white  dark:bg-black dark:border-slate-700",
        containerClass,
      ])}
    >
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive("bold")}
        icon={Bold}
        title="Bold"
      />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive("italic")}
        icon={Italic}
        title="Italic"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive("bulletList")}
        icon={List}
        title="Bullet List"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive("orderedList")}
        icon={ListOrdered}
        title="Ordered List"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().setParagraph().run()}
        active={editor.isActive("paragraph")}
        icon={Pilcrow}
        title="Paragraph"
      />
      <Select
        onValueChange={(value) => {
          editor
            .chain()
            .focus()
            .toggleHeading({ level: parseInt(value) as Level })
            .run();
          console.log(value);
        }}
      >
        <SelectTrigger className="w-fit h-fit focus:ring-0 focus:ring-offset-0">
          <SelectValue placeholder="Headings" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {[
              <Heading1 className="h-5 w-5" />,
              <Heading2 className="h-5 w-5" />,
              <Heading3 className="h-5 w-5" />,
              <Heading4 className="h-5 w-5" />,
              <Heading5 className="h-5 w-5" />,
              // <Heading6 className="h-5 w-5" />,
            ].map((item, index) => (
              <SelectItem key={index} value={index + 1 + ""}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        active={editor.isActive("codeBlock")}
        icon={CodeXml}
        title="Code Block"
      />
      {/* <ToolbarButton
    onClick={() => editor.chain().focus().toggleCode().run()}
    active={editor.isActive("code")}
    icon={Code}
    title="Code"
  /> */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        active={editor.isActive("blockquote")}
        icon={Quote}
        title="Blockquote"
      />
      <ToolbarButton
        onClick={() => {
          return editor
            .chain()
            .focus()
            .insertContent(
              "<pre><strong>Input:</strong> \n<strong>Output:</strong> \n<strong>Explanation:</strong> </pre>"
            )
            .run();
        }}
        active={false}
        icon={ListTree}
        title="Insert Example Template"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        active={editor.isActive("horizontalRule")}
        icon={Minus}
        title="Horizontal Rule"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().setHardBreak().run()}
        active={editor.isActive("hardBreak")}
        icon={Space}
        title="Hard Break"
      />
      <select
        className="rounded-md px-1"
        onChange={(e) => setFontFamilyHandler(e.target.value)}
      >
        {Object.entries(fontFamilies).map(([key, value]) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

interface IRichTextReader {
  contents: string;
  className?: string;
}

export const RichTextReader: React.FC<IRichTextReader> = ({
  contents,
  className,
}) => {
  const editor = useEditor({
    extensions: [...RichTextEditorExtensions],
    content: JSON.parse(contents || "{}") || "",
    editable: false,
    immediatelyRender: false,
    editorProps: { ...EditorDefaultProps },
  });

  if (!editor) {
    return null;
  }
  return (
    <EditorContent
      editor={editor}
      // dark:bg-[#0a0e0f] bg-[#f0f0f0]
      className={cn([
        "prose dark:prose-invert  rounded-lg border-none prose-pre:text-black dark:prose-pre:text-white prose-pre:font-medium prose-pre:bg-white dark:prose-pre:bg-black max-w-none  p-4 flex-1 border border-slate-200 dark:border-slate-700",
        className,
      ])}
    />
  );
};

const RichTextEditor: React.FC = () => {
  // const contents = JSON.parse(localStorage.getItem("content") || "{}") || "";
  const editor = useEditor({
    extensions: [...RichTextEditorExtensions],
    // content: contents,
    // editable: contents ? false : true,
    // content: post.content,
    // extensions: [...extensions],
    // editable: false,
    // immediatelyRender: false,
    editorProps: { ...EditorDefaultProps },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="rounded-lg overflow-hidden relative bg-white dark:bg-black">
      <RichTextEditorToolBar editor={editor} />
      <div className="flex z-0 mt-12">
        <EditorContent
          editor={editor}
          style={{ minHeight: "240px" }}
          className="prose dark:prose-invert bg-[#f0f0f0]  dark:bg-[#0a0e0f] prose-pre:text-black dark:prose-pre:text-white prose-pre:font-medium prose-pre:bg-white dark:prose-pre:bg-black max-w-none  p-4 flex-1 border border-slate-200 dark:border-slate-700"
        />
        <div
          className="prose dark:prose-invert bg-[#f0f0f0] dark:bg-[#0a0e0f] prose-pre:text-black dark:prose-pre:text-white prose-pre:font-medium prose-pre:bg-white dark:prose-pre:bg-black flex-1 p-5 max-w-[50vw] border-l border-slate-200 dark:border-slate-700"
          dangerouslySetInnerHTML={{ __html: editor.getHTML() }}
        >
          {/* <pre>{JSON.stringify(editor.getJSON(), null, 2)}</pre> */}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-center w-full">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() =>
            localStorage.setItem("content", JSON.stringify(editor.getJSON()))
          }
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;
