import React from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import {Button, Grid, Stack} from "@mui/material";

const Pricing = () => {

	return (
		<section className={classNames("pricing pricing-mai section")} style={{ background: "#F3F5F8" }}>
			<div className="container">
				<div className={classNames("pricing-inner section-inner")}>
					<h2 class="gradient-text-2 text-center mb-100">Tailored pricing plans designed for you</h2>
					<div className={classNames("tiles-wrap")}>
						<Grid container spacing={2} justifyContent="center">
							<Grid item xs={12} md={6} className="tiles-item reveal-from-bottom">
								<div className="tiles-item-inner has-shadow">
									<Stack spacing={4} className="pricing-item-content">
										<div className="pricing-item-header mb-24">
										<div class="text-center mt-24"><span class="pricing-item-price-amount h1 font-semibold">£350 <small>/Month</small></span></div>
											<div className="pricing-item-price ">
												<span className="pricing-item-price-amount font-medium h3">
													DNA Health Report
												</span>
											</div>
										</div>
										<div className="pricing-item-features mb-40">
											<div className="pricing-item-features-title font-medium h6 text-xs text-color-high mb-24">
												What’s included
											</div>
											<ul className="pricing-item-features-list list-reset text-xs mb-32">
												<li className="is-checked">Health Reports</li>
												<li className="is-checked">Diet Reports</li>
												<li className="is-checked">Vitamin Reports</li>
												<li className="is-checked">Physical Reports</li>
												<li className="is-checked">Supplement Reports</li>
												<li className="is-checked">DNA Action Plan</li>
												<li className="is-checked">Meal Guides</li>
												<li className="is-checked">60+ Health Insights</li>
												<li className="is-checked">Workout Planner</li>
												<li className="is-checked">My Training Area</li>
											</ul>
										</div>
									</Stack>
									<div className="pricing-item-cta text-center mb-8">
										<Button
											onClick={() => window.open(`https://app.regenphd.com/order/dna/`, "_blank")}
											className="outlined-button blue"
											size="large"
										>
											Order now
										</Button>
									</div>
								</div>
							</Grid>
							<Grid item xs={12} md={6} className="tiles-item-mai reveal-from-bottom dark">
								<div className="tiles-item-inner has-shadow" style={{position: "relative"}}>
									<div className="price-ribbon-wrapper">
										<div className="ribbon font-medium" style={{backgroundColor: "#BB43F5"}}>Recommended</div>
									</div>
									<Stack spacing={4} className="pricing-item-content">
										<div className="pricing-item-header mb-24">
											<div class="text-center mt-24"><span class="pricing-item-price-amount h1 font-semibold">£550 <small>/Month</small></span></div>
											<div className="pricing-item-price ">
												<span className="pricing-item-price-amount font-medium h3">
													DNA Health with Epigenetics <br />
												</span>
											</div>
										</div>
										<div className="pricing-item-features mb-40">
											<div className="pricing-item-features-title font-medium h6 text-xs text-color-high mb-24">
												What’s included
											</div>
											<ul className="pricing-item-features-list list-reset text-xs mb-32">
												<li className="is-checked">DNA Health Reports</li>
												<li className="is-checked">Biological Age</li>
												<li className="is-checked">Eye Age</li>
												<li className="is-checked">Memory Age</li>
												<li className="is-checked">Hearing Age</li>
												<li className="is-checked">Inflammation</li>
											</ul>
										</div>
									</Stack>
									<div className="pricing-item-cta text-center mb-8">
										<Button
											onClick={() => window.open(`https://app.regenphd.com/order/dna/`, "_blank")}
											className="outlined-button blue"
											size="large"
										>
											Order now
										</Button>
									</div>
								</div>
							</Grid>
							<Grid item xs={12} md={6} className="tiles-item reveal-from-bottom">
								<div className="tiles-item-inner has-shadow position-relative">
									<div className="price-ribbon-wrapper">
										<div className="ribbon font-medium">Add-On</div>
									</div>
									<Stack spacing={4} className="pricing-item-content">
										<div className="pricing-item-header mb-24">
										<div class="text-center mt-24"><span class="pricing-item-price-amount h1 font-semibold">£350 <small>/Month</small></span></div>
											<div className="pricing-item-price ">
												<span className="pricing-item-price-amount font-medium h3">
													DNA 12 <br />
												</span>
											</div>
										</div>
										<div className="pricing-item-features mb-40">
											<div className="pricing-item-features-title font-medium h6 text-xs text-color-high mb-24">
												What’s included
											</div>
											<ul className="pricing-item-features-list list-reset text-xs mb-32">
												<li className="is-checked">Health Reports</li>
												<li className="is-checked">Cardiac Risk</li>
												<li className="is-checked">Fatigue and Ageing</li>
												<li className="is-checked">Male/ Female Hormones</li>
												<li className="is-checked">Lung, Kidney, Hair and Liver Health</li>
												<li className="is-checked">Skin and Intolerances/ Sensitivities</li>
												<li className="is-checked">Neuro Health and Psychological Traits</li>
											</ul>
										</div>
									</Stack>
									<div className="pricing-item-cta text-center mb-8">
										<Button
											onClick={() => window.open(`https://app.regenphd.com/order/dna/`, "_blank")}
											className="outlined-button blue"
											size="large"
										>
											Order now
										</Button>
									</div>
								</div>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
