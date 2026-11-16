const interest = [
    {
        number: "01",
        title: "Guiter and Music",
        description: "Playing guitar and enjoying music. "
    },

    {
        number: "02",
        title: "Philosophy and Literature",
        description: "Exploring philosophical ideas, literature, and different ways of understanding life "
    },


    {
        number: "03",
        title: "Psychology",
        description: "Understanding human behavior, emotions, and the complexity of the human "
    },
    {
        number: "04",
        title: "History & geopolitics",
        description: "Learning about historical events, global affairs, and how the world evolves ."
    },

    {
        number: "05",
        title: "Travel",
        description: "Exploring infamiliar places and capturing moments through photography. "
    },
    {
        number: "06",
        title: "Technology",
        description: "Discovering emerging technologies , digital innovation , and new ideas."
    },
    {
        number: "07",
        title: "Movies and Cinema",
        description: "Exploring Stories, films and different perspectives "
    },



];

function BeyondCode() {
    return (
        <section id="interests"
            className="min-h-screen px-6 md:px-16 py-24 md:py-32">

            <div className="max-w-7xl mx-auto">

                <p className="text-orange-500 uppercase tracking-[0.25em] text-sm mb-5">
                    Beyond the Code  </p>

                <h2 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
                    Life isn't just about
                    <span className="text-orange-500"> 👩🏻‍💻

                    </span>
                </h2>


                <p className="text-gray-400 text-base md:text-lg mt-6 max-w-xl leading-relaxed">
                    Outside of development, I'm curious about people,
                    ideas, culture, music, technology, and the world around me.  </p>

                <div className="grid md:grid-cols-2 gap-x-16 mt-16">
                    {interest.map((item)=>(
                    <div key={item.number}
                        className="group border-t border-white/15 py-7 flex gap-6 hover:border-orange-500 transition-colors duration-300">
                        <span className="text-orange-500 text-sm pt-1">{
                            item.number}

                        </span>
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-orange-500 transition-colors duration-300">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 mt-2 leading-relaxed text-sm md:text-base">
                                {item.description}
                            </p>
                        </div>


                    </div>
                 ))}

                </div>

            </div>

        </section>
    )
}

export default BeyondCode;