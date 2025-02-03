import type { ReactNode } from "react";
import NavBar from "../components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Amairah&apos;s Portfolio</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <NavBar />
        <main className="container mx-auto min-h-screen px-4 py-8">{children}</main>
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>© 2025 Amairah | Web Developer | All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
// error free
