import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Preloader } from '@/components/Preloader';

export const metadata = {
  title: 'Anu Architects | Minimalist Design',
  description: 'A premium, minimalist architecture portfolio.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
