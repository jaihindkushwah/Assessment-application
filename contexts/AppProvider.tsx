import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";
import SocketProvider from "./Socket";
import PeerProvider from "./Peer";
import HeaderFooterProvider from "./HeaderFooter";
import StoreProvider from "@/store/StoreProvider";

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
