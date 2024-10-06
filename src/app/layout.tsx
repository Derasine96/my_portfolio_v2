import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto_Slab } from "next/font/google";
import { twMerge } from "tailwind-merge";
import backgroundImage from "@/assets/images/background.jpg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "700",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Check out my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "text-white antialiased font-sans relative"
        )}
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 -z-10"></div> 

        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
