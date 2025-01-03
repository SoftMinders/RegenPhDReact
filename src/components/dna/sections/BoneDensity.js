import React from "react";
import classNames from "classnames";

import { Grid } from "@mui/material";

class BoneDensity extends React.Component {
	render() {
		return (
			<section className={classNames("features-tabs dna-features2 section center-content")} style={{ paddingTop: 0 }}>
				<div className="container">
					<div className={classNames("features-tabs-inner section-inner mt-160")}>
						<h2 class="gradient-text-2">DeoxyriboNucleic Acid- DNA</h2>
						<p class="mb-100">DNA - detailed look at your unique genetic makeup, with specific genetic differences that can influence overall health and lifestyle. It reveals inherited traits and any potential health risks, helping you make informed choices about your well-being. The genetic make-up of your DNA analysis will help determine a proactive approach to health, ensuring that the lifestyle choices match the genetic strengths and needs.</p>
						
						<Grid container spacing={2}>
							<Grid item xs={12} md={6}>
								<img src={require('../../../assets/Images/dna/dna6.png')} alt="Epigenetics" style={{ width: "100%", borderRadius: 10 }} />
								<p className="mt-4 text-start font-md">
									<span className="font-semibold">Epigenetics</span> determines the biological age, which reflects the
									state of your internal health rather than the number of years you&apos;ve lived, known as your
									chronological age. Epigenetic changes, influenced by lifestyle factors such as diet, stress, exercise,
									and environmental exposures, affect how genes are expressed without altering the DNA itself.
								</p>
							</Grid>
							<Grid item xs={12} md={6} style={{ height: "100%" }}>
								<img src={require('../../../assets/Images/dna/dna7.png')} alt="DNA 12" style={{ width: "100%", borderRadius: 10 }} />
								<p className="mt-4 text-start font-md">
									<span className="font-semibold">DNA12</span> is a personalised monthly health assessment designed to
									provide deeper analysis, to monitor and improve their overall health. The DNA12 report evaluates key
									areas such as cardiac risk, fatigue, ageing, hormone balance, and organ health including the lungs,
									kidneys, liver, and skin.
								</p>
							</Grid>
						</Grid>
					</div>
				</div>
			</section>
		);
	}
}

export default BoneDensity;
