import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import RouteProgressBar from "../../components/routeProgressBar";
import LoaderWrapper from "../../components/loaderWrapper";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  description: "A&U Architects in Multan, Punjab, Pakistan – expert architect, interior designer & custom home builders. Quality construction & design near you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoaderWrapper>
          <RouteProgressBar />
          <Header />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </LoaderWrapper>
      </body>
    </html>
  );
}
