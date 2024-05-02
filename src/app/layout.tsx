import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./techstack.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engin Bolat",
  description: "Engin Bolat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
