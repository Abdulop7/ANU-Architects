import '../globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Maintenance from '@/components/Maintenance';
import { Preloader } from '@/components/Preloader';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata = {
  title: "ANU Architects | Top Architecture & Interior Designers Firm in Multan, Pakistan",
  description: "A&U Architects in Multan, Punjab, Pakistan – expert architect, interior designer & custom home builders. Quality construction & design near you.",
};

let maintainance = false;

export default function RootLayout({ children }) {
  if (maintainance === true) {
    return (
      <html lang="en" className="dark">
        <body>
          <Maintenance />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <meta name="google-site-verification" content="G663YRr5zvrrlWXzX_urThC-SkBnuU-baUpd85CG5zw" />
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
