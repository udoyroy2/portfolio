const projects = [
    {
        title: "Nexora Store",
        description:
            "A full-stacke-commerce application built while learning React, FastAPI, and PostgreSQL. Focused on product management, API integration , and shopping workflows.",
        tech: ["React", "FastAPI", "PostgreSQL", "Python"],
        github: "https://github.com/udoyroy2/ecommerce3",
        category: "Full Stack",
        video: ""

    },
    {
        title: "MERN Stack E-Commerce",
        description:
            "An e-commerce practice project exploring frontend and backend integration, REST APIs, database operations, and shopping application workflows.",
        tech: ["React", "Node.js", "Express.js", "MongoDB"],
        github: "https://github.com/udoyroy2/mernstackecommerce2",
        category: "Full Stack",
        video: ""

    },
    {
        title: "Smart Healthcare Management",
        description:
            "A healthcare management system university project for managing patient information, medical records, and related healthcare operations.",
        tech: ["MYSQL", "PHP", "HTML", "CSS", "JS"],
        github: "https://github.com/udoyroy2/healthcare",
        category: "Web Application",
        video: "https://res.cloudinary.com/gcabgqed/video/upload/v1794754582/healthcaredemo.mkv"

    },
    {
        title: "Bangla Fake News Checker",
        description:
            "A university project focused on checking suspicious news content and exploring API integration for information verification.",
        tech: ["MYSQL", "PHP", "HTML", "CSS", "JS"],
        github: "https://github.com/udoyroy2/fakecheckeruniproject",
        category: "Web Application",
        video: "https://res.cloudinary.com/gcabgqed/video/upload/v1794755097/fakecheckerdemo.mkv"

    },
    {
        title: "Hotel Management System",
        description:
            "A Java-based hotel management and simulation project developed to practice object-oriented programming, GUI development, and file handling.",
        tech: ["Java", "JavaFX", "Scene Builder"],
        github: "https://github.com/mdmhbllm/fiveStarHotel",
        category: "Desktop Application",
        video: ""

    },
    {
        title: "React E-commerce Practice",
        description:
            "A frontend-focused e-commerce practice project built to improve React fundamentals, component design, routing, and UI development.",
        tech: ["React", "JavaScript", "Node.js, Express.js"],
        github: "https://github.com/udoyroy2/ecommerceforreactpractice",
        category: "Frontend",
        video: ""

    },
]

function Project() {
    return (
        <section id="project"
            className="min-h-screen px-6 md:px-16 py-32">

            <p className="text-orange-500 uppercase tracking-widest">
                My Work
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mt-5 mb-5">
                Project I've Build
            </h2>

            <p className="text-gray-400 max-w-2xl mb-12">
                A collection of academic and personal projects where
                I explore technologies, practice development, and
                turn ideas into working applications.
            </p>


            <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
                {projects.map((project, index) => (
                    <div key={project.title}
                        className="group border border-white/15 bg-white/[0.03] rounded-2xl p-8 hover:border-orange-500 hover:-translate-y-2 transition duration-300">
                        {project.video && (
                            <video src={project.video}
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full aspect-video object-cover rounded-xl mb-6">
                                
                            </video>
                        )}
                        
                        
                        
                        
                        
                        
                        
                        
                        <div className="flex justify-between items-center">
                            <span className="text-orange-500 text-sm">
                                0{index + 1}
                            </span>

                            <span className="text-xs text-gray-400 border border-white/15 px-3 py-1 rounded-full">
                                {project.category}


                            </span>

                        </div>

                        <h3 className="text-2xl font-bold mt-6 group-hover:text-orange-500 transition">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 mt-4 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-6">
                            {project.tech.map((item)=>(
                                <span key={item}
                                className="text-xs text-orange-400 bg-orange-500/10 px-3 py-2 rounded-full ">
                                 {item}
                                </span>
                            ))}
                        </div>

                        <a href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-8 text-white hover:text-orange-500 transition">
                            View on Github
                            <span>↗</span>
                        </a>

                    </div>
                ))}


            </div>




        </section>
    )
}

export default Project;