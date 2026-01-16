import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <div>

            {/* FOOTER CALL TO ACTION */}
            <footer className="mt-22 px-8 text-center pb-10">

                {/* CTA Box */}
                <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-linear-to-b from-blue-600/10 to-transparent border border-blue-500/20">
                    <h2 className="text-3xl font-bold text-white mb-4">Have a project in mind?</h2>
                    <p className="text-slate-400 mb-8">I&apos;m currently looking for new opportunities to build impactful software.</p>
                    <Link href={"/contact"} className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-600/20">
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