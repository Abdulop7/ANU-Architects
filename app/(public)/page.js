import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer';
import { TextReveal } from '@/components/TextReveal';
import { ArchitecturalHero } from '@/components/ArchitecturalHero';
import { Marquee } from '@/components/Marquee';
import { SocialSection } from '@/components/SocialSection';


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

const marqueeItems1 = logoFiles.map((_, i) => <MarqueeImageLogo key={`row1-${i}`} index={i} />);
const marqueeItems2 = [...logoFiles].reverse().map((_, i) => <MarqueeImageLogo key={`row2-${i}`} index={logoFiles.length - 1 - i} />);

const services = [
  { id: "01", title: "Architecture", desc: "We design buildings from the inside out, ensuring every form follows a profound function. Our architectural process is an exploration of context, culture, and climate." },
  { id: "02", title: "Interior Design", desc: "The soul of a building lives within. We curate spaces with an obsessive attention to materiality, light, and tactile experience, creating environments that comfort and inspire." },
  { id: "03", title: "Masterplanning", desc: "For large-scale interventions, we look at the macro ecosystem. Our urban strategies aim to foster community, sustainability, and resilient growth for future generations." }
];

const featuredProjects = [
  { id: 1, title: 'ZIA UL ULOOM UNIVERSITY', category: 'Educational', image: '/projects/Zia_Ul_Uloom_University/1.webp' },
  { id: 2, title: 'JAMIA KHAIR-UL-MADARIS', category: 'Relegious', image: '/projects/Jamia_Khair_Ul_Madaris/1.webp' },
];

