import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import RouteProgressBar from "../../../components/routeProgressBar";
import LoaderWrapper from "../../../components/loaderWrapper";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import FullCircleCursor from "../../../components/customCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ANU Architects | Top Architecture & Interior Design Firm in Multan, Pakistan",
  description: "A&U Architects in Multan, Punjab, Pakistan – expert architect, interior designer & custom home builders. Quality construction & design near you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="G663YRr5zvrrlWXzX_urThC-SkBnuU-baUpd85CG5zw" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoaderWrapper>
          {/* <FullCircleCursor
          size={28}
          color="249,115,22" // orange
          hoverScale={2}
        /> */}
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
