import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JavidVerse — Creative Agency for Books, Video, and Branding",
  description: "JavidVerse is a premium creative agency offering book services, video production, and graphic branding with a clean, strategic approach.",
  keywords: ["creative agency", "book services", "video services", "branding", "graphic design", "web creation", "marketing"],
  openGraph: {
    title: "JavidVerse — Creative Agency",
    description: "Premium creative services for authors, brands, and organizations.",
    type: "website",
    url: "https://javidverse.example",
    siteName: "JavidVerse",
    images: [
      {
        url: "https://javidverse.example/brand-mark.svg",
        width: 1200,
        height: 630,
        alt: "JavidVerse creative agency"
      }
    ]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-light text-primary antialiased">
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
