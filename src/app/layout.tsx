import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/organisms/Navigation/Navigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
