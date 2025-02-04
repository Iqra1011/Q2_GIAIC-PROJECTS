import type { ReactNode } from 'react';
import NavBar from '../components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{"Amairah's Portfolio"}</title>
      </head>
      <body>
        <NavBar />
        <main className="main-container">{children}</main>
        <footer className="footer">
          <p>© 2025 Amairah | Web Developer | All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
