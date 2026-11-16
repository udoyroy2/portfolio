import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { useState } from "react";


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const navigateTo = (index) => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        window.scrollTo({
            top: (index / 4) * maxScroll,
            behavior: "smooth",
        });

    };

    const links = [
        "Home",
        "About",
        "Skills",
        "Project",
        "Contact"
    ];
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center backdrop-blur-md">

            <a href="#home" className="text-2xl font-bold">
                Udoy<span className="text-orange-500">.</span>
            </a>


            <div className="hidden md:flex gap-8 text-sm">
                <a href="#home" className="hover:text-orange-500">Home</a>
                <a href="#about" className="hover:text-orange-500">About</a>
                <a href="#skills" className="hover:text-orange-500">Skills</a>
                <a href="#project" className="hover:text-orange-500">Project</a>
                <a href="#contact" className="hover:text-orange-500">Contact</a>

            </div>

            <div className="flex gap-4 items-center">

                <FaGithub size={20} />
                <FaLinkedin size={20} />

                <button onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white"
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}


                </button>






            </div>
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-[#1A1A1D]/95 backdrop-blur-lg border-white/10 p-6 flex flex-col gap-6 md:hidden">
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>about</a>
                    <a href="#skills" onClick={() => setIsOpen(false)}>skills</a>
                    <a href="#project" onClick={() => setIsOpen(false)}>project</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>contact</a>



                </div>
            )}










        </nav>
    );

}

export default Navbar;