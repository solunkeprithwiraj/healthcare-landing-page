import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PregaCoach: Your Companion Through Every Step of Motherhood",
  description:
    "Track your pregnancy, get expert advice, and join a community of moms-to-be with PregaCoach's comprehensive pregnancy healthcare platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"font-sans antialiased"}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
