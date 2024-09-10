import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";
import SocketProvider from "./Socket";
import PeerProvider from "./Peer";
import HeaderFooterProvider from "./HeaderFooter";
import StoreProvider from "@/store/StoreProvider";
import { Toaster } from "@/components/ui/toaster";

interface Props {
  children: React.ReactNode;
}
function AppProvider({ children }: Props) {
  return (
    <StoreProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        <HeaderFooterProvider>
          <SocketProvider>
            <PeerProvider>{children}</PeerProvider>
          </SocketProvider>
        </HeaderFooterProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default AppProvider;
