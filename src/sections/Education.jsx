
function Education() {
    return (
        <section
            id="education"
            className="min-h-screen px-6 md:px-16 py-32"
        >
            <p className="text-orange-500 uppercase tracking-widest">
                My Background
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mt-5 mb-12">
                Education🎓&<span className="text-orange-500">Journey.</span>
            </h2>

            <div className="max-w-4xl space-y-8">

                
                <div className="border border-white/15 bg-white/[0.03] rounded-2xl p-8">
                    <span className="text-orange-500 text-sm">
                        Education 🏫
                    </span>

                    <h3 className="text-2xl font-bold mt-4">
                        Independent University, Bangladesh
                    </h3>

                    <p className="text-gray-400 mt-2">
                        Bachelor of Science in Computer Science & Engineering
                    </p>

                    <p className="text-gray-500 text-sm mt-4">
                        Currently pursuing undergraduate studies
                    </p>

                    <h4 className="text-2xl font-bold mt-4">
                        Ideal College Dhanmondi,
                        65 Central Road, Dhanmondi, Dhaka 1205
                    </h4>

                    <p className="text-gray-400 mt-2">
                        HSC Batch - 2020
                    </p>

                    <h5 className="text-2xl font-bold mt-4">
                        Government Rajoir Gopalganj K.J.S. Pilot Model Institution & College
                        Rajoir, Madaripur
                    </h5>

                    <p className="text-gray-400 mt-2">
                        SSC Batch - 2018
                    </p>




                </div>


                <div className="border border-white/15 bg-white/[0.03] rounded-2xl p-8">
                    <span className="text-orange-500 text-sm">
                        Learning Journey 🛣️
                    </span>

                    <div className="mt-6 space-y-6">

                        <div>
                            <h3 className="text-xl font-semibold">
                                01. Java OOP & Desktop Application Development
                            </h3>
                            <p className="text-gray-400 mt-2">
                                My interest in software development grew while working
                                on Java OOP projects. Building user interfaces with
                                Scene Builder and FXML, and connecting them with
                                Model and Controller classes helped me understand
                                how different parts of an application work together.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">
                                02. Frontend Development
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Building user interfaces using HTML, CSS,
                                JavaScript, React, and Tailwind CSS.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">
                                03. Backend & Database
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Exploring REST APIs, Node.js, Express,
                                FastAPI, MongoDB, and PostgreSQL.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">
                                04. Full-Stack Projects
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Applying my knowledge by building practical
                                web applications and university projects.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Education;
