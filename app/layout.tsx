import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Commarce Site",
  description: "Created by Estiak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
