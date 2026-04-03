import '../globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Preloader } from '@/components/Preloader';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "ANU Architects | Top Architecture & Interior Designers Firm in Multan, Pakistan",
  description: "A&U Architects in Multan, Punjab, Pakistan – expert architect, interior designer & custom home builders. Quality construction & design near you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <SpeedInsights />
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
