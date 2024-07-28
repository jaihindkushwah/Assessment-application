import { cn } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "./ui/slider";
import { Button } from "@/components/ui/button";
import { ResetIcon } from "@radix-ui/react-icons";
import CustomTooltip from "./ui/tooltip";
interface EditorNavProps {
  fontSize: number;
  setFontSize: any;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export function CodeEditorNavbar({
  fontSize,
  setFontSize,
  setLanguage,
}: EditorNavProps) {
  return (
    <nav className="h-8 w-full px-5 pl-6 mb-1 mt-1 flex justify-between items-center gap-2">
      <span className="flex gap-3 items-center">
        <Select defaultValue="javascript" onValueChange={(e) => setLanguage(e)}>
          <SelectTrigger className="w-[120px] h-7 focus:ring-0 focus:ring-none focus:ring-offset-0">
            <SelectValue placeholder="language" />
          </SelectTrigger>
          <SelectContent className="ring-0">
            <SelectItem value="java">Java</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="cpp">C++</SelectItem>
            <SelectItem value="javascript">Javascript</SelectItem>
          </SelectContent>
        </Select>
        <CustomTooltip content={"Font Size"}>
          <Slider
            defaultValue={[fontSize]}
            onValueChange={(e) => setFontSize(e)}
            max={30}
            step={1}
            min={10}
            className={cn("w-[20%]", "active:bottom-0 h-1 min-w-20")}
          />
        </CustomTooltip>
        <CustomTooltip content={"Reset Code"}>
          <ResetIcon className="font-bold text-xl" />
        </CustomTooltip>
      </span>
      <span className="flex gap-2">
        <Button
          variant={"default"}
          className="h-7 rounded-full active:scale-95 text-center active:duration-75 transition-all ease-in-out"
        >
          Run
        </Button>
        <Button
          variant={"default"}
          className="h-7 rounded-full active:scale-95 text-center active:duration-75 transition-all ease-in-out"
        >
          Submit
        </Button>
      </span>
    </nav>
  );
}
