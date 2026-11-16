const skillGroups = [
{
title: "Frontend Development",
skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "React Router"],
},
{
title: "Backend Development",
skills: ["Node.js", "Express.js", "FastAPI", "REST API", "JWT Authentication"],
},
{
title: "Database",
skills: ["MongoDB", "PostgreSQL", "MySQL"],
},
{
title: "Programming Languages Basic",
skills: ["Python", "Java"],
},
{
title: "Tools & Others",
skills: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Figma", "XAMPP"],
},
];

function Skills(){
    return(
        <section id="skills" className="min-h-screen px-6 md:px-16 py-32"
        
        
        >
        <p className="text-orange-500 uppercase tracking-widest">
            My Tech Stack
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mt-5 mb-5">
            Technologies I'm Learning & Building With
        </h2>


        <p className="text-gray-400 max-w-2xl mb-12">
            Technologies and tools I have explored and used while
            learning software development and building practical project .
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {skillGroups.map((group)=>(
                <div key={group.title}
                className="border border-white/10 bg-white/[0.03] rounded-2xl p-7"
                
                >
                    <h3 className="text-xl font-semibold mb-6 text-orange-500">
                        {group.title}
                    </h3>

                    <div className="flex flex-wrap gap-3">
                        {group.skills.map((skills) => (
                            <span key={skills}
                            className="border border-white/15 bg-white/5 px-4 py-2 rounded-full text-sm text-gray-300 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition duration-300 cursor-default"
                            
                            >{skills}</span>
                        ))}

                    </div>
                </div>
            ))}
        </div>

        </section>
    )
}

export default Skills;