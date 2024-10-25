import React from "react";
import classNames from "classnames";
import {Grid} from "@mui/material";

const Hero = ({ hasBgColor, invertColor, ...props }) => {

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
									Biography
								</h1>
								<h4 className="mt-0 mb-16 font-medium">Meet the Experts Behind Your Health Journey</h4>
								<p className="mt-0 mb-32 font-md font-regular text-white">
								At Regen PhD, we go beyond traditional healthcare by offering advanced diagnostics such as eDNA analysis, MAI Scan, and Bone Scan. These cutting-edge technologies allow us to uncover detailed insights about your genetic predispositions and overall health, creating a clearer picture of your unique needs. Led by the renowned Professor Paul Lee and Professor Jon Whitehead, our team is committed to designing personalized health plans that address your specific goals. Whether you’re looking to enhance your vitality, prevent potential health risks, or achieve peak physical performance, we provide the expertise and guidance needed to help you thrive for years to come.
								</p>
							</Grid>
							<Grid item xs={12} md={6} className="left-container">
								<img src={require("../../assets/Images/biography-top.jpg")} className="about-top" style={{filter:"drop-shadow(0px 2px 10px #fff)"}}/>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
