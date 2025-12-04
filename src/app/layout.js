import "./globals.css";
import Navbar from "../components/layout/Navbar"; 
import Footer from "../components/layout/Footer";
export const metadata = {
  title: "Zth | Create. Convert. Scale.",
  description: "AI-powered pitch decks that convert investors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        <main className="pt-20"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}