export default function Home() {
  return (
    <div>
      <ArchitecturalHero />

      {/* Philosophy Section - Split Pane Style */}
      <section className="bg-background border-t border-border mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-16 lg:p-[8rem] flex justify-center items-center bg-[#0a0a0a]">
            <div className="relative w-48 h-48 lg:w-64 lg:h-64 flex justify-center items-center">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
              <div className="grid grid-cols-2 gap-2 relative z-10 animate-[spin_20s_linear_infinite]">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-accent rounded-tl-[3rem] rounded-br-[3rem]"></div>
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-accent rounded-tr-[3rem] rounded-bl-[3rem]"></div>
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-accent rounded-tr-[3rem] rounded-bl-[3rem]"></div>
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-accent rounded-tl-[3rem] rounded-br-[3rem]"></div>
              </div>
            </div>
          </div>
          <div className="p-10 lg:p-[8rem] flex flex-col justify-center border-l border-border">
            <span className="text-accent font-bold tracking-[0.2em] uppercase mb-8">Comprehensive Design</span>
            <TextReveal className="font-sans font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-tight text-primary mb-8">
              One-stop total solution to your architectural needs.
            </TextReveal>
            <p className="text-secondary text-[1.1rem] leading-relaxed max-w-[500px]">
              Our goal is to make sure every project meets its intended function, budget, design, and quality requirements through a seamless build process.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section with Massive Numbers */}
      <section className="bg-[#050505] border-t border-border section-padding">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-x-12 lg:gap-x-20">
            {services.map((service, index) => (
              <StaggerItem key={index} className="flex flex-col group cursor-default">
                <span className="text-accent/20 group-hover:text-accent font-black text-8xl tracking-tighter transition-colors duration-500 mb-6">{service.id}</span>
                <h3 className="font-sans text-2xl font-bold mb-4 tracking-tight text-primary">{service.title}</h3>
                <p className="text-secondary leading-[1.7] text-[1.05rem]">{service.desc}</p>
                <div className="w-0 h-[2px] bg-accent mt-8 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Selected Works - Wide Grid */}
      <section className="bg-background pt-[8rem]">
        <div className="container-custom">
          <FadeIn>
            <div className="flex justify-between items-end mb-16 border-b border-border pb-8">
              <div>
                <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block">Portfolio</span>
                <h2 className="font-sans font-black text-5xl tracking-tight">Selected Works</h2>
              </div>
              <Link href="/projects" className="text-[0.875rem] uppercase tracking-[0.1em] font-medium text-accent hover:text-primary transition-colors flex items-center gap-2">
                View All <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id} className="flex flex-col gap-6 cursor-pointer group">
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-[#111]">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <h3 className="font-sans text-2xl font-bold text-primary tracking-tight">{project.title}</h3>
                  <span className="text-[0.75rem] text-accent font-bold uppercase tracking-[0.1em] bg-accent/10 px-3 py-1 rounded-sm">{project.category}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Recognition/Awards Section */}
      <section className="bg-background section-padding mt-16 pb-32">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <FadeIn delay={0.2} className="lg:max-w-md">
              <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block">Accolades</span>
              <h2 className="font-sans font-black text-5xl tracking-tight mb-6">Recognition</h2>
              <p className="text-secondary leading-[1.7] text-[1.1rem]">Our commitment to spatial excellence has been recognized by leading architectural institutions and design councils worldwide.</p>
            </FadeIn>

            <StaggerContainer className="flex-1 lg:max-w-[800px] flex flex-col border-t border-border mt-8 lg:mt-0">
              <StaggerItem className="grid grid-cols-[100px_1fr] lg:grid-cols-[100px_1fr_1fr] py-8 border-b border-border items-center gap-4 lg:gap-0 hover:bg-[#111] transition-colors px-4 -mx-4 group">
                <span className="font-sans font-bold text-accent">2025</span>
                <span className="font-sans font-bold text-[1.25rem] text-primary group-hover:translate-x-2 transition-transform">Performance Award – Construction Excellence</span>
                <span className="col-span-2 lg:col-span-1 text-left lg:text-right text-secondary uppercase tracking-[0.1em] text-[0.85rem]">Jamia Khair Ul Madaris - Pakistan</span>
              </StaggerItem>
              <StaggerItem className="grid grid-cols-[100px_1fr] lg:grid-cols-[100px_1fr_1fr] py-8 border-b border-border items-center gap-4 lg:gap-0 hover:bg-[#111] transition-colors px-4 -mx-4 group">
                <span className="font-sans font-bold text-accent">2021</span>
                <span className="font-sans font-bold text-[1.25rem] text-primary group-hover:translate-x-2 transition-transform">A-1 Category Firm Registration</span>
                <span className="col-span-2 lg:col-span-1 text-left lg:text-right text-secondary uppercase tracking-[0.1em] text-[0.85rem]">Pakistan Council of Architects and Town Planners (PCATP)</span>
              </StaggerItem>
              <StaggerItem className="grid grid-cols-[100px_1fr] lg:grid-cols-[100px_1fr_1fr] py-8 border-b border-border items-center gap-4 lg:gap-0 hover:bg-[#111] transition-colors px-4 -mx-4 group">
                <span className="font-sans font-bold text-accent">2021</span>
                <span className="font-sans font-bold text-[1.25rem] text-primary group-hover:translate-x-2 transition-transform">Registered Firm (Official Registration)</span>
                <span className="col-span-2 lg:col-span-1 text-left lg:text-right text-secondary uppercase tracking-[0.1em] text-[0.85rem]">Government of Pakistan</span>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

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

      {/* Social Links & Feed Section
      <SocialSection /> */}

      {/* CTA Section */}
      <section className="bg-background py-[10rem] lg:py-[14rem] border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <FadeIn>
            <h2 className="font-sans font-black text-[clamp(4rem,7vw,7rem)] tracking-tighter text-primary leading-[1] mb-8">
              Ready to build<br />something <span className="text-accent">extraordinary?</span>
            </h2>
            <p className="text-secondary text-[1.25rem] leading-[1.8] max-w-[650px] mx-auto mb-12">
              Whether it is a cultural landmark, a commercial headquarters, or a bespoke private residence, we bring visionary ideas to reality. Let's start the conversation.
            </p>
            <Link href="/contact" className="group relative inline-flex items-center justify-between gap-12 border border-white/20 hover:border-accent bg-transparent px-8 py-5 transition-all duration-500 w-full sm:w-auto">
              <div className="absolute inset-0 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
              <span className="relative z-10 font-sans font-bold text-[0.85rem] uppercase tracking-[0.2em] text-primary group-hover:text-[#050505] transition-colors duration-300">Start a Project</span>
              <span className="relative z-10 flex items-center justify-center w-10 h-10 border border-white/20 group-hover:border-[#050505]/30 rounded-full transition-colors duration-300 group-hover:text-[#050505]">
                <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}

