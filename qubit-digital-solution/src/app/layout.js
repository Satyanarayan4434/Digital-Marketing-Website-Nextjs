import { ClerkProvider } from "@clerk/nextjs";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import initDB from "@/lib/init-db";
import { ToastProvider } from "@/components/ToastProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
          {/* Toast Provider added here */}
          <ToastProvider />
          <Analytics/>
          <SpeedInsights/>
          
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