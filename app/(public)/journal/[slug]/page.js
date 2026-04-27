import Image from "next/image";
import articles from "@/articles.json";
import { ArrowLeft, Calendar, User } from "lucide-react";
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
  const article = articles.find((a) => slugify(a.title, a.id) === resolvedParams.slug);

  if (!article) return {};

  return {
    title: `${article.title} | Journal | ANU Architects`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.cover],
    },
  };
}

export function generateStaticParams() {
  return articles.map((a) => ({
    slug: slugify(a.title, a.id),
  }));
}

export default async function JournalArticlePage({ params }) {
  const resolvedParams = await params;
  const article = articles.find(
    (a) => slugify(a.title, a.id) === resolvedParams.slug
  );

  if (!article) return notFound();

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-accent selection:text-white pb-24">
      {/* Hero Section */}
      <header className="relative w-full h-[60vh] md:h-[70vh] flex items-end pb-[4rem] lg:pb-[6rem] border-b border-white/10 overflow-hidden pt-[100px]">
        {/* Cover Image Background */}
        <Image
          src={article.cover}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-luminosity grayscale transition-all duration-1000 hover:grayscale-0 hover:opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />

        {/* Navigation Back */}
        <div className="absolute top-[100px] left-6 md:left-12 z-10">
          <Link href="/journal" className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </Link>
        </div>

        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary">
                <Calendar className="w-3 h-3 text-accent" />
                {new Date(article.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>

            <h1
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-primary leading-[1.1]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {article.title}
            </h1>
          </FadeIn>
        </div>
      </header>

      {/* Main Content Article */}
      <main className="w-full pt-[4rem] lg:pt-[8rem] overflow-x-hidden">
        <article className="w-full px-4 md:px-12 lg:px-24 pb-32">
          <FadeIn delay={0.2} y={20}>
            {article.content.replace(/<br><br>/g, "</p><p>").split(/(?=<strong>|<p><strong>)/).map((section, idx) => {
              const shouldInjectImage = idx > 0 && idx % 2 === 0;
              const imageIndex = Math.floor(idx / 2) - 1;
              const imageUrl = shouldInjectImage && article.images && article.images[imageIndex];

              // Alternate text placement in grid for brutalist layout
              const textAlignmentClass = idx % 2 === 0 ? "mr-auto" : "ml-auto";

              return (
                <div key={idx} className="w-full mb-16 md:mb-32">
                  <div
                    className={`max-w-6xl ${textAlignmentClass}
                      text-secondary/90 font-sans leading-[1.8] md:leading-[2] text-[1.2rem] md:text-[1.8rem]
                      [&>p]:mb-12 
                      [&>strong]:text-primary [&>strong]:font-black [&>strong]:text-[2.5rem] md:[&>strong]:text-[4.5rem] [&>strong]:block [&>strong]:mb-12 [&>strong]:mt-16 [&>strong]:leading-[1.1] [&>strong]:font-['Syne',sans-serif] [&>strong]:uppercase [&>strong]:tracking-tight
                      [&>p>strong]:text-primary [&>p>strong]:font-black [&>p>strong]:text-[2.5rem] md:[&>p>strong]:text-[4.5rem] [&>p>strong]:block [&>p>strong]:mb-12 [&>p>strong]:mt-16 [&>p>strong]:leading-[1.1] [&>p>strong]:font-['Syne',sans-serif] [&>p>strong]:uppercase [&>p>strong]:tracking-tight
                      [&>u]:text-accent [&>u]:no-underline [&>u]:border-b-4 [&>u]:border-accent/30 [&>u]:font-bold [&>u]:tracking-wide
                      [&>a]:text-accent [&>a]:font-bold [&>a]:underline [&>a]:underline-offset-8 hover:[&>a]:text-white hover:[&>a]:bg-accent transition-all duration-300 px-2 py-1
                      [&>ul]:list-disc [&>ul]:pl-8 [&>ul]:mb-12 [&>ul>li]:mb-6
                      [&>br]:hidden
                    `}
                    dangerouslySetInnerHTML={{ __html: section }}
                  />
                  {imageUrl && (
                    <div className="relative w-screen -ml-4 md:-ml-12 lg:-ml-24 h-[50vh] md:h-[85vh] mt-16 mb-16 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                      <Image 
                         src={imageUrl} 
                         alt={`${article.title} visual ${imageIndex + 1}`} 
                         fill 
                         className="object-cover scale-105 hover:scale-100 transition-transform duration-[3s] ease-out"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </FadeIn>
        </article>
      </main>

      {/* End of article visual separator */}
      <div className="container-custom mt-20 pt-10 border-t border-white/10 text-center">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary mb-4">Share this insight</p>
        <div className="flex items-center justify-center gap-4">
          <span className="cursor-pointer px-6 py-3 border border-white/10 hover:border-accent hover:text-accent transition-colors text-[0.7rem] uppercase tracking-widest font-bold">Facebook</span>
          <span className="cursor-pointer px-6 py-3 border border-white/10 hover:border-accent hover:text-accent transition-colors text-[0.7rem] uppercase tracking-widest font-bold">Twitter</span>
          <span className="cursor-pointer px-6 py-3 border border-white/10 hover:border-accent hover:text-accent transition-colors text-[0.7rem] uppercase tracking-widest font-bold">LinkedIn</span>
        </div>
      </div>
    </div>
  );
}
