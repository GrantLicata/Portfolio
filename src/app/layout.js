import "./globals.css";
import { Inter, Roboto } from "next/font/google";
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
          <div className="container max-w-[1366px] min-h-[100vh] my-auto mx-0 p-[60px] flex justify-between">
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

// Notes:
// - This is a parent component.
// - All code placed into the return function will be provided to all pages.
