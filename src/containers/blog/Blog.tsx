import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import HeroSplit from "./hero";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../../components/bone/sections/partials/SectionHeader";
import Blogs from "./blogs";


export const Blog = (): React.ReactElement => {
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

    const transition = { duration: 0.8, ease: "easeInOut" };

    // Create refs for each section
    const heroSplitRef = useRef(null);
    const blogRef = useRef(null);
    const faqsRef = useRef(null);
    const goalRef = useRef(null);
    const infoRef = useRef(null);
    const featureTilesRef = useRef(null);
    const secondSectionRef = useRef(null);

    // Use useInView hook to trigger animations when each section is in view
    const isHeroSplitInView = useInView(heroSplitRef, { once: false });
    const isSecondSectionInView = useInView(secondSectionRef, { once: false });
    const isInfoSplitInView = useInView(infoRef, { once: false });
    const isFeatureTilesSplitInView = useInView(featureTilesRef, { once: false });
    const isGoalSplitInView = useInView(goalRef, { once: false });
    const isTestimonialsInView = useInView(blogRef, { once: false });
    const isFaqsInView = useInView(faqsRef, { once: false });

    // State to control fab visibility

    useEffect(() => {
        const handleScroll = (): void => {
            if (heroSplitRef.current) {
                const rect = (heroSplitRef.current as any).getBoundingClientRect();
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
                    ref={heroSplitRef}
                    initial="hidden"
                    animate={isHeroSplitInView ? "visible" : "hidden"}
                    variants={leftToRight}
                    transition={transition}
                >
                    <HeroSplit hasBgColor invertColor />
                </motion.div>

                <motion.div
                    ref={blogRef}
                    initial="hidden"
                    animate={isTestimonialsInView ? "visible" : "hidden"}
                    variants={rightToLeft}
                    transition={transition}
                >
                    <Blogs />
                </motion.div>
            </motion.div>
        </>
    );
};
