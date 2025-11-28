import fs from "fs";
import path from "path";
import Image from "next/image";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import TOC from "../../../../../components/blogs/toc";

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
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
    },
  };
}



// Define the function
function scrollToSection(id) {
  const navbarHeight = 80; // height of your navbar in px
  const element = document.getElementById(id);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}


/* ---------------------------------------------------
   📌 Extract Table of Contents + auto-assign IDs
---------------------------------------------------- */
function extractTOC(html) {
  const strongRegex = /<strong>(.*?)<\/strong>/g;
  const toc = [];
  let match;
  let index = 0;

  while ((match = strongRegex.exec(html)) !== null) {
    toc.push({
      id: `section-${index}`,
      title: match[1],
    });
    index++;
  }

  let updatedHTML = html;
  toc.forEach((item) => {
    updatedHTML = updatedHTML.replace(
      `<strong>${item.title}</strong>`,
      `<strong id="${item.id}">${item.title}</strong>`
    );
  });

  return { toc, updatedHTML };
}

/* -----------------------------
   📄 Blog Article Page
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

      {/* Hero Banner (same position, new style) */}
      <section className="relative h-[22vh] w-full overflow-hidden bg-black">
        <Image
          src={article.cover}
          alt={article.title}
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      {/* Main Container */}
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

        {/* Soft Divider */}
        <div className="h-px w-full bg-gradient-to-r from-orange-200 via-gray-200 to-orange-200 mt-6" />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-14 mt-10">

          {/* LEFT CONTENT */}
          <div>
            {/* Main Image */}
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
              className="
    blog-content space-y-10 text-[17px] leading-[1.9] text-gray-800 antialiased

    /* Strong Titles — minimal, clean, only strong tag */
    [&_strong]:block
    [&_strong]:text-[26px]
    [&_strong]:font-bold
    [&_strong]:text-gray-900
    [&_strong]:tracking-wide
    [&_strong]:leading-tight
    [&_strong]:relative
    [&_strong]:pl-4
    [&_strong]:before:absolute
    [&_strong]:before:left-0
    [&_strong]:before:top-1
    [&_strong]:before:h-full
    [&_strong]:before:w-[3px]
    [&_strong]:before:bg-orange-600
    [&_strong]:before:rounded-full
  "
              dangerouslySetInnerHTML={{ __html: updatedHTML }}
            />




            {/* CTA Box */}
            <div className="mt-16 relative p-10 bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-3xl shadow-lg overflow-hidden">
              {/* Accent Bar */}
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

              {/* Decorative Dots / Shapes */}
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-orange-200 rounded-full opacity-30 animate-pulse"></div>
            </div>

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-8 sticky top-24 self-start">

            {/* TOC */}
            {toc.length > 0 && <TOC toc={toc} navbarHeight={200} />}

          </aside>
        </div>

      </div>
    </div>
  );
}
