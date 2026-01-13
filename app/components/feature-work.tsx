import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

const projects = [
  {
    title: "MedicoConnect",
    subtitle: "Healthcare Management Platform",
    description: "A comprehensive full-stack system connecting patients and providers. Built with a focus on real-time interaction through an AI medical chatbot and secure JWT-based health record management.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/diwasbk/MediConnect",
    github: "https://github.com/diwasbk/MediConnect",
    image: "/images/medico-bg.jpg", // Placeholder for project screenshot
    featured: true
  },
  {
    title: "LuminaX AI",
    subtitle: "Next-Gen Chat Interface",
    description: "A modern AI workspace leveraging the Google Gemini API. Features include streaming responses, markdown rendering, and a sleek dark-mode UI designed for high readability.",
    tech: ["React", "TailwindCSS", "Node.js", "Gemini API"],
    link: "https://luminax-ai-diwas.onrender.com/",
    github: "https://github.com/diwasbk/LuminaX-Frontend",
    image: "/images/luminax-bg.jpg",
    featured: true
  },
  {
    title: "Blog App API",
    subtitle: "Backend Infrastructure",
    description: "RESTful architecture featuring complex MongoDB relationships, bcrypt password hashing, and secure middleware for social-media functionality like post likes and user profiles.",
    tech: ["Node.js", "Express", "Mongoose", "Postman"],
    link: "https://github.com/diwasbk/Blog-App-Backend",
    github: "https://github.com/diwasbk/Blog-App-Backend",
    featured: false
  },
  {
    title: "Skill Connect",
    subtitle: "Skill-Sharing API",
    description: "API for peer-to-peer knowledge exchange. Handles ticket management systems, reviews, and secure file uploads for professional portfolios.",
    tech: ["Node.js", "Express", "JWT", "Multer"],
    link: "https://github.com/diwasbk/SkillConnect",
    github: "https://github.com/diwasbk/SkillConnect",
    featured: false
  },
  {
    title: "Open User Profile",
    subtitle: "CRUD Dashboard",
    description: "A streamlined user management system with instant UI feedback via toast notifications and a fully responsive interface.",
    tech: ["React", "Express.js", "Tailwind", "Toastify"],
    link: "https://openuserprofile.onrender.com/",
    github: "https://github.com/diwasbk",
    featured: false
  }
];

export default function FeaturedWork() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 pb-20 selection:bg-blue-500/30">
      <header className="px-8 pt-12 pb-20 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Featured <span className="text-blue-500">Work</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          A collection of full-stack applications and APIs focused on security,
          scalability, and user experience.
        </p>
      </header>

      <main className="px-8 max-w-7xl mx-auto space-y-24">

        {/* FEATURED PROJECTS (LARGE CARDS) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.filter(p => p.featured).map((project, i) => (
            <div key={i} className="group relative bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all duration-500">
              <div className="p-8 lg:p-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-widest bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <Link href={project.link} className="px-6 py-3 bg-blue-500 text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all">
                    Live Demo
                  </Link>
                  <Link href={project.github} className="px-6 py-3 bg-slate-800 text-white font-bold rounded-xl border border-white/5 hover:bg-slate-700 transition-all">
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* OTHER PROJECTS (GRID) */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-10">All Systems & APIs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-900/20 border border-white/5 hover:bg-slate-900/40 transition-all group">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={project.link} className="text-sm font-bold text-blue-400 flex items-center gap-1 hover:gap-2 transition-all">
                  View Project <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER CALL TO ACTION */}
      <footer className="mt-22 px-8 text-center pb-10">

        {/* CTA Box */}
        <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-linear-to-b from-blue-600/10 to-transparent border border-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Have a project in mind?</h2>
          <p className="text-slate-400 mb-8">I&apos;m currently looking for new opportunities to build impactful software.</p>
          <Link href="mailto:diwasbk@example.com" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-600/20">
            Get In Touch
          </Link>
        </div>

        {/* Social Icons */}
        <div className="mt-22 space-y-10">
          <div className="flex justify-center items-center gap-6 md:gap-10">

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/diwasbishwokarma"
              target="_blank"
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/50 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-transform group-hover:scale-110">
                <Linkedin size={24} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] text-blue-400/80 uppercase tracking-[0.2em] font-bold">LinkedIn</span>
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/diwasbk"
              target="_blank"
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-4 rounded-full bg-white/10 border border-white/50 text-white shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-transform group-hover:scale-110">
                <Github size={24} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] text-white/70 uppercase tracking-[0.2em] font-bold">GitHub</span>
            </Link>

            {/* Instagram */}
            <Link
              href="https://instagram.com/diwas_b.k"
              target="_blank"
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-4 rounded-full bg-pink-500/10 border border-pink-500/50 text-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.2)] transition-transform group-hover:scale-110">
                <Instagram size={24} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] text-pink-500/80 uppercase tracking-[0.2em] font-bold">Instagram</span>
            </Link>
          </div>

          <div className="pt-10">
            <div className="w-16 h-px bg-linear-to-r from-transparent via-slate-700 to-transparent mx-auto"></div>
            <p className="mt-8 text-slate-500 text-[10px] uppercase tracking-[0.4em] font-medium">
              © {new Date().getFullYear()} Diwas BK • Full Stack Developer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}