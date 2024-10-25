import React from "react";
import classNames from "classnames";
import SectionHeader from "../bone/sections/partials/SectionHeader";
import Accordion from "../bone/elements/Accordion";
import AccordionItem from "../bone/elements/AccordionItem";

const FAQ = () => {
	return (
		<section className={classNames("features-tabs section center-content")} style={{ paddingTop: 0 }}>
			<div className="container">
				<div className={classNames("features-tabs-inner section-inner")} style={{paddingTop:'0'}}>
					<SectionHeader data={{ title: "Frequently Asked Questions" }} className="center-content" />
					<Accordion>
						<AccordionItem title="What services does Regen PhD offer?">
                        Regen PhD provides advanced diagnostic services, including eDNA analysis, MAI Scan, and Bone Scan, designed to assess your unique health profile and create personalized wellness plans.
						</AccordionItem>
						<AccordionItem title="What is eDNA analysis, and how can it benefit me?">
                        eDNA analysis examines your genetic material to identify predispositions to certain health conditions, allowing for a more targeted approach to preventive care and personalized health plans.
						</AccordionItem>
						<AccordionItem title="How can I book an appointment at Regen PhD?">
                        You can easily schedule an appointment by visiting our website, regenphd.com, or by contacting our team via phone or email. We are happy to assist you in finding a time that works for you.
						</AccordionItem>
						<AccordionItem title="What should I expect during my first consultation?">
                        During your first consultation, our specialists will review your medical history, discuss your health goals, and recommend appropriate diagnostic tests. This helps us create a personalized plan tailored to your needs.
						</AccordionItem>
						<AccordionItem title="How often should I undergo retesting?">
                        The frequency of retesting depends on your specific health goals and any conditions being monitored. We generally recommend retesting every 6-12 months to track progress and adjust your health plan accordingly.
						</AccordionItem>
						<AccordionItem title="Are the tests conducted at Regen PhD safe?">
                        Yes, all our diagnostic tests, including eDNA analysis, MAI Scan, and Bone Scan, are non-invasive and safe. They are designed to provide accurate insights into your health with minimal discomfort.
						</AccordionItem>
						<AccordionItem title="Will my insurance cover the services at Regen PhD?">
                        Insurance coverage may vary depending on your policy and provider. We recommend checking with your insurance company to determine if our services are covered under your plan.
						</AccordionItem>
						<AccordionItem title="How soon will I receive my test results?">
                        Test result turnaround times vary depending on the type of test. Most results are available within 1-2 weeks, and our team will contact you to review your results and discuss the next steps.
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
