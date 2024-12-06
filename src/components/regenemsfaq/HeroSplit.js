import React from "react";
import classNames from "classnames";
import {Grid, Stack} from "@mui/material";

const HeroSplit = ({ hasBgColor, invertColor, ...props }) => {

	return (
		<section
			{...props}
			className={classNames("hero section", hasBgColor && "has-bg-color", invertColor && "invert-color")}
		>
			<div className="container">
				<div className={classNames("hero-inner section-inner")}>
					<div className={classNames("split-wrap")}>
						<Grid container spacing={2} alignItems="center" className="py-4">
							<Grid item xs={12} md={6} className="">
								<h1 className="mt-0 mb-24 font-bold title">
									Regen EMS  FAQ
								</h1>
								<h4 className="mt-0 mb-16 font-medium">Unlock Your Genetic Health Potential</h4>
								<p className="mt-0 mb-32 font-md font-regular text-white">
								At Regen PhD, we specialise in advanced diagnostic techniques like eDNA analysis, MAI Scan, and Bone Scan to provide personalised insights into your health. Our expert team, led by Professor Paul Lee, is dedicated to helping you achieve optimal well-being through tailored health plans and proactive care, ensuring long-term vitality and strength.
								</p>
								<Stack spacing={2} direction="row" alignItems="center">
								</Stack>
							</Grid>
							<Grid item xs={12} md={6} className="left-container">
								<img src={require("../../assets/Images/banner/about-banner.jpg")} className="about-top" style={{filter:"drop-shadow(0px 2px 10px #fff)"}} alt="Personalised health diagnostics"/>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSplit;
