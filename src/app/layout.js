import { Plus_Jakarta_Sans } from "next/font/google"; //
import "./globals.css";
import Navbar from "../components/layout/Navbar"; 
import Footer from "../components/layout/Footer";

// Configure the font
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Zth | Create. Convert. Scale.",
  description: "AI-powered pitch decks that convert investors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply the font variable to the body */}
      <body className={`${jakarta.variable} font-sans antialiased bg-white text-gray-900`}>
        <Navbar />
        <main> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}            