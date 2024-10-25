import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import HeroSplit from "components/mai/HeroSplit";
import MaiSecondSection from "components/mai/MaiSecondSection";
import SupportSection from "components/mai/SupportSection";
import MaiFourthSection from "components/mai/MaiFourthSection";
import PricingPlans from "components/mai/PricingPlans";
import Testimonials from "components/Testimonials";
import Faq from "components/mai/Faq";
import Cta from "components/Cta";


import { motion, useInView } from "framer-motion";



export const Mai = (): React.ReactElement => {
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
    const heroSplitRef = useRef(null);
    const SupportSectionRef = useRef(null);
    const secondSectionRef = useRef(null);
    const MaiFourthSectionRef = useRef(null);
    const PricingPlansRef = useRef(null);
    const TestimonialsRef = useRef(null);
    const FaqRef = useRef(null);
    const CtaRef = useRef(null);

    // Use useInView hook to trigger animations when each section is in view
    const isHeroSplitInView = useInView(heroSplitRef, { once: false });
    const isSecondSectionInView = useInView(secondSectionRef, { once: false });
    const isSupportSectionInView = useInView(SupportSectionRef, { once: false });
    const isMaiFourthSectionInView = useInView(MaiFourthSectionRef, { once: false });
    const isPricingPlansInView = useInView(PricingPlansRef, { once: false });
    const isTestimonialsInView = useInView(TestimonialsRef, { once: false });
    const isFaqInView = useInView(FaqRef, { once: false });
    const isCtaInView = useInView(CtaRef, { once: false });

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
                    className="text-center"
                    initial="visible"
                    animate={isSecondSectionInView ? "visible" : "visible"}
                    variants={rightToLeft}
                    transition={transition}
                >
                    <MaiSecondSection />
                </motion.div>

                <motion.div
                    ref={SupportSectionRef}
                    className="text-center"
                    initial="hidden"
                    animate={isSupportSectionInView ? "visible" : "hidden"}
                    variants={leftToRight}
                    transition={transition}
                >
                    <SupportSection />
                </motion.div>

                <motion.div
                    className=""
                    initial="visible"
                    animate={isMaiFourthSectionInView ? "visible" : "visible"}
                    variants={rightToLeft}
                    transition={transition}
                >
                    <MaiFourthSection />
                </motion.div>

                <motion.div
                    ref={PricingPlansRef}
                    className=""
                    initial="hidden"
                    animate={isPricingPlansInView ? "visible" : "hidden"}
                    variants={leftToRight}
                    transition={transition}
                >
                    <PricingPlans />
                </motion.div>

                <motion.div
                    className=""
                    initial="visible"
                    animate={isTestimonialsInView ? "visible" : "visible"}
                    variants={rightToLeft}
                    transition={transition}
                >
                    <Testimonials />
                </motion.div>

                <motion.div
                    ref={FaqRef}
                    className=""
                    initial="hidden"
                    animate={isFaqInView ? "visible" : "hidden"}
                    variants={leftToRight}
                    transition={transition}
                >
                    <Faq />
                </motion.div>

                <motion.div
                    className=""
                    initial="visible"
                    animate={isCtaInView ? "visible" : "visible"}
                    variants={rightToLeft}
                    transition={transition}
                >
                    <Cta />
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
