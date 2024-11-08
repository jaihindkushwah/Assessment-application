import Compiler from "@/components/pages/compiler/Compiler";

import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Compiler dynamic Page",
  description: "This is the compiler page",
};

// Viewport is typically defined as part of Metadata, so you can combine them
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Page() {
  return (
    <div>
      <Compiler />
    </div>
  );
}
