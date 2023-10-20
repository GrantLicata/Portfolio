import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import AuthProvider from "@/providers/AuthProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grant Licata",
  description:
    "My home on the web where you can explore my work, read posts, and reach out to me!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script
          id="Adsense-id"
          data-ad-client="ca-pub-5883791306244864"
          async="true"
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5883791306244864"
        />
      </head>
      <body>
        <AuthProvider>
          <ThemeProvider>
            <div className="container">
              <Navbar />
              {children}
              <Analytics />
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
