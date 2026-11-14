import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Menu } from "lucide-react";


function Navbar() {

const navigateTo = (index) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({
        top:(index/4)*maxScroll,
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
        <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center backdrop-blue-md">

            <a href="#home" className="text-2xl font-bold">
                Udoy<span className="text-orange-500">.</span>
            </a>


            <div className="hidden md:flex gap-8 text-sm">
                <a href="#home" className="hover:text-orange-500">Home</a>
                <a href="#about" className="hover:text-orange-500">About</a>
                <a href="#skills" className="hover:text-orange-500">Skills</a>
                <a href="#projects" className="hover:text-orange-500">Project</a>
                <a href="#contact" className="hover:text-orange-500">Contact</a>

            </div>

            <div className="flex gap-4 items-center">

                <FaGithub size={20} />
                <FaLinkedin size={20} />
                <Menu className="md:hidden" size={24} />
            </div>


        </nav>
    );

}

export default Navbar;