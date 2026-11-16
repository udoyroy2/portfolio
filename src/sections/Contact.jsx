import { Mail, ArrowUpRight, } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";


function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [loading, setloading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();


        setloading(true);
        setStatus("");



        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || "Something wrong");
            }
            setStatus(data.message);
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

        } catch (error) {
            setStatus(error.message || "Failed to sent message");
        } finally {
            setloading(false);
        }


    };
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
            <form onSubmit={handleSubmit} className="mt-12 max-w-xl space-y-5">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/5 border border-white/15 rounded-lg outline-none focus:border-orange-500 transition"
                ></input>

                <input
                    type="email"
                    name="email"
                    placeholder="Your Mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/5 border border-white/15 rounded-lg outline-none focus:border-orange-500 transition"
                ></input>

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject ?? "
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/5 border border-white/15 rounded-lg outline-none focus:border-orange-500 transition"
                ></input>

                <textarea
                    name="message"
                    placeholder="Type your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full p-4 bg-white/5 border border-white/15 rounded-lg outline-none focus:border-orange-500 transition"
                ></textarea>


                <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-4 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition disabled:opacity-50">
                    {loading ? "Sending..." : "Send Message"}
                    <ArrowUpRight className="inline ml-2" size={18} />
                </button>

                {status && (
                    <p className="text-sm text-orange-500 mt-3">
                        {status}
                    </p>
                )}
            </form>

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
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-4 border border-white/15 rounded-full hover:bg-orange-500 hover:text-black hover:border-orange-500 transition"

                > <FaGithub size={22} />
                </a>

                <a
                    href="Not open yet"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-4 border border-white/15 rounded-full hover:bg-orange-500 hover:text-black hover:border-orange-500 transition"

                > <FaLinkedin size={22} />
                </a>

                <a
                    href="https://www.instagram.com/udoy__r?exln=MWUxcW5ibDJob3Eycg=="
                    target="_blank"
                    rel="nooperner noreferrer"
                    aria-label="Instagram"
                    className="p-4 border border-white/15 rounded-full hover:bg-orange-500 hover:text-black hover:border-orange-500 transition"

                > <FaInstagram size={22} />
                </a>
                <a
                    href="https://www.facebook.com/share/1AGixQbGde/?mibextid=wwXIfr"
                    target="_blank"
                    rel="nooperner noreferrer"
                    aria-label="Facebook"
                    className="p-4 border border-white/15 rounded-full hover:bg-orange-500 hover:text-black hover:border-orange-500 transition"

                > <FaFacebook size={22} />
                </a>
                <a
                    href="https://Wa.me/+8801727137825"
                    target="_blank"
                    rel="nooperner noreferrer"
                    aria-label="Whatsapp"
                    className="p-4 border border-white/15 rounded-full hover:bg-orange-500 hover:text-black hover:border-orange-500 transition"

                > <FaWhatsapp size={22} />
                </a>

            </div>

            <p className="text-gray-500 text-sm mt-20">
                © {new Date().getFullYear()} Udoy Roy . Build With React, three.js and Tailwind CSS.
            </p>
        </section>
    );

}

export default Contact;