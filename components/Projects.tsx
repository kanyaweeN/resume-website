import { SectionTitle } from "./About";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product management, cart, payment integration (Stripe), and order tracking. Built with Next.js and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    emoji: "🛒",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Task Management App",
    description:
      "A Kanban-style project management tool with real-time collaboration, drag-and-drop, and team permissions. Powered by WebSockets.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    emoji: "📋",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "AI Content Generator",
    description:
      "A SaaS tool that uses Claude API to generate marketing copy, blog posts, and social media content. Includes usage analytics dashboard.",
    tags: ["Next.js", "Claude API", "Prisma", "Tailwind"],
    emoji: "🤖",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Real-time Dashboard",
    description:
      "An analytics dashboard with live data visualization using Chart.js and WebSocket connections for monitoring server metrics.",
    tags: ["React", "Chart.js", "WebSocket", "Express"],
    emoji: "📊",
    color: "from-blue-500 to-cyan-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Projects" subtitle="Things I've built" />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-400 dark:hover:border-gray-600 transition-all hover:-translate-y-1 group shadow-sm"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{project.emoji}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2.5 py-1 rounded-full"
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
    </section>
  );
}
