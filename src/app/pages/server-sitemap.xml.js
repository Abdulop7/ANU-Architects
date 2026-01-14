import { getServerSideSitemap } from "next-sitemap";
import blogs from "../articles.json";
import projects from "../projects.json";

// Your slugify function
function slugify(title, id) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") + "-" + id
  );
}

export const getServerSideProps = async (ctx) => {

  const blogFields = blogs.map((blog) => ({
    loc: `https://www.anuarchitect.com/blogs/${slugify(blog.title, blog.id)}`,
    lastmod: new Date().toISOString(),
  }));

  const projectFields = projects.map((project) => ({
    loc: `https://www.anuarchitect.com/projects/${slugify(project.title, project.id)}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, [...blogFields, ...projectFields]);
};

export default function Sitemap() {}
