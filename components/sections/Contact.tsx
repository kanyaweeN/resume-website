"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/ui";

const contactInfo = [
  { icon: "✉️", label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/yourname", href: "#" },
  { icon: "🐙", label: "GitHub", value: "github.com/yourname", href: "#" },
  { icon: "📍", label: "Location", value: "Bangkok, Thailand", href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Contact" subtitle="Get in touch" />

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let&apos;s work together</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              I&apos;m currently open to new opportunities. Whether you have a project in mind,
              a question, or just want to say hi — my inbox is always open!
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition-colors text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
                <span className="text-5xl mb-4">🎉</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 space-y-5 shadow-sm">
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
}
