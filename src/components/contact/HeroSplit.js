import React from "react";
import classNames from "classnames";
import {Grid} from "@mui/material";

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
									Contact Us
								</h1>
								<h4 className="mt-0 mb-16 font-medium">Get In Touch With Us</h4>
								<p className="mt-0 mb-32 font-md font-regular text-white">
								We’re here to assist you on your health journey! If you have any questions, need more information about our services, or would like to schedule an appointment, please fill out the form below. Our dedicated team at Regen PhD will respond promptly to ensure you receive the support you need. Your health and well-being are our top priorities, and we look forward to helping you achieve your goals.
								</p>
							</Grid>
							<Grid item xs={12} md={6} className="left-container">
								<img src={require("../../assets/Images/banner/contact.jpg")} className="about-top" style={{filter:"drop-shadow(0px 2px 10px #fff)"}} alt="regenPhD Contact"/>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSplit;
