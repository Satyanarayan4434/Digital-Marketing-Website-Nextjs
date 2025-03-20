import { ClerkProvider } from "@clerk/nextjs";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import initDB from "@/lib/init-db";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // Choose required weights
  variable: "--font-roboto", // Define a CSS variable for Tailwind
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Choose required weights
  variable: "--font-inter",
});

await initDB();

export const metadata = {
  title: "Qubit Digital Solution - Digital Marketing Platform",
  description: "Your partner for digital marketing success",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en scroll-smooth">
        <body className={roboto.className}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
