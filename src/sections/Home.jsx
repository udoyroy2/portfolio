import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

function Home() {
    return (
        <section id="home"
            className="min-h-screen flex items-center px-6 md:px-16" >

            <div className="max-w-7xl w- full mx-auto grid md:grid-cols-2 items-center gap-12  ">
                
                
                <div className="max-w-3xl" >
                
                
                
                <p className="text-orange-500 tracking-widest uppercase mb-5">
                    WelCome to my portfolio 🖕  </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    Udoy Roy
                    <br />
                    <span className="text-orange-500">
                        Developer.🫩
                    </span>
                </h1>
                <p className="text-gray-400 text-lg mt-6 max-w-xl">
          I'm a Computer Science student at independent University Bangladesh(IUB)
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

                    <a href="/Udoy_Roy_CV.pdf"
                    download 
                    className ="border border-white/30 px-7 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">
                    Download CV 
                    <Download size={20}/>
                    </a>
                </div>


                <div className="mt-16 text-gray-400 flex items-center gap-3">
                    <ArrowDown size={18} />
                    Scroll to explore

                </div>

            </div>

            <div className="flex justify-center md:justify-end">
                 <div className="relative w-64 h-64 md:w-80 md:h-80" >
                    <div className="absolute inset-0 rounded-full border-2 border-orange-500/60 rotate-12"></div>
                 
                 <img src="profile.jpeg" alt="Udoy roy" 
                 className="w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"/>

                 </div>




            </div>




</div>
        
        </section>
    )
}

export default Home;