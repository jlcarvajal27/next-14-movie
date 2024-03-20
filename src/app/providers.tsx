"use client";

import { NextUIProvider } from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;
