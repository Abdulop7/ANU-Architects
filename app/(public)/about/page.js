import { FadeIn } from '@/components/FadeIn';
import AnimatedNumber from '@/components/AnimatedNumber';
import { Marquee } from '@/components/Marquee';
import Image from 'next/image';

export const metadata = {
    title: "About | Pakistan’s Premier Architectural Design & Construction Company | ANU Architects",
    description: "Discover ANU Architects, a leading firm based in Multan, Pakistan, dedicated to excellence in architectural design, construction, interior design, and real estate development. We create luxury homes and timeless spaces where innovation meets elegance — building dreams across Pakistan.",
};

// Using real SVG images downloaded for the trusted partner logos that highlight on hover
const logoFiles = [
    '/logos/Alfalah.webp',
    '/logos/Allied.webp',
    '/logos/Allied_College.webp',
    '/logos/Bloomfield.webp',
    '/logos/Richeese.webp',
    '/logos/ak.webp',
    '/logos/fm.webp',
    '/logos/kfc.webp',
    '/logos/elclassico.webp',
];

// Configurable Logo Size Values
// Change these exact values to scale the logos up or down easily
const LOGO_CONFIG = {
    imageHeight: '100px',      // Height of the actual logo image
    containerWidth: '300px',  // Width of the invisible box holding the logo (affects spacing between logos)
    containerHeight: '150px'  // Height of the invisible box holding the logo
};


const MarqueeImageLogo = ({ index, name }) => {
    const src = logoFiles[index % logoFiles.length];

    return (
        <div
            className="relative flex items-center justify-center opacity-25 hover:opacity-100 transition-all duration-500 cursor-pointer group"
            style={{ width: LOGO_CONFIG.containerWidth, height: LOGO_CONFIG.imageHeight, margin: '25px 0' }}
        >
            {/* The `brightness-0 invert` filter turns any dark/colored logo completely white to match the theme */}
            <Image
                src={src}
                alt={name || "Client Logo"}
                fill
                sizes="(max-width: 768px) 150px, 300px"
                className="object-contain brightness-0 invert"
            />
        </div>
    );
};

const marqueeItems1 = ["Vercel", "Next.js", "React", "Figma", "Adobe", "Autodesk", "Spotify", "Nike", "Tesla", "Google"].map((name, i) => <MarqueeImageLogo key={`row1-${i}`} index={i} name={name} />);
const marqueeItems2 = ["Tesla", "Google", "Vercel", "Next.js", "React", "Figma", "Adobe", "Autodesk", "Spotify", "Nike"].map((name, i) => <MarqueeImageLogo key={`row2-${i}`} index={i + 8} name={name} />);

