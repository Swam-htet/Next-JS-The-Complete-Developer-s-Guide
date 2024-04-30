import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
     title: 'Share Code Snippet',
     description: 'Share your code snippets with the world',
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <body className="container mx-auto px-12">{children}</body>
          </html>
     );
}
