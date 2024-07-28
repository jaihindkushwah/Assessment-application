import Header from "@/components/Header";
import { HamburgerMenuPage } from "@/components/HumbergerMenu";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DarkModeToggle } from "@/components/ui/DarkModeToggleButton";
import React from "react";

function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen">
        <Header />
        <HamburgerMenuPage />
        {children}
        <span className="fixed bottom-1 right-1 md:hidden">
          <DarkModeToggle />
        </span>
      </div>
    </ThemeProvider>
  );
}

export default App;
