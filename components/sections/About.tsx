import { SectionTitle } from "@/components/ui";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies", value: "15+" },
  { label: "Happy Clients", value: "10+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="About Me" subtitle="Get to know me" />

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl rotate-6 opacity-20 dark:opacity-30" />
              <div className="relative w-full h-full bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <span className="text-8xl">👨‍💻</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              A passionate developer based in Bangkok, Thailand
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              I&apos;m a full-stack developer with a strong focus on building scalable web applications.
              I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to
              open-source projects, or enjoying a good cup of coffee.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 text-center">
                  <div className="text-3xl font-extrabold text-indigo-500">{s.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
