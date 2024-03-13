"use client";

import React from "react";

import Footer from "./components/footer";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Without this import, the Tailwind styles will not be applied
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col container mx-auto mt-1 h-[100dvh]">
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <div>
              <div className="flex-1 min-h-screen">{children}</div>
              <div className="mt-auto">
                <Footer />
              </div>
            </div>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