export default function AboutPage() {
    return (
        <div className="bg-[#050505] mt-[140px] min-h-screen pb-[8rem]">
            {/* Header */}
            <header className="container-custom pt-[40px] lg:pt-[60px] pb-16 border-b border-white/10 relative overflow-hidden">
                <FadeIn>
                    <span className="text-accent text-[0.85rem] font-bold tracking-[0.2em] uppercase mb-6 block">Our Story</span>
                    <h1 className="font-sans font-black text-6xl md:text-8xl md:max-w-[80%] tracking-tighter text-primary leading-[1.1]">
                        We build spaces<br className="hidden md:block" /> that defy time.
                    </h1>
                </FadeIn>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
            </header>

            {/* Philosophy - Section 01 */}
            <section className="container-custom py-[6rem] lg:py-[9rem] border-b border-white/10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[4rem] lg:gap-[8rem]">
                    <div className="flex flex-col">
                        <span className="font-sans font-black text-6xl md:text-8xl text-accent/20 tracking-tighter mb-4">01 <span className="text-3xl text-white/10 font-medium">/ 06</span></span>
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-primary">Philosophy</h2>
                    </div>

                    <div className="flex flex-col gap-8">
                        <p className="text-[1.5rem] md:text-[2.25rem] leading-[1.4] font-sans font-medium text-primary tracking-tight">
                            Founded in 2016, Anu Architects is a multidisciplinary architecture and design practice that strives to create spaces of enduring value. We believe that true luxury lies in simplicity, exactness, and a profound connection to the surrounding environment.
                        </p>
                        <p className="text-[1.1rem] leading-[1.8] text-secondary max-w-[800px]">
                            Our process is deeply rooted in materiality. We favor raw, honest materials—concrete, untreated timber, natural stone—that age beautifully and tell a story over time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline - Section 02 */}
            <section className="container-custom py-[6rem] lg:py-[9rem] border-b border-white/10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[4rem] lg:gap-[8rem]">
                    <div className="flex flex-col">
                        <span className="font-sans font-black text-6xl md:text-8xl text-accent/20 tracking-tighter mb-4">02 <span className="text-3xl text-white/10 font-medium">/ 06</span></span>
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-primary">Evolution</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        <div className="border-t border-accent pt-8 relative group">
                            <span className="font-sans font-black text-4xl text-primary block mb-4 group-hover:text-accent transition-colors">2016</span>
                            <p className="text-secondary text-[1.1rem] leading-[1.6]">Founded in a small loft in Multan, Pakistan. Establishing the core principles of minimalist intervention.</p>
                        </div>
                        <div className="border-t border-white/20 hover:border-accent pt-8 relative group transition-colors">
                            <span className="font-sans font-black text-4xl text-primary block mb-4 group-hover:text-accent transition-colors">2019</span>
                            <p className="text-secondary text-[1.1rem] leading-[1.6]">Expanded globally with our first major project in Multan, cementing our international presence.</p>
                        </div>
                        <div className="border-t border-white/20 hover:border-accent pt-8 relative group transition-colors">
                            <span className="font-sans font-black text-4xl text-primary block mb-4 group-hover:text-accent transition-colors">2021</span>
                            <p className="text-secondary text-[1.1rem] leading-[1.6]">Official Registration of Firm by Government of Pakistan</p>
                        </div>
                        <div className="border-t border-white/20 hover:border-accent pt-8 relative group transition-colors">
                            <span className="font-sans font-black text-4xl text-primary block mb-4 group-hover:text-accent transition-colors">2024</span>
                            <p className="text-secondary text-[1.1rem] leading-[1.6]">Pioneering new sustainable carbon-neutral building techniques for large-scale urban infrastructure.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership - Section 03 */}
            <section className="container-custom py-[6rem] lg:py-[9rem] border-b border-white/10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[4rem] lg:gap-[8rem] mb-16">
                    <div className="flex flex-col">
                        <span className="font-sans font-black text-6xl md:text-8xl text-accent/20 tracking-tighter mb-4">03 <span className="text-3xl text-white/10 font-medium">/ 06</span></span>
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-primary">Leadership</h2>
                    </div>
                    <div className="flex items-end">
                        <p className="text-secondary leading-[1.8] text-[1.2rem] max-w-[700px]">A tight-knit assembly of visionaries, engineers, and creatives working collectively to push the boundaries of modern spatial design.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    <div className="flex flex-col gap-6 group">
                        <div className="w-full aspect-[3/4] overflow-hidden bg-[#111] relative border border-white/5">
                            <Image src="/team1.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Jane Doe - CEO" className="w-full h-full object-cover grayscale transition-all duration-[1s] group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-sans font-bold text-[1.75rem] text-primary tracking-tight mb-1">AR. M. FAROOQ SIDDIQUI</h3>
                            <span className="text-[0.75rem] uppercase tracking-[0.2em] text-accent font-bold mb-2 block">CEO</span>
                            <p className="text-[1.05rem] leading-[1.6] text-secondary">AFAS (ARCH) MEMBER PCATP.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 group">
                        <div className="w-full aspect-[3/4] overflow-hidden bg-[#111] relative border border-white/5">
                            <Image src="/team3.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="John Smith - Co-Founder" className="w-full h-full object-cover grayscale transition-all duration-[1s] group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-sans font-bold text-[1.75rem] text-primary tracking-tight mb-1">AR. AAKIF NAVEED SADIQ</h3>
                            <span className="text-[0.75rem] uppercase tracking-[0.2em] text-accent font-bold mb-2 block">Pricniple Architect</span>
                            <p className="text-[1.05rem] leading-[1.6] text-secondary">MS. INTERIOR (TURKEY), PHD. ARCH (MALAYSIA) (in process ) , BS. ARCHITECTURE (BNU)</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 group">
                        <div className="w-full aspect-[3/4] overflow-hidden bg-[#111] relative border border-white/5">
                            <Image src="/team2.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Emily Chen - Co-Founder" className="w-full h-full object-cover grayscale transition-all duration-[1s] group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-sans font-bold text-[1.75rem] text-primary tracking-tight mb-1">AR. MUHAMMAD USAMA</h3>
                            <span className="text-[0.75rem] uppercase tracking-[0.2em] text-accent font-bold mb-2 block">Pricniple Architect</span>
                            <p className="text-[1.05rem] leading-[1.6] text-secondary">BS. ARCHITECTURE (BNU), ASSISTANT PROFESSOR ARCHITECTURE (NFC MULTAN)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats & Impact Section - 04 */}
            <section className="container-custom py-[6rem] lg:py-[9rem] border-b border-white/10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[4rem] lg:gap-[8rem] mb-16 lg:mb-24">
                    <div className="flex flex-col">
                        <span className="font-sans font-black text-6xl md:text-8xl text-accent/20 tracking-tighter mb-4">04 <span className="text-3xl text-white/10 font-medium">/ 06</span></span>
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-primary">Impact</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-[#0a0a0a] p-10 lg:p-12 rounded-2xl border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"></div>
                        <div className="flex flex-col gap-2 relative z-10">
                            <span className="font-sans font-black text-6xl lg:text-7xl tracking-tighter text-accent flex items-end">
                                <AnimatedNumber value={20} /><span className="text-5xl font-medium text-accent/80">+</span>
                            </span>
                            <span className="text-[0.85rem] font-bold uppercase tracking-[0.15em] text-primary mt-1">Ongoing Projects</span>
                        </div>
                        <div className="flex flex-col gap-2 relative z-10">
                            <span className="font-sans font-black text-6xl lg:text-7xl tracking-tighter text-accent flex items-end">
                                <AnimatedNumber value={1500} /><span className="text-5xl font-medium text-accent/80">+</span>
                            </span>
                            <span className="text-[0.85rem] font-bold uppercase tracking-[0.15em] text-primary mt-1">Completed Projects</span>
                        </div>
                        <div className="flex flex-col gap-2 relative z-10">
                            <span className="font-sans font-black text-6xl lg:text-7xl tracking-tighter text-accent flex items-end">
                                <AnimatedNumber value={40} /><span className="text-5xl font-medium text-accent/80">+</span>
                            </span>
                            <span className="text-[0.85rem] font-bold uppercase tracking-[0.15em] text-primary mt-1">Trusted Partners</span>
                        </div>
                    </div>
                </div>

                {/* Partner Logos Visual Grid */}
                {/* Marquee & Trusted Companies Section */}
                <section className="bg-[#050505] pt-32 pb-24 overflow-hidden border-t border-white/5">
                    <div className="container-custom mb-24 flex flex-col items-center">
                        <FadeIn>
                            <h2 className="font-sans font-black text-6xl lg:text-8xl tracking-tighter text-white/95 uppercase">Clients</h2>
                        </FadeIn>
                    </div>
                    <div className="flex flex-col ">
                        <Marquee speed={90} reverse={false}>
                            {marqueeItems1}
                        </Marquee>
                        <Marquee speed={85} reverse={true}>
                            {marqueeItems2}
                        </Marquee>
                    </div>
                </section>
            </section>

            {/* Location & Map - Section 06 */}
            <section className="container-custom py-[6rem] lg:py-[9rem] border-t border-white/10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[4rem] lg:gap-[8rem] mb-16 lg:mb-24">
                    <div className="flex flex-col">
                        <span className="font-sans font-black text-6xl md:text-8xl text-accent/20 tracking-tighter mb-4">06 <span className="text-3xl text-white/10 font-medium">/ 06</span></span>
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-primary">Headquarters</h2>
                    </div>
                    <div className="flex items-end">
                        <p className="text-secondary leading-[1.8] text-[1.2rem] max-w-[700px]">Visit our primary design studio in Multan. A space characterized by raw textures and exactness, establishing a collaborative environment for architectural discourse.</p>
                    </div>
                </div>

                <div className="w-full aspect-square md:aspect-[21/9] bg-[#111] border border-white/5 p-2 lg:p-4 relative group overflow-hidden">
                    <div className="w-full h-full relative overflow-hidden bg-[#050505]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.618645222218!2d71.50252061225694!3d30.24794977471667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b35e601584c4b%3A0xf50bae70e807137e!2sANU%20Architects%20(Aakif%20%26%20Usama%20Architects)%20%7C%20Top%20Architecture%20%26%20Interior%20Designer%20Firm%20in%20Multan!5e0!3m2!1sen!2s!4v1773399170938!5m2!1sen!2s"
                            className="w-full h-full border-0 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        {/* Overlay to enforce dark theme / architectural look when not hovered */}
                        <div className="absolute inset-0 bg-black/40 pointer-events-none group-hover:opacity-0 transition-opacity duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
                    </div>
                </div>
            </section>

            {/* Team - Section 05 */}
            <section className="container-custom py-[6rem] lg:py-[9rem] relative">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[4rem] lg:gap-[8rem] mb-16 lg:mb-24">
                    <div className="flex flex-col">
                        <span className="font-sans font-black text-6xl md:text-8xl text-accent/20 tracking-tighter mb-4">05 <span className="text-3xl text-white/10 font-medium">/ 06</span></span>
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-primary">The Studio</h2>
                    </div>
                    <div className="flex items-end">
                        <p className="text-secondary leading-[1.8] text-[1.2rem] max-w-[700px]">The multidisciplinary studio team that drives precision and excellence across all scales of development.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

                    {/* Team Member 8 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team14.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Elena Rostova" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">M. Talha Siddiqui</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Construction Manager</span>
                        </div>
                    </div>

                    {/* Team Member 8 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team16.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Elena Rostova" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">Abdullah Naveed</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">MS. Structure Engineer</span>
                        </div>
                    </div>

                    {/* Team Member 8 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team15.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Elena Rostova" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">Syed Zuhaib Zaidi</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Marketing Head</span>
                        </div>
                    </div>

                    {/* Team Member 1 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team4.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Marcus Volf" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">Shoaib Saeed</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Senior Draftsman</span>
                        </div>
                    </div>

                    {/* Team Member 8 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team12.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Elena Rostova" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">Abdul Saboor</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Web Developer</span>
                        </div>
                    </div>

                    {/* Team Member 8 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team13.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Elena Rostova" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">Adeel</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Senior Site Engineer</span>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team5.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Sarah Jenkins" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">Hamza Ilyas</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Project Architect</span>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team6.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="David Choi" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">Imran Ahmad</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Junior Draftsman</span>
                        </div>
                    </div>

                    {/* Team Member 4 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team7.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Elena Rostova" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">Muhammad Affan</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Interior CAD Operator</span>
                        </div>
                    </div>

                    {/* Team Member 5 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team8.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Elena Rostova" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">Faisal Shareef</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Office Cordinator</span>
                        </div>
                    </div>

                    {/* Team Member 5 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team18.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Elena Rostova" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">M. Ali Haider</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Architect</span>
                        </div>
                    </div>

                    {/* Team Member 5 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team19.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Elena Rostova" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">Zainab Ali</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Architect</span>
                        </div>
                    </div>

                    {/* Team Member 5 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team20.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Elena Rostova" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">M. Arsalan Naeem</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Architect</span>
                        </div>
                    </div>

                    {/* Team Member 6 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team9.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Elena Rostova" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">Muhammad Shakir</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Site Engineer</span>
                        </div>
                    </div>

                    {/* Team Member 7 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team10.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Elena Rostova" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">Ramla</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Interior Designer</span>
                        </div>
                    </div>

                    {/* Team Member 8 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team11.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Elena Rostova" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">Saba</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Building Services Engineer</span>
                        </div>
                    </div>

                    {/* Team Member 8 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-square overflow-hidden bg-[#111] border border-white/5 relative">
                            <Image src="/team17.webp" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Elena Rostova" className="w-full h-full object-cover grayscale transition-transform duration-[1s] group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-[1.15rem] text-primary tracking-tight mb-1">Muhammad Burhan</h3>
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-accent block font-bold">Junior CAD Operator</span>
                        </div>
                    </div>

                </div>
            </section>


        </div>
    );
}
