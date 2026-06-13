const projects = [
    {
        title: 'Sonavi',
        description:
            'AI-driven mobile platform with IoT-enabled haptic feedback for real-time sound recognition and emergency alerts for deaf individuals.',
        tags: ['Kotlin', 'IoT', 'AI'],
        type: 'Research Project',
        link: "https://github.com/xyugen/sonavi",
    },
    {
        title: 'ClarifAI',
        description:
            'AI-powered study tool that generates smart questions from uploaded PDFs and provides personalized feedback to deepen understanding.',
        tags: ['React', 'TypeScript', 'Tailwind',],
        type: 'Web App',
        link: "https://github.com/xyugen/clarifai",
    },
    {
        title: 'Zoning Encoder',
        description:
            'Zoning certification system for the City Planning and Development Office — handles Business and Land Use certificate generation with multi-parcel support.',
        tags: ['React', 'MUI', 'Express', 'PostgreSQL'],
        type: 'Government / Internship',
        link: null,
    },
    {
        title: 'Farri',
        description:
            'Bike ride destination finder with map integration, route planning, and location discovery for cyclists.',
        tags: ['React', 'TypeScript', 'Tailwind', 'Supabase', 'Mapbox'],
        type: 'Web App',
        link: null,
    },
]

const Projects = () => {
    return (
        <section className="relative flex flex-col min-h-screen px-6 md:px-20 py-20">
            <p className="text-xl tracking-[0.4em] text-white/60 text-center mb-16">
                PROJECTS
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="group relative border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 p-6 md:p-8"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <span className="text-[10px] tracking-[0.3em] text-white/35">
                                {project.type.toUpperCase()}
                            </span>
                            
                        </div>

                        <h2 className="text-2xl md:text-3xl font-black text-white/90 tracking-wide mb-3">
                            {project.title.toUpperCase()}
                        </h2>

                        <div className="w-8 h-px bg-purple-500/50 mb-4" />

                        <p className="text-xs md:text-sm tracking-[0.1em] text-white/55 leading-loose mb-6">
                            {project.description.toUpperCase()}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] tracking-[0.15em] text-purple-400/70 border border-purple-500/20 px-2 py-1"
                                >
                                    {tag.toUpperCase()}
                                </span>
                            ))}
                        </div>

                        {project.link && (
                            <a
                                href={project.link}
                                target="link"
                                rel="noreferrer"
                                className="absolute bottom-6 right-6 text-[15px] tracking-[0.2em] text-white/30 hover:text-white/70 transition-all"
                            >
                                VIEW →
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects