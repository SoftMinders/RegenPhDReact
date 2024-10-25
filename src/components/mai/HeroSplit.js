import React from "react";
import classNames from "classnames";
import {Grid, Stack} from "@mui/material";
import {Button} from "antd";

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
									Transforming Musculoskeletal Health
								</h1>
								<p className="mt-0 mb-32 font-md font-regular text-white">
									Integrating Advanced 3D Mesh Technology with 3D Volumetric MRI for Unprecedented Insights into Human Motion.
								</p>
								<Stack spacing={2} direction="row" alignItems="center">
									<a className="about-top-btn button" href="tel:0333 335 5848"><span><img src={require("../../assets/Images/home/phone-icon.png")}></img></span> Let's Talk</a>
								</Stack>
							</Grid>
							<Grid item xs={12} md={6} className="left-container">
								<img src={require("../../assets/Images/mai/mai-top.gif")} className="mai-top"/>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSplit;
