
import ProjectsHero from "../../../../components/projects/hero";
import { ProjectsSection } from "../../../../components/projects/projects-section";



export const metadata = {
  title: "Projects | Residential & Commercial Architecture in Multan, Pakistan | ANU Architects",
  description: "Explore the complete project portfolio of ANU Architects, a leading architectural design and construction firm based in Multan, Pakistan. Discover our modern homes, commercial buildings, luxury interiors, and real estate developments—crafted with innovation, precision, and timeless design excellence.",
};


export default function ProjectsPage() {

  return (
    <div className="w-full bg-white text-gray-900">
      <ProjectsHero />
      <ProjectsSection />

    </div>
  );
}
