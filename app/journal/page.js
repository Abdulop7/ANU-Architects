import articles from "../../articles.json";
import JournalClient from "../../components/journal-client";

export const metadata = {
  title: "Journal | Anu Architects",
  description: "Insights, perspectives, and publications on modern architecture and design.",
};

export default function JournalPage() {

  // Server-side sort (GOOD for SEO)
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return <JournalClient articles={sorted} />;
}
