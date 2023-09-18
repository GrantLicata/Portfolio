import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grant Licata",
  description:
    "My home on the web where you can explore my work, read posts, and reach out to me!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Analytics />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
