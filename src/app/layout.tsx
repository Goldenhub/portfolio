import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golden Azubuike | Software Product Developer",
  description: "I help businesses, startups, and founders turn ideas into scalable MVPs—fast. Driving growth through innovative, user-centered software solutions",
  keywords: ["Software Product Developer", "MVP Developer", "Startup MVP Development", "Fullstack Developer", "Next.js Developer", "Software Developer", "Scalable Web Apps", "Tech for Startups", "Product Development"],
  authors: [
    {
      name: "Golden Azubuike",
      url: "https://github.com/goldenhub",
    },
  ],
  creator: "Golden Azubuike",
  // metadataBase: new URL(""),
  openGraph: {
    title: "Golden Azubuike | Software Product Developer",
    description: "Helping founders and businesses build MVPs quickly and drive real growth. See my approach and work in modern product development.",
    url: "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    siteName: "Golden Azubuike Portfolio",
    images: [
      {
        url: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        width: 800,
        height: 600,
        alt: "Golden Azubuike | Software Product Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Azubuike | Software Product Developer",
    description: "I help businesses, startups, and founders turn ideas into scalable MVPs—fast. Driving growth through innovative, user-centered software solutions",
    creator: "@chibu_exe",
    images: ["XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${anton.className} antialiased`}>{children}</body>
    </html>
  );
}
