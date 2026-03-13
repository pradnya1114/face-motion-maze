import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-sans',
// });

export const metadata: Metadata = {
  title: 'Face Motion Maze',
  description: 'A head-controlled maze game using face tracking.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning className="bg-black antialiased font-sans">
        {children}
      </body>
    </html>
  );
}