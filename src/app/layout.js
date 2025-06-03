import {
  Geist,
  Geist_Mono,
  Roboto,
  Lato,
  Lora,
  Lobster,
} from "next/font/google";
import "./globals.css";
import Header from "./shared/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  display: "swap",
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
});

export const lobsterFont = Lobster({
  subsets: ["latin"],
  weight: ["400"], // Choose the weights you need
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen justify-between`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
