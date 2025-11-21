import fs from "fs";
import path from "path";
import Image from "next/image";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* -----------------------------
   ✅ Dynamic Metadata Generator
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

/* -----------------------------
   📄  Article Page Component
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

  return (
    <div className="w-full bg-white">

      <section className="relative h-[20vh] w-full bg-gradient-to-br from-black to-orange-600 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('${article.cover}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>
      </div>

      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black text-gray-900">
          {article.title}
        </h1>

        {/* Meta Row */}
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <Calendar className="w-4 h-4" />
          <p>{new Date(article.date).toLocaleDateString()}</p>
          <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
            {article.category}
          </span>
        </div>

        {/* Main Image */}
        <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-md">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>

      </div>
    </div>
  );
}
