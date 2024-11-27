import React from "react";
import classNames from "classnames";
import {Grid,Stack} from "@mui/material";

const hero = ({hasBgColor, invertColor, ...props}) => {
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
									Blogs
								</h1>
								<h4 className="mt-0 mb-16 font-medium">Latest News & Articles</h4>
								<p className="mt-0 mb-32 font-md font-regular text-white">Stay informed and inspired with the latest insights from Regen PhD. Our blog covers a wide range of topics, including advanced diagnostic techniques, personalized health strategies, and tips for achieving optimal well-being. Whether you're looking to understand your body better or stay up to date with new health trends, our expert content is here to guide you.</p>
								<Stack spacing={2} direction="row" alignItems="center">
									<a className="about-top-btn button" href=""><span><img src={require("../../assets/Images/home/phone-icon.png")} alt=""></img></span> Let's Talk</a>
								</Stack>
							</Grid>
							<Grid item xs={12} md={6} className="left-container">
								<img src={require("../../assets/Images/blog-top.jpg")} className="about-top" style={{filter:"drop-shadow(0px 2px 10px #fff)"}} alt=""/>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</section>
	);
};

export default hero;
