import Image from "next/image";

export default function HeroSection() {
    return (
        <div>
            <main className="min-h-screen bg-[#030712] text-slate-200 flex items-center justify-center px-8 selection:bg-blue-500/30">
                <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* LEFT: Professional Profile Image */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="relative group">
                            {/* Background Decorative Element */}
                            <div className="absolute -inset-4 bg-linear-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl group-hover:opacity-100 transition duration-1000 opacity-70" />

                            {/* Image Container */}
                            <div className="relative w-64 h-80 md:w-80 md:h-112.5 rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                                <Image
                                    src="/images/diwasbk.jpg"
                                    alt="Diwas BK"
                                    className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
                                    width={500}
                                    height={500}
                                    priority
                                />

                                {/* Subtle Overlay Gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
                            </div>

                            {/* Floating Achievement Badge (Optional) */}
                            <div className="absolute -bottom-6 -right-6 bg-slate-900/80 backdrop-blur-md border border-white/10 p-4 rounded-xl hidden md:block shadow-xl">
                                <p className="text-blue-400 font-bold text-xl leading-none">1+</p>
                                <p className="text-[10px] uppercase tracking-tighter text-slate-400">Years Experience</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Professional Content */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <header className="space-y-4 mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-xs font-medium tracking-wide text-blue-400 uppercase">Available for new opportunities</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                                Hi, I&apos;m{" "}Diwas BK
                            </h1>

                            <p className="text-xl md:text-3xl font-medium bg-linear-to-r from-blue-200 to-purple-600 bg-clip-text text-transparent">
                                Full-Stack Software Developer
                            </p>

                        </header>

                        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10 italic border-l-2 border-blue-600/50 pl-6 text-justify">
                            Architecting resilient digital solutions through clean code and innovative design. Specializing in high-performance applications that bridge the gap between complex backend logic and intuitive user experiences.
                        </p>

                        {/* Specialized Tech Stack */}
                        <div className="mb-12">
                            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-[0.2em] mb-4">
                                Core Technologies
                            </h3>
                            <div className="relative h-10 md:h-12">
                                <Image
                                    src="https://skillicons.dev/icons?i=python,java,js,nodejs,express,react,next,mysql,postgres,mongodb,docker,git&theme=dark"
                                    alt="Tech Stack"
                                    fill
                                    style={{ objectFit: "contain" }}
                                    className="opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>

                        {/* Call to Actions */}
                        <div className="flex flex-wrap gap-5">
                            <button className="group relative px-8 py-4 font-bold text-gray-200 rounded-full bg-linear-to-r from-blue-400 to-purple-500 transition-all hover:from-blue-400 hover:to-purple-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer">
                                Explore Portfolio
                            </button>

                            <button className="px-8 py-4 border border-gray-700 text-gray-200 font-semibold rounded-full hover:bg-slate-800/50 hover:border-slate-500 transition-all cursor-pointer">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}