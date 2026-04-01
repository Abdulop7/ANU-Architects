import articles from "../../articles.json";
import JournalClient from "../../components/journal-client";

export const metadata = {
  title: "Journal | Architecture, Construction & Interior Design Insights in Multan, Pakistan | ANU Architects",
  description: "Explore the latest Journal from ANU Architects, a leading architectural design and construction firm based in Multan, Pakistan. Discover expert insights on modern homes, commercial architecture, luxury interiors, and real estate trends—crafted to inspire, educate, and guide your next design journey with clarity and excellence.",
};

export default function JournalPage() {

  // Server-side sort (GOOD for SEO)
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return <JournalClient articles={sorted} />;
}
