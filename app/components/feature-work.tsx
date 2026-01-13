import Image from "next/image";
import Link from "next/link";

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
    </div>
  );
}