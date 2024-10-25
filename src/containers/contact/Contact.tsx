import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import HeroSplit from "components/contact/HeroSplit";
import Contacts from "../../components/contact/Main";
import { FixedFloatingButtons } from "../../components";

import { motion, useInView } from "framer-motion";



export const Contact = (): React.ReactElement => {
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

    // Use useInView hook to trigger animations when each section is in view
    const isHeroSplitInView = useInView(heroSplitRef, { once: false });

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
                    className="text-center"
                    initial="hidden"
                    animate="visible"
                    variants={rightToLeft}
                    transition={transition}
                >
                    <Contacts />
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

            <FixedFloatingButtons service="dna" />
        </>
    );
};
