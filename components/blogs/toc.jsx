"use client";

export default function TOC({ toc, navbarHeight = 200 }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = navbarHeight; // space for navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        Table of Contents
      </h3>
      <ul className="space-y-3 text-sm">
        {toc.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:text-orange-600 transition text-left w-full"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
