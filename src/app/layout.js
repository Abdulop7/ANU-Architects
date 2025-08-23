import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import RouteProgressBar from "../../components/routeProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ANU Architects - Innovative Architectural Designs for Residential & Commercial Projects",
  description: "ANU Architects, based in Multan, Punjab, Pakistan, offers innovative, sustainable designs for residential, commercial, and urban projects with expert solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RouteProgressBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
