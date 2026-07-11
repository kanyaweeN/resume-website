export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 dark:bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-indigo-500 text-sm font-semibold tracking-widest uppercase mb-4">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
          Your Name
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Full-Stack Developer
          </span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I build modern, fast, and beautiful web applications. Passionate about clean code,
          great UX, and solving real problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-300 dark:border-gray-600 hover:border-indigo-500 hover:text-indigo-500 rounded-full font-semibold transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-20 animate-bounce text-gray-400">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
