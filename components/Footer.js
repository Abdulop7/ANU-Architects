import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background pt-[2rem]">
      <div className="container-custom pb-[6rem] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 border-b border-white/10">

        {/* Logo Section */}
        <div className="flex flex-col pb-8 justify-between items-start gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.png" width={200} height={100} alt="Anu Architects Logo" className="h-[3.5rem] md:h-[4.5rem] w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-[1.1rem] leading-[1.6] text-secondary max-w-[350px]">
              One-stop total solution to your architectural and interior design needs.
            </p>
          </div>
          <p className="text-[0.875rem] text-secondary">
            &copy; {new Date().getFullYear()} Anu Architects.<br />All rights reserved.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 pb-8 md:grid-cols-4 gap-12 lg:gap-8">

          <div className="flex flex-col gap-6">
            <span className="text-[0.85rem] uppercase tracking-[0.15em] text-primary font-bold">Menu</span>
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-[1rem] text-secondary hover:text-accent transition-colors duration-300">Home</Link>
              <Link href="/about" className="text-[1rem] text-secondary hover:text-accent transition-colors duration-300">About Us</Link>
              <Link href="/projects" className="text-[1rem] text-secondary hover:text-accent transition-colors duration-300">Projects</Link>
              <Link href="/map" className="text-[1rem] text-secondary hover:text-accent transition-colors duration-300">Map</Link>
              <Link href="/contact" className="text-[1rem] text-secondary hover:text-accent transition-colors duration-300">Contact Us</Link>
              <Link href="/login" className="text-[1rem] text-secondary hover:text-accent transition-colors duration-300">Login</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[0.85rem] uppercase tracking-[0.15em] text-primary font-bold">Socials</span>
            <div className="flex flex-col gap-4">
              <Link href="https://www.facebook.com/consultanuarchitect/" className="text-[1rem] text-secondary hover:text-accent transition-colors duration-300">Facebook</Link>
              <Link href="https://www.instagram.com/consultanuarchitect/?hl=en" className="text-[1rem] text-secondary hover:text-accent transition-colors duration-300">Instagram</Link>
              <Link href="https://www.youtube.com/@anuarchitects" className="text-[1rem] text-secondary hover:text-accent transition-colors duration-300">Youtube</Link>
              <Link href="https://wa.me/923066777691?text=Hi%2C%20I%27m%20interested" className="text-[1rem] text-secondary hover:text-accent transition-colors duration-300">Whatsapp</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:col-span-2">
            <span className="text-[0.85rem] uppercase tracking-[0.15em] text-primary font-bold">Inquiries</span>
            <div className="flex flex-col gap-4">
              <span className="text-[1rem] text-secondary leading-relaxed">
                Near Green View Housing Scheme, Multan Public School Road<br />Multan, 60000, Pakistan<br />+92 (306) 677-7691
              </span>
              <Link href="mailto:info.anuarchitects@gmail.com" className="text-[1rem] text-accent hover:text-primary transition-colors duration-300 mt-2">
                info.anuarchitects@gmail.com
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-custom py-6 flex justify-between items-center text-[0.875rem] text-secondary/60">
        <div className="flex gap-8 py-6">
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
        <span>Built with precision.</span>
      </div>
    </footer>
  );
}
