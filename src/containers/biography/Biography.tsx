import React, { useRef, useState, useEffect } from "react";
import Hero from "./Hero";
import { motion, useInView } from "framer-motion";
import Teams from "./Teams";


export const Biography = (): React.ReactElement => {
    const isMobile = window.innerWidth < 768;
    const [showFabs, setShowFabs] = useState(false);

    // Define animations for sliding from left and right
    const leftToRight = {
        hidden: { opacity: 0, x: -100, y: 0 },
        visible: { opacity: 1, x: 0, y: 0 },
    };

    const rightToLeft = {
        hidden: { opacity: 0, x: 100, y: 0 },
        visible: { opacity: 1, x: 0, y: 0 },
    };
    const fabAnimation = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, scale: "easeInOut", delay: i * 0.3 },
        }),
    };
    const transition = { duration: 0.8, ease: "easeInOut" };

    // Create refs for each section
    const HeroRef = useRef(null);
    const goalRef = useRef(null);

    // Use useInView hook to trigger animations when each section is in view
    const isHeroInView = useInView(HeroRef, { once: false });
    const isGoalSplitInView = useInView(goalRef, { once: false });

    // State to control fab visibility

    useEffect(() => {
        const handleScroll = (): void => {
            if (HeroRef.current) {
                const rect = (HeroRef.current as any).getBoundingClientRect();
                const halfHeight = rect.height / 2;
                setShowFabs(rect.bottom <= halfHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Call once to set initial state

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <motion.div className="bone">
                <motion.div
                    ref={HeroRef}
                    initial="hidden"
                    animate={isHeroInView ? "visible" : "hidden"}
                    variants={leftToRight}
                    transition={transition}
                >
                    <Hero hasBgColor invertColor />
                </motion.div>


                <motion.div
                    initial="visible"
                    animate={isGoalSplitInView ? "visible" : "visible"}
                    variants={rightToLeft}
                    transition={transition}
                >
                    <Teams />
                </motion.div>
                
            </motion.div>
        </>
    );
};
