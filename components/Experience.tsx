import { SectionTitle } from "./About";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Company Ltd.",
    period: "2023 – Present",
    description:
      "Led the development of a large-scale SaaS platform using React and Next.js. Improved page load performance by 40% and mentored a team of 3 junior developers.",
    tags: ["React", "Next.js", "TypeScript", "AWS"],
  },
  {
    role: "Full-Stack Developer",
    company: "Startup Co.",
    period: "2021 – 2023",
    description:
      "Built end-to-end features for an e-commerce platform. Developed RESTful APIs with Node.js and integrated third-party payment gateways.",
    tags: ["Node.js", "PostgreSQL", "Vue.js", "Docker"],
  },
  {
    role: "Junior Web Developer",
    company: "Agency XYZ",
    period: "2020 – 2021",
    description:
      "Developed responsive websites for various clients. Collaborated with designers to translate Figma mockups into pixel-perfect interfaces.",
    tags: ["HTML/CSS", "JavaScript", "WordPress", "PHP"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Experience" subtitle="My journey" />

        <div className="mt-16 relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-24">
                <div className="absolute left-[-5px] md:left-[27px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-white dark:border-gray-950" />

                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-colors shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      <p className="text-indigo-500 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800/50 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
