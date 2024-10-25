import React from "react";
import classNames from "classnames";
import { Grid, Stack } from "@mui/material";

class FeaturesTiles extends React.Component {
	render() {
		return (
			<div style={{ background: "#F3F5F8" }}>
				<section style={{ padding: 0 }} className={classNames("features-tiles dna-features sectio")}>
					<div style={{ maxWidth: 1000, margin: "auto" }}>
						<div className={classNames("features-tiles-inner section-inner")}>
							<h2 class="gradient-text-2 text-center mb-5">Advantages of DNA Health Check</h2>
							<Stack spacing={8} className="feature-tiles px-4">
								<Grid container spacing={2} className="mb-100">
									<Grid item xs={12} md={6}>
										<img
											style={{ width: "100%" }}
											alt="In-Depth Bone Analysis"
											src={require("../../../assets/Images/banner/image1.jpg")}
										/>
									</Grid>
									<Grid item xs={12} md={6} className="left-container">
										<Stack justifyContent="center" style={{ height: "100%" }}>
											<h4 className="mt-02 font-semibold">Personalised Health Insights </h4>
											<p className="mb-0 mt-12 font-md font-regular">
												Tailored to your unique genetic makeup, DNA testing offers personalised recommendations for
												optimising your diet, fitness routine, and overall lifestyle, providing actionable advice
												specific to your body&apos;s needs.
											</p>
										</Stack>
									</Grid>
								</Grid>
								<Grid container spacing={3} className="reverse-column mb-100">
									<Grid item xs={12} md={6}>
										<Stack justifyContent="center" style={{ height: "100%" }}>
											<h4 className="mt-0 font-semibold">Comprehensive Disease Risk Assessment</h4>
											<p className="mb-0 mt-12 font-md font-regular">
												Available to individuals of all ages, DNA testing helps identify your genetic predisposition to
												various health conditions, allowing for early detection and preventive care strategies tailored
												to your personal risk profile.
											</p>
										</Stack>
									</Grid>
									<Grid item xs={12} md={6} className="left-container">
										<img
											alt="Rapid and precise diagnostics"
											src={require("../../../assets/Images/banner/image-dna2.jpg")}
											style={{ width: "100%" }}
										/>
									</Grid>
								</Grid>
								<Grid container spacing={3} className="mb-100">
									<Grid item xs={12} md={6}>
										<img
											style={{ width: "100%" }}
											alt="Proactive Approach"
											src={require("../../../assets/Images/dna/dna4.png")}
										/>
									</Grid>
									<Grid item xs={12} md={6} className="left-container">
										<Stack justifyContent="center" style={{ height: "100%" }}>
											<h4 className="mt-0 font-semibold">Optimised Fitness and Performance</h4>
											<p className="mb-0 mt-12 font-md font-regular">
												Designed for athletes and fitness enthusiasts, DNA testing offers insights into how your body
												responds to physical activity, helping you tailor your workouts and recovery plans for optimal
												performance and reduced injury risk.
											</p>
										</Stack>
									</Grid>
								</Grid>
								<Grid container spacing={3} className="reverse-column mb-100">
									<Grid item xs={12} md={6}>
										<Stack justifyContent="center" style={{ height: "100%" }}>
											<h4 className="mt-0 font-semibold">Holistic Approach to Well-Being</h4>
											<p className="mb-0 mt-12 font-md font-regular">
												Accessible to everyone, DNA testing not only focuses on physical health but also provides
												insights into stress management and mental well-being, offering a complete picture of your
												overall health for proactive management.
											</p>
										</Stack>
									</Grid>
									<Grid item xs={12} md={6} className="left-container">
										<img
											style={{ width: "100%" }}
											alt="Ideal for Diverse range"
											src={require("../../../assets/Images/banner/dna123.jpg")}
										/>
									</Grid>
								</Grid>
							</Stack>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default FeaturesTiles;
