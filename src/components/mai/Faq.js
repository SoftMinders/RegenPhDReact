import React from "react";
import classNames from "classnames";
import SectionHeader from "../bone/sections/partials/SectionHeader";
import Accordion from "../bone/elements/Accordion";
import AccordionItem from "../bone/elements/AccordionItem";

const Faq = () => {
	return (
		<section className={classNames("features-tabs section center-content")} style={{ paddingTop: 0 }}>
			<div className="container">
				<div className={classNames("features-tabs-inner section-inner")} style={{paddingTop:'0'}}>
					<SectionHeader data={{ title: "Frequently Asked Questions" }} className="center-content" />
					<Accordion>
						<AccordionItem title="What is the current status of MAI-Motion?">
                        MAI-Motion is currently in the research stage and is not yet available for commercial use. Our dedicated team of researchers and developers is actively working on refining and enhancing the technology to ensure its accuracy, reliability, and usability.
						</AccordionItem>
						<AccordionItem title="When can we expect MAI-Motion to be released for commercial use?">
                        We are committed to delivering a high-quality and effective product. While we do not have an exact release date at this time, we are making significant progress in the development of MAI-Motion. We anticipate that it will be available for commercial use in the near future. Please stay tuned for updates and announcements.
						</AccordionItem>
						<AccordionItem title="Can I participate in the research or beta testing of MAI-Motion?">
                        We appreciate your interest in contributing to the development of MAI-Motion. At this time, we are not actively seeking external participation in the research or beta testing phase. However, we value collaboration and would be happy to discuss potential partnerships or research opportunities. Please reach out to us with your inquiries.
						</AccordionItem>
						<AccordionItem title="Will there be a notification or waiting list for the release of MAI-Motion?">
                        Yes, we understand the anticipation surrounding the release of MAI-Motion. To ensure that you receive updates and notifications about its availability, we encourage you to subscribe to our mailing list. By doing so, you will be among the first to be notified when MAI-Motion is released for commercial use.
						</AccordionItem>
						<AccordionItem title="How can I stay informed about the progress of MAI-Motion?">
                        To stay informed about the latest developments and updates regarding MAI-Motion, we recommend visiting our website regularly. Additionally, subscribing to our newsletter and following our social media channels will provide you with timely information and insights into the advancements of MAI-Motion.
						</AccordionItem>
						<AccordionItem title="Are there any plans for future expansions or additional modules within MAI-Motion?">
                        As part of our commitment to advancing musculoskeletal motion analysis, we are continuously exploring opportunities for expansion and the development of additional modules within the MAI-Motion framework. While specific plans are yet to be announced, we remain dedicated to expanding the capabilities and applications of this innovative technology.<br/>
                        If you have any further questions or would like to inquire about research collaborations or partnerships, please don’t hesitate to contact us. We appreciate your interest in MAI-Motion and look forward to sharing more updates with you as we progress towards its commercial release.
						</AccordionItem>
						<AccordionItem title="How does MAI-Motion work?">
                        MAI-Motion utilises computer vision, deep learning algorithms, and advanced imaging techniques to capture and analyse motion data. It creates a detailed 3D mesh of the joints, integrates it with 3D volumetric MRI imaging, and applies AI-driven decision support to enhance diagnosis and treatment planning.
						</AccordionItem>
						<AccordionItem title="How is MAI-Motion used in clinical settings?">
                        MAI-Motion is versatile and can be used in various clinical settings, including physiotherapy, sports medicine, orthopaedics, and occupational health. It aids in the assessment of musculoskeletal disorders, monitoring progress during rehabilitation, optimising sports performance, and providing valuable data for medical legal reporting.
						</AccordionItem>
						<AccordionItem title="Is MAI-Motion suitable for all age groups and conditions?">
                        Yes, MAI-Motion is designed to benefit individuals of all age groups and can be used for a wide range of musculoskeletal conditions. From paediatric patients to seniors, MAI-Motion offers personalised solutions for accurate assessment and effective treatment.
						</AccordionItem>
						<AccordionItem title="Is MAI-Motion user-friendly?">
                        Yes, MAI-Motion is designed with user-friendliness in mind. The technology is intuitive, and the software interface is easy to navigate. Healthcare professionals can quickly capture and analyse motion data, providing efficient and effective care to their patients.
						</AccordionItem>
						<AccordionItem title="Is MAI-Motion supported by scientific evidence?">
                        Yes, MAI-Motion is backed by extensive research and development. The technology has undergone rigorous testing and validation to ensure its accuracy and reliability. Published studies and case reports demonstrate the effectiveness of MAI-Motion in improving musculoskeletal assessment and patient outcomes.
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default Faq;
