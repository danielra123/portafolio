import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { IntroSplash } from "@/components/intro-splash";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#070b14" },
  ],
};

export const metadata: Metadata = {
  title: "Daniel Ramirez | Ingeniero de Sistemas",
  description:
    "Portafolio de Daniel Estiven Ramirez Muñoz, Ingeniero de Sistemas con experiencia en los sectores salud y educativo.",
  authors: [{ name: "Daniel Estiven Ramirez Muñoz" }],
  keywords: [
    "Daniel Ramirez",
    "Ingeniero de Sistemas",
    "Angular",
    "Node.js",
    ".NET",
    "Next.js",
    "Bogotá",
    "Colombia",
  ],
  openGraph: {
    title: "Daniel Ramirez | Ingeniero de Sistemas",
    description:
      "Portafolio de Daniel Estiven Ramirez Muñoz, Ingeniero de Sistemas con experiencia en los sectores salud y educativo.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-ambient-grid min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <IntroSplash />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
