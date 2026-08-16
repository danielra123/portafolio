import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Daniel Ramírez | Full Stack Developer",
  description:
    "Portafolio de Daniel Estiven Ramírez Muñoz, Ingeniero de Sistemas y Full Stack Developer con experiencia en los sectores salud y educativo.",
  openGraph: {
    title: "Daniel Ramírez | Full Stack Developer",
    description:
      "Portafolio de Daniel Estiven Ramírez Muñoz, Ingeniero de Sistemas y Full Stack Developer con experiencia en los sectores salud y educativo.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <IntroSplash />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
