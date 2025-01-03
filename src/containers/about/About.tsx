import React, { useRef } from "react";
import classNames from "classnames";
import HeroSplit from "components/about/HeroSplit";
import AboutSecondSection from "components/about/AboutSecondSection";
import Cta from "components/about/Cta";
import MissionVision from "components/about/MissionVision";
import Testimonials from "components/about/Testimonials";
import Teams from "./Teams";


import { motion, useInView } from "framer-motion";
import { FixedFloatingButtons } from "../../components";

export const About = (): React.ReactElement => {
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
	const secondHeroRef = useRef(null);
	const boneDensityRef = useRef(null);
	const testimonialsRef = useRef(null); 
	const howItWorksRef = useRef(null);

	// Use useInView hook to trigger animations when each section is in view
	const isHeroSplitInView = useInView(heroSplitRef, { once: false });
	const isSecondHeroInView = useInView(secondHeroRef, { once: false });
	const isBoneDensityInView = useInView(boneDensityRef, { once: false });
	const isHowItWorksInView = useInView(howItWorksRef, { once: false });
	const isTestimonialsInView = useInView(testimonialsRef, { once: false });

	return (
		<div className="bone">
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
				ref={secondHeroRef}
				initial="hidden"
				animate={isSecondHeroInView ? "visible" : "hidden"}
				variants={rightToLeft}
				transition={transition}
			>
				<AboutSecondSection />
			</motion.div>
			<motion.div
				ref={boneDensityRef}
				initial="hidden"
				animate={isBoneDensityInView ? "visible" : "hidden"}
				variants={rightToLeft}
				transition={transition}
			>
				<Cta/>
			</motion.div>
			<motion.div
				ref={howItWorksRef}
				initial="hidden"
				animate={isHowItWorksInView ? "visible" : "hidden"}
				variants={leftToRight}
				transition={transition}
			>
				<MissionVision />
			</motion.div>

			<Teams />

			<motion.div
				ref={testimonialsRef}
				initial="hidden"
				animate={isTestimonialsInView ? "visible" : "hidden"}
				variants={rightToLeft}
				transition={transition}
			>
				<Testimonials />
			</motion.div>

			<div className="text-center" style={{ padding: "80px 20px", background: "#F3F5F8" }}>
				<div style={{ maxWidth: "1000px", margin: "auto" }}>
					<h2 className={classNames("mt-0 font-bold gradient-text mb-16")}>Stay Young, Be Strong, Live Forever</h2>
					<p className="m-0 font-regular font-mlg">
						Unlock the secrets to lifelong vitality with the latest in scientific advancements with personalised care.
						Prevent age-related decline or enhance your current health, live your best life—today, tomorrow, and beyond.
					</p>
				</div>
			</div>

			<FixedFloatingButtons service="bone" />
		</div>
	);
};
