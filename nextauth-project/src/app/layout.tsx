import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextAuth Tutorial- By NextjsDev",
  description: "User Authentication in Next.js 13 App using NextAuth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex justify-center items-start p-6 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
