"use client";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import { HamburgerMenuPage } from "@/components/HumbergerMenu";
import { DarkModeToggle } from "@/components/ui/DarkModeToggleButton";
import React from "react";
import { useHeaderFooter } from "@/contexts/HeaderFooter";

function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { isFooterVisible, isHeaderVisible } = useHeaderFooter();
  return (
    <div className="min-h-screen flex flex-col">
      {/* {isHeaderVisible ? (
        <>
          <Header />
          <HamburgerMenuPage />
        </>
      ) : null} */}
      {children}
      <DarkModeToggle fixed={"default"} />
      {/* {isFooterVisible ? <Footer /> : null} */}
    </div>
  );
}

export default App;
