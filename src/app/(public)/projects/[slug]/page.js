import projects from "../../../projects.json";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

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

export function generateMetadata({ params }) {
  const project = projects.find((p) => slugify(p.title, p.id) === params.slug);

  if (!project) return {};

  return {
    title: `${project.title} | ANU Architects`,
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

export default function ProjectPage({ params }) {
  const project = projects.find(
    (p) => slugify(p.title, p.id) === params.slug
  );

  if (!project) return notFound();


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <header className="relative h-[40vh] w-full overflow-hidden bg-black">
        <Image
          src={project.preview}
          alt={project.title}
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4">
            {project.title}
          </h1>
          <p className="text-orange-300 text-lg md:text-xl flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" /> {project.location}
          </p>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={img.url}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <aside className="p-6 bg-white shadow-xl rounded-2xl h-fit border border-gray-200 sticky top-30">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Details</h2>

            <div className="space-y-6 text-gray-700">

              {/* Year */}
              <div className="flex items-center gap-3">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold shadow-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </span>
              </div>

              {/* Soft Divider */}
              <div className="h-px w-full bg-gradient-to-r from-orange-200/50 via-gray-200 to-orange-200/50" />

              {/* Description */}
              <p className="text-base leading-relaxed text-gray-700">
                {project.description}
              </p>

              {/* Category */}
              <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                {project.category}
              </span>

            </div>

          </aside>
        </div>
      </main>
    </div>
  );
}
