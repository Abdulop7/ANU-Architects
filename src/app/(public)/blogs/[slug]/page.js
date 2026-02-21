import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import TOC from "../../../../../components/blogs/toc";

/* -----------------------------
   📝 Helpers
----------------------------- */
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* ---------------------------------------------------
   📌 Extract Table of Contents + convert strong -> h2
---------------------------------------------------- */
function extractTOC(html) {
  const strongRegex = /<strong>(.*?)<\/strong>/g;
  const toc = [];
  let match;
  let index = 0;
  let updatedHTML = html;

  while ((match = strongRegex.exec(html)) !== null) {
    const id = `section-${index}`;
    toc.push({ id, title: match[1] });
    updatedHTML = updatedHTML.replace(
      `<strong>${match[1]}</strong>`,
      `<h2 id="${id}">${match[1]}</h2>`
    );
    index++;
  }

  return { toc, updatedHTML };
}

/* -----------------------------
   🌐 Static Paths
----------------------------- */
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "src/app/articles.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return data.map((article) => ({
    slug: slugify(article.title),
  }));
}

/* -----------------------------
   🧠 Dynamic Metadata
----------------------------- */
export async function generateMetadata({ params }) {
  const filePath = path.join(process.cwd(), "src/app/articles.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const article = data.find((a) => slugify(a.title) === params.slug);

  if (!article) {
    return {
      title: "Article Not Found | ANU Architects",
      description: "Requested article does not exist.",
    };
  }

  return {
    title: `${article.title} | ANU Architects`,
    description: article.excerpt || article.title,
    openGraph: {
      title: `${article.title} | ANU Architects`,
      description: article.excerpt || article.title,
      images: [article.cover],
      type: "article",
      url: `https://anuarchitects.com/blogs/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt || article.title,
      images: [article.cover],
    },
    alternates: {
      canonical: `https://anuarchitects.com/blogs/${params.slug}`,
    },
  };
}

/* -----------------------------
   📄 Blog Page Component
----------------------------- */
export default function BlogArticle({ params }) {
  const filePath = path.join(process.cwd(), "src/app/articles.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const article = data.find((a) => slugify(a.title) === params.slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto p-10 text-center text-xl">
        ❌ Article not found.
      </div>
    );
  }

  const { toc, updatedHTML } = extractTOC(article.content);

  return (
    <div className="w-full bg-white pb-24">

      {/* Hero Banner */}
      <section className="relative h-[22vh] w-full overflow-hidden bg-black">
        <Image
          src={article.cover}
          alt={article.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      <div className="max-w-6xl mx-auto px-6 pt-10">

        {/* Back Button */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-6 leading-tight">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-gray-600 text-sm mt-3">
          <Calendar className="w-4 h-4" />
          <p>{new Date(article.date).toLocaleDateString()}</p>
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
            {article.category}
          </span>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-orange-200 via-gray-200 to-orange-200 mt-6" />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-14 mt-10">
          <div>
            <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-xl mb-10">
              <Image
                src={article.cover}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Blog Content */}
            <div
              className="blog-content space-y-10 text-[17px] leading-[1.9] text-gray-800 antialiased"
              dangerouslySetInnerHTML={{ __html: updatedHTML }}
            />

            {/* CTA Box */}
            <div className="mt-16 relative p-10 bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-3xl shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1 bg-orange-600 rounded-full"></div>
              <h3 className="text-3xl font-extrabold mb-4 text-gray-900 tracking-wide">
                Need Architectural or Interior Design Help?
              </h3>
              <p className="text-gray-700 mb-6 text-[16px] leading-7">
                ANU Architects provides complete residential & commercial architecture, interior design, construction, and 3D visualization services.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-orange-600 text-white font-semibold rounded-2xl shadow-md hover:bg-orange-700 transition-all transform hover:-translate-y-1 hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>

            {/* JSON-LD Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  headline: article.title,
                  image: [article.cover],
                  author: { "@type": "Organization", name: "ANU Architects" },
                  publisher: { "@type": "Organization", name: "ANU Architects" },
                  datePublished: article.date,
                  description: article.excerpt || article.title,
                  url: `https://anuarchitects.com/blogs/${params.slug}`,
                }),
              }}
            />
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 sticky top-24 self-start">
            {toc.length > 0 && <TOC toc={toc} navbarHeight={200} />}
          </aside>
        </div>
      </div>
    </div>
  );
}