import Link from "next/link";

export default function SkillsSection() {
  const languages = [
    "HTML5",
    "CSS",
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "MySQL",
    "PostgreSQL",
  ];

  const frameworks = [
    "ReactJS",
    "VueJS",
    "NextJS",
    "NodeJS",
    "ExpressJS",
    "Bootstrap",
    "TailwindCSS",
    "Flask",
    "AWS",
    "Git/Github",
  ];

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Skills & Tools
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Technologies and tools I use to build amazing digital experiences
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Languages Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 bg-amber-50 text-amber-900 rounded-lg font-medium border border-amber-200"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks/Libraries/Tools Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Frameworks / Libraries / Tools</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {frameworks.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-amber-50 text-amber-900 rounded-lg font-medium border border-amber-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* View My Projects Button */}
      <div className="flex justify-end mt-12">
        <Link href="/projects" className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-amber-800 text-amber-900 font-medium hover:bg-amber-800 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          View My Projects
        </Link>
      </div>
    </section>
  );
}
