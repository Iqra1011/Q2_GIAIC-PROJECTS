
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <nav className="flex justify-center gap-6 bg-blue-600 p-4 text-white">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <main className="p-6 max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  );
}