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
      <main className="container-custom pt-[4rem] lg:pt-[8rem] flex justify-center">
        <article className="w-full max-w-4xl">
          <FadeIn delay={0.2} y={20}>
            {/* The HTML Content Box */}
            <div
              className="
                text-secondary font-sans leading-[1.8] text-[1.05rem] md:text-[1.15rem]
                [&>p]:mb-8 
                [&>p>strong]:text-primary [&>p>strong]:font-bold [&>p>strong]:text-[1.2rem] [&>p>strong]:block [&>p>strong]:mt-10 [&>p>strong]:mb-4
                [&>p>u]:text-accent [&>p>u]:no-underline [&>p>u]:border-b [&>p>u]:border-accent/30 [&>p>u]:font-bold [&>p>u]:tracking-wide
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-2
                [&>br]:hidden
              "
              dangerouslySetInnerHTML={{ __html: article.content.replace(/<br><br>/g, "</p><p>") }}
            />
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
