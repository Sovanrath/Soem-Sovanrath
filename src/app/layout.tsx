import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/module/theme-provider";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultOG: OpenGraph = {
  type: "website",
  siteName: "Soem Sovanrath",
  url: "https://soem-sovanrath.vercel.app/",
};

export const metadata: Metadata = {
  title: "Soem Sovanrath",
  description: "My Portfolio",
  openGraph: {
    ...defaultOG,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark !scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
