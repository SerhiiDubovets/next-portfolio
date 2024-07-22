import Navbar from "@/components/Navbar";
import TransitionProvider from "@/components/TransitionProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Portfolio App",
  description: "Animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-full bg-gradient-to-b from-blue-100 to-red-100`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
