import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

import type { Metadata } from "next";
import {  Inter ,  Patua_One} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const patua_One = Patua_One({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Nicholas' Personal Place",
  description: "Nicholas Pang's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className="light"
      style={{colorScheme:"light"}}
    >
      <body
        className={`min-h-screen bg-background font-sans antialiased ${inter.variable} ${patua_One.variable}`}
      > 
        <Providers>
          <Header />
          <div className="mx-auto flex max-w-3xl flex-col px-8">
              <main className="grow">{children}</main>
            </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
