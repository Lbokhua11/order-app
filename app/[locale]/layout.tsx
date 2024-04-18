import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import React from "react";
import { NextIntlClientProvider } from "next-intl";
import StoreProvider from "@/app/[locale]/StoreProvider";
import { useMessages } from "next-intl";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={ubuntu.className} style={{ backgroundColor: "#26293D" }}>
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
