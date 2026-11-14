import { Mail, ArrowUpRight, } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";



function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-32"
        >

            <p className="text-orange-500 uppercase tracking-widest">
                Get In Touch
            </p>

            <h2 className="text-5xl md:text-7xl font-bold mt-6 max-w-3xl leading-tight">
                Let's connect and
                <span className="text-orange-500">
                    Create Something.</span>
            </h2>

            <p className="text-gray-400 text-lg mt-6 max-w-xl leading-relaxed">
                I'm always interested in learning new technologies,
                working on interesting projects, and connecting with
                developers. Feel free to reach out for collaboration,
                internship opportunities, or just a friendly conversation.
            </p>
            <a href="mailto:udoyudoy73@gmail.com"
                className="mt-10 flex items-center gap-3 text-lg md:text-xl hover:text-orange-500 transition w-fit">
                <Mail size={24} />
                udoyudoy73@gmail.com
                <ArrowUpRight size={18} />
            </a>

            <div className="flex items-center gap-6 mt-10">
                <a
                    href="https://github.com/udoyroy2"
                    target="_blank"
                    rel="nooperner noreferrer"
                    arial-label="GitHub"
                    className="p-4 border border-white/15 rounded-full hover:bg-orange-500 hover:text-black hover:border-orange-500 transition"

                > <FaGithub size={22} />
                </a>

                <a
                    href="Not open yet"
                    target="_blank"
                    rel="nooperner noreferrer"
                    arial-label="GitHub"
                    className="p-4 border border-white/15 rounded-full hover:bg-orange-500 hover:text-black hover:border-orange-500 transition"

                > <FaLinkedin size={22} />
                </a>

                <a
                    href="https://www.instagram.com/udoy__r?exln=MWUxcW5ibDJob3Eycg=="
                    target="_blank"
                    rel="nooperner noreferrer"
                    arial-label="Instagram"
                    className="p-4 border border-white/15 rounded-full hover:bg-orange-500 hover:text-black hover:border-orange-500 transition"

                > <FaInstagram size={22} />
                </a>
                <a
                    href="https://www.facebook.com/share/1AGixQbGde/?mibextid=wwXIfr"
                    target="_blank"
                    rel="nooperner noreferrer"
                    arial-label="Facebook"
                    className="p-4 border border-white/15 rounded-full hover:bg-orange-500 hover:text-black hover:border-orange-500 transition"

                > <FaFacebook size={22} />
                </a>
<a
                    href="https://Wa.me/+8801727137825"
                    target="_blank"
                    rel="nooperner noreferrer"
                    arial-label="Whatsapp"
                    className="p-4 border border-white/15 rounded-full hover:bg-orange-500 hover:text-black hover:border-orange-500 transition"

                > <FaWhatsapp size={22} />
                </a>
                





            </div>






            <p className="text-gray-500 text-sm mt-20">
                © {new Date().getFullYear()} Udoy Roy . Build With React and Tailwind CSS.
            </p>
        </section>
    );

}

export default Contact;