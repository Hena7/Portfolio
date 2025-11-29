import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ParticleCursor from "@/components/effects/ParticleCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henok Mekonnen | Full-Stack Developer",
  description: "Portfolio of Henok Mekonnen, a Full-Stack Developer & Software Engineering Student based in Ethiopia.",
  keywords: ["Full-Stack Developer", "Software Engineer", "React", "Next.js", "Portfolio", "Henok Mekonnen"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          <ParticleCursor />
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
