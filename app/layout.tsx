import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// const geist = Geist({
//   subsets: ["latin"],
//   variable: "--font-geist",
// });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joanna Sierak - gabinet psychologiczny",
  description: "Gabinet psychologiczny Joanny Sierak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${playfair.variable}`}>
        <div className={inter.className}>
          {children}
        </div>
      </body>
    </html>
  );
}
