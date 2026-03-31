import projects from "../../../projects.json";
import { MapPin, Calendar, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

function slugify(title, id) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") +
    "-" +
    id
  );
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => slugify(p.title, p.id) === resolvedParams.slug);

  if (!project) return {};

  return {
    title: `${project.title} | Anu Architects`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.preview],
    },
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: slugify(p.title, p.id),
  }));
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find(
    (p) => slugify(p.title, p.id) === resolvedParams.slug
  );

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-[#050505] text-primary pb-[8rem]">
      {/* Header/Hero Section */}
      <header className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-[#0a0a0a] border-b border-white/10">
        <img
          src={project.preview}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

        {/* Navigation Back */}
        <div className="absolute top-[100px] left-6 md:left-12 z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>

        <div className="absolute bottom-12 left-6 md:left-12 max-w-5xl z-10 text-left">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
                {project.category}
              </span>
              {project.subcategory && (
                <span className="inline-block px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] border border-white/10" style={{ backgroundColor: "rgba(255, 122, 0, 0.1)", color: "#FF7A00" }}>
                  {project.subcategory}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-primary leading-[1.1] mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              {project.title.toUpperCase()}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-[0.75rem] md:text-[0.85rem] font-bold uppercase tracking-[0.15em] text-secondary">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" /> {project.location}
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" /> {project.year}
              </p>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="container-custom pt-[4rem] lg:pt-[8rem]">
        <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-[4rem] lg:gap-[6rem] items-start">

          {/* Images Grid */}
          <div className="space-y-[4rem] lg:space-y-[6rem]">
            {project.images.map((img, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative w-full aspect-[4/3] md:aspect-video bg-[#111] overflow-hidden border border-white/5 group">
                  <img
                    src={img.url}
                    alt={`${project.title} gallery image ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover  transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-80 group-hover:opacity-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-white/10 transition-colors duration-500 pointer-events-none" />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Sticky Details Sidebar */}
          <aside className="sticky top-[140px] border border-white/10 bg-[#0a0a0a] p-8 md:p-10 flex flex-col gap-10">
            <FadeIn delay={0.2} y={20}>
              <div>
                <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-accent mb-6">Overview</h2>
                <div className="h-px w-full bg-white/10 mb-8" />
                <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.8] text-secondary font-sans mb-10">
                  {project.description}
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-accent mb-4">Specifications</h3>

                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col border-b border-white/5 pb-4">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary mb-1">Category</span>
                    <span className="font-bold text-primary text-[0.9rem] md:text-[1rem] tracking-wide uppercase">{project.category}</span>
                  </div>

                  {project.subcategory && (
                    <div className="flex flex-col border-b border-white/5 pb-4">
                      <span className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary mb-1">Type</span>
                      <span className="font-bold text-primary text-[0.9rem] md:text-[1rem] tracking-wide uppercase">{project.subcategory}</span>
                    </div>
                  )}

                  <div className="flex flex-col border-b border-white/5 pb-4">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary mb-1">Location</span>
                    <span className="font-bold text-primary text-[0.9rem] md:text-[1rem] tracking-wide uppercase">{project.location}</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary mb-1">Completed</span>
                    <span className="font-bold text-primary text-[0.9rem] md:text-[1rem] tracking-wide uppercase">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Call to action connecting to contact */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <Link href="/contact" className="group flex items-center justify-between border border-white/20 py-4 px-6 uppercase tracking-[0.15em] text-[0.75rem] md:text-[0.85rem] font-bold text-primary transition-all duration-500 hover:bg-accent hover:border-accent hover:text-background w-full">
                  <span>Similar Project</span>
                  <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                </Link>
              </div>
            </FadeIn>
          </aside>
        </div>
      </main>
    </div>
  );
}
