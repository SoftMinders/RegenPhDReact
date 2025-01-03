import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import HeroSplit from "components/home/HeroSplit";
import FeaturesTiles from "components/home/FeaturesTiles";
import { motion, useInView } from "framer-motion";
import FAQs from "components/home/FAQ";
import NewsMedia from "../../components/home/NewsMedia";
import FeaturedIn from "../../components/home/FeaturedIn";
import InfoSection from "../../components/home/InfoSection";
import SectionHeader from "../../components/bone/sections/partials/SectionHeader";
import Blogs from "../../components/home/Blogs";
import GoalSection from "../../components/home/GoalSection";
import Contact from "../../components/home/Contact";
import {Link} from "react-router-dom"


export const Home = (): React.ReactElement => {

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
                    className="second-section"
                    initial="visible"
                    animate={isSecondSectionInView ? "visible" : "visible"}
                    variants={rightToLeft}
                    transition={transition}
                >
                    <div className="container">
                        <div className={classNames("news-inner section-inner")}>
                            <SectionHeader
                                className="center-content reveal-from-bottom"
                                data={{
                                    title: "",
                                    paragraph:
                                        "Is at the forefront of proactive health design and management, blending cutting-edge science with personalised wellness strategies to revolutionise how we approach aging and well-being with digital technology.",
                                }}
                            >
                                <h2 className="gradient-text font-bold text-center">
                                    Regeneration Personal Health Design <br />
                                    (Regen PhD)
                                </h2>
                            </SectionHeader>
                            <React.Fragment><Link to="/phd" className="cntbtn">PhD</Link></React.Fragment>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    ref={infoRef}
                    initial="hidden"
                    animate={isInfoSplitInView ? "visible" : "hidden"}
                    variants={leftToRight}
                    transition={transition}
                >
                    <InfoSection />
                </motion.div>

                <motion.div
                    initial="visible"
                    animate={isGoalSplitInView ? "visible" : "visible"}
                    variants={rightToLeft}
                    transition={transition}
                >
                    <GoalSection />
                </motion.div>
                <motion.div
                    ref={featureTilesRef}
                    initial="hidden"
                    animate={isFeatureTilesSplitInView ? "visible" : "hidden"}
                    variants={leftToRight}
                    transition={transition}
                >
                    <FeaturesTiles />
                </motion.div>

                <motion.div
                    className="text-center newsMediaHome"
                    initial="hidden"
                    animate="visible"
                    variants={rightToLeft}
                    transition={transition}
                >
                    <NewsMedia />
                </motion.div>

                <motion.div
                    className="text-center featuredInHome"
                    initial="hidden"
                    animate="visible"
                    variants={rightToLeft}
                    transition={transition}
                >
                    <FeaturedIn />
                </motion.div>
                <motion.div
                    className="text-center"
                    initial="hidden"
                    animate="visible"
                    variants={rightToLeft}
                    transition={transition}
                >
                    <Contact />
                </motion.div>

                <motion.div
                    initial="visible"
                    animate={isFaqsInView ? "visible" : "visible"}
                    variants={leftToRight}
                    transition={transition}
                >
                    <FAQs />
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

                <motion.div
                    className="text-center"
                    style={{ padding: "80px 20px", background: "#faf8f5" }}
                    initial="hidden"
                    animate="visible"
                    variants={leftToRight}
                    transition={transition}
                >
                    <motion.div style={{ maxWidth: "1000px", margin: "auto" }}>
                        <h2 className={classNames("mt-0 font-bold gradient-text mb-16")}>
                            Stay Young, Be Strong, Live Forever
                        </h2>
                        <p className="m-0 font-regular font-mlg">
                            Unlock the secrets to lifelong vitality with the latest in scientific advancements with
                            personalised care. Prevent age-related decline or enhance your current health, live your
                            best life—today, tomorrow, and beyond.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};
