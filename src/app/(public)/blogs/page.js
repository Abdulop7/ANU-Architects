
import BlogsHero from "../../../../components/blogs/hero";
import articlesData from "../../articles.json";
import BlogGrid from "../../../../components/blogs/blog-grid";

export default function BlogsPage() {
      const blogs = articlesData;

  // Server-side sort (GOOD for SEO)
  const sorted = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

    return (
        <div className="w-full bg-white text-gray-900">
            <BlogsHero />
            <BlogGrid blogs={sorted}/>
        </div>
    );
}
