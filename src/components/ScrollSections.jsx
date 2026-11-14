import { Children, useEffect, useState } from "react";

const sectionNames = [
    "Home",
    "About",
    "Skills",
    "Project",
    "Contact"
];
function ScrollSections({ children }) {
    const sections = Children.toArray(children);
    const [progress, setProgress] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            const maxScroll =
                document.documentElement.scrollHeight - window.innerHeight;


            const value = maxScroll > 0 ? window.scrollY / maxScroll : 0;
            setProgress(Math.max(0, Math.min(1, value)));

        };
        window.addEventListener("scroll", handleScroll, {
            passive: true,

        });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const activeIndex = Math.round(
        progress * (sections.length - 1)
    );

    const navigateTo = (index) => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;


        window.scrollTo({
            top: (index / (sections.length - 1)) * maxScroll,
            behavior: "smooth",

        });
    };

    return (
        <>
            <div className="journey-panels">
                {sections.map((section, index) => {
                    const distance = Math.abs(
                        progress - index / (sections.length - 1)

                    );
      
const opacity = index === activeIndex ? 1:0;








                    const offset = (progress - index / (sections.length - 1)) * (sections.length - 1) * -90;


                    return (
                        <div
                            key={index}
                            className="journey-panel"
                            style={{
                                opacity,
                                visibility: opacity < 0.02 ? "hidden" : "visible",
                                pointerEvents: opacity > 0.5 ? "auto" : "none",
                                "--offset": `${offset}px`
                            }}>
                            {section}



                        </div>
                    );



                })}

            </div>



            <nav className="journey-dots">
                {sections.map((_, index) => (
                    <button key={index}
                        arial-label={`Go to ${sectionNames[index]}`}
                        title={sectionNames[index]}
                        className={
                            activeIndex === index ? "active" : ""
                        }
                        onClick={() => navigateTo(index)}
                    />
                ))}

            </nav>

            <div className="journey-spacer"></div>
        </>
    )




}

export default ScrollSections;