
import BlogsHero from "../../../../components/blogs/hero";
import articlesData from "../../articles.json";
import BlogGrid from "../../../../components/blogs/blog-grid";


export const metadata = {
  title: "Blogs | Architecture, Construction & Interior Design Insights in Multan, Pakistan | ANU Architects",
  description: "Explore the latest blogs from ANU Architects, a leading architectural design and construction firm based in Multan, Pakistan. Discover expert insights on modern homes, commercial architecture, luxury interiors, and real estate trends—crafted to inspire, educate, and guide your next design journey with clarity and excellence.",
};


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
