import Header from "@/components/Header";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import { Bricolage_Grotesque,  Patua_One} from "next/font/google";
import "./globals.css";

const bricolage_grotesque = Bricolage_Grotesque({
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
    <html lang="en">
      <body
        className={`${bricolage_grotesque.variable} ${patua_One.variable} antialiased`}
      >
        <Header />
        <div className="mx-auto flex max-w-3xl flex-col px-8">
            <main className="grow">
              {children}
              </main>
          </div>
        <Footer />
      </body>
    </html>
  );
}
