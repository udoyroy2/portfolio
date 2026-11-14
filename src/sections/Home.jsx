import { ArrowDown, ArrowUpRight } from "lucide-react";

function Home() {
    return (
        <section id="home"
            className="min-h-screen flex items-center px-6 md:px-16" >

            <div className="max-w-3xl">
                <p className="text-orange-500 tracking-widest uppercase mb-5">
                    WelCome 🖕  </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    Udoy Roy
                    <br />
                    <span className="text-orange-500">
                        Developer.🫩
                    </span>
                </h1>
                <p className="text-gay-400 text-lg mt-6 max-w-xl">
          I'm a Computer Science student At independent University Bangladesh(IUB)
          and aspiring software developer
          interested in building practical web applications.
          I enjoy working with frontend technologies, backend systems
          and database design.
                </p>

                <div className="flex flex-wrap gap-4 mt-8 ">
                    <a href="#project"
                        className="bg-orange-500 text-black px-7 py-3 rounded-full flex items-center gap-2">
                        View Project <ArrowUpRight size={18} />
                    </a>

                    <a
                        href="#contact"
                        className="border border-white/30 px-7 py-3 rounded-full"
                    >
                        Contact Me
                    </a>

                </div>


                <div className="mt-16 text-gray-400 flex items-center gap-3">
                    <ArrowDown size={18} />
                    Scroll to explore

                </div>

            </div>






        </section>
    )
}

export default Home;