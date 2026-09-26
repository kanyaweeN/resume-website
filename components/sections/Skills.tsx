import { SectionTitle } from "@/components/ui";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "NestJS", "Python", "REST API"],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma"],
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    skills: ["Docker", "Git", "GitHub Actions", "AWS", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="My Skills" subtitle="What I work with" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-colors group shadow-sm"
            >
              <div className="text-3xl mb-3">{group.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-500 transition-colors">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
