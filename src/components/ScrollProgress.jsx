import { useEffect, useState } from "react";

function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const currentProgress =
                totalHeight > 0
                    ? (window.scrollY / totalHeight) * 100
                    : 0;
            setProgress(currentProgress);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 h-1 bg-orange-500 z-[100]"
            style={{ width: `${progress}%` }}
        />
    );
}

export default ScrollProgress;