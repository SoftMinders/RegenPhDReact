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
									Advanced, Non-Invasive <br /> Genetic Insights
								</h1>
								<h4 className="mt-0 mb-16 font-medium">Unlock Your Genetic Health Potential</h4>
								<p className="mt-0 mb-32 font-md font-regular text-white">
									Discover a cutting-edge, non-invasive solution for assessing your genetic predispositions across a
									wide range of health areas. Our DNA testing provides a quick and precise analysis of over 300 genetic
									markers, offering deep insights into your overall well-being, from nutrition and fitness to disease
									risk. Empowering you to make informed, proactive decisions for a healthier future.
								</p>

								<Stack spacing={2} direction="row" alignItems="center">
									<a className="about-top-btn button" href={`${process.env.REACT_APP_REDIRECT_DOMAIN}/order/dna/`} target="_Blank">&nbsp; &nbsp; &nbsp; BOOK TEST</a>
								</Stack>
							</Grid>
							<Grid item xs={12} md={6} className="left-container">
								<img src={require('../../../assets/Images/banner/Dna.jpg')} className="top-img" style={{filter:"drop-shadow(0px 2px 10px #fff)"}}/>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSplit;
