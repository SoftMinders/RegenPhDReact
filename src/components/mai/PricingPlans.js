import React,{useState} from "react";
import classNames from "classnames";
import SectionHeader from "./SectionHeader";
import {Button, Grid, Stack} from "@mui/material";

interface PricingTabProps {
  planName: string,
  price: {
    monthly: number,
    yearly: number
  },
  planDescription: string,
  features: string[]
}

function PricingTab(props: PricingTabProps) {
  return (
  	<Grid item xs={12} md={6} className={`h-full ${props.popular ? 'dark' : ''} tiles-item-mai reveal-from-bottom`}>
		<div className="tiles-item-inner has-shadow">
			<Stack spacing={4} className="pricing-item-content">
				<div className="pricing-item-header mb-24">
					<div className="text-center mt-24">
						<span className="pricing-item-price-amount h1 font-semibold">£{props.yearly ? props.price.yearly : props.price.monthly} <small>{props.yearly ? '/Year' : '/Month'}</small></span>
					</div>
					<div className="pricing-item-price ">
						<span className="pricing-item-price-amount font-medium h3 text-center">
							{props.planName}
						</span>
					</div>
				</div>
				<div className="pricing-item-features mb-40">
					<div className="pricing-item-features-title font-medium h6 text-xs text-color-high mb-24">
						What’s included
					</div>
					<ul className="pricing-item-features-list list-reset text-xs mb-32">
					{props.features.map((feature, index) => {
			            return (
			              <li key={index} className="is-checked">
			                <span>{feature}</span>
			              </li>
			            )
			        })}
					</ul>
				</div>
			</Stack>
			<div className="pricing-item-cta text-center mb-8">
				<Button
					onClick={() => window.open(`https://app.regenphd.com/appointment/mai`, "_blank")}
					className="outlined-button blue"
					size="large"
				>
					Order now
				</Button>
			</div>
		</div>
	</Grid>
  )
}


const PricingPlans = () => {
	const [yearly, setYearly] = useState(false);
	const [isAnnual, setIsAnnual] = useState(true);
	return (
		<section className={classNames("pricing pricing-mai section mb-160")}>
		  <div className="container">
		  <div style={{maxWidth:'1000px',textAlign:'center',margin:'0 auto'}}>
		  	<h2 className="gradient-text-2">Reasonable & Flexible Plans</h2>
			<p>Find the perfect plan for your needs by comparing the features included in each. Whether you're an individual patient, a doctor managing a practice, or an administrator overseeing a clinic, we have tailored plans to suit your requirements.</p>
		  </div>
			<div>
		      {/* Pricing toggle */}
		      <div className="text-center">
		        <div className="pricingToggle">
		          <button className={`${yearly ? '' : 'active'}`} onClick={() => setYearly(false)} aria-pressed={isAnnual}>Monthly</button>
		          <button className={`${yearly ? 'active' : ''}`} onClick={() => setYearly(true)} aria-pressed={isAnnual}>Yearly</button>
		        </div>
		      </div>
		      	<div className={classNames("pricing-inner section-inner")}>
		      			<div className={classNames("tiles-wrap")}>
		      				<Grid container spacing={2} justifyContent="center">
		      					{/* Pricing tab 1 */}
		      					<PricingTab
						          yearly={yearly}
						          planName="Standard Plan"
						          price={{ yearly: 99.99, monthly: 9.99 }}
						          planDescription="There are many variations available, but the majority have suffered."
						          features={[
						            'MAI - Full control',
						            'Dashboard',
						            'PROMS - knee , shoulder, hip',
						            'Can access historical data',
						            'Max 20/mo Detailed Reports',
						        ]} />
								{/* Pricing tab 2 */}
						        <PricingTab
						          yearly={yearly}
						          popular={true}
						          planName="Standard Plan +"
						          price={{ yearly: 199.99, monthly: 99.99 }}
						          planDescription="There are many variations available, but the majority have suffered."
						          features={[
						            'MAI - Full control',
						            'Dashboard',
						            'PROMS(Mandatory) - knee , shoulder, hip',
						            'Can access historical data',
						            'Dynamometer',
						            'Unlimited Detailed Reports',
						        ]} />
								{/* Pricing tab 3 */}
						        <PricingTab
						          yearly={yearly}
						          planName="Advanced Plan"
						          price={{ yearly: 1599.99, monthly: 159.99 }}
						          planDescription="There are many variations available, but the majority have suffered."
						          features={[
						            'MAI - advanced comparison function',
						            'Dashboard',
						            'PROMS - knee , shoulder, hip',
						            'Can access historical data',
						            'Digital Body Bank',
						            'Dynamometer',
						            'Unlimited Detailed Reports',
						        ]} />
		      				</Grid>
		      			</div>
		      		</div>
		      	</div>
		  </div>
		</section>
	);
};

export default PricingPlans;
