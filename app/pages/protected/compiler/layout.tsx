import CompilerProvider from "@/contexts/CompilerProvider";

export function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CompilerProvider>{children}</CompilerProvider>;
}

export default PageLayout;
