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
					<h2>General Information</h2>
					<Accordion>
						<AccordionItem title="What is Electrical Muscle Stimulation (EMS)?">
                        EMS uses electrical impulses to induce muscle contractions, replicating natural signals from the brain to muscles. This process enhances muscle strength, endurance, and recovery.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="What is Transcutaneous Electrical Nerve Stimulation (TENS)?">
                        TENS delivers low-voltage electrical currents through the skin to stimulate nerves, aiming to alleviate pain by disrupting pain signals before they reach the brain.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="How do EMS and TENS differ?">
                        While both use electrical impulses, EMS targets muscle activation to improve strength and rehabilitation, whereas TENS focuses on nerve stimulation to provide pain relief.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="What is the warranty period for the Regen-EMS device?">
                        The Regen-EMS device comes with a standard 2-year warranty. Registering your device on our website extends the warranty by an additional year, totaling 3 years of coverage.
						</AccordionItem>
					</Accordion>
					<h2>Safety and Usage Guidelines</h2>

					<Accordion>
						<AccordionItem title="Is Regen-EMS safe to use?">
                        Yes, both EMS and TENS models are designed with safety in mind and are UKCA approved. However, individuals with pacemakers, epilepsy, or those who are pregnant should consult a healthcare professional before use.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="Are there any contraindications for using EMS or TENS?">
                        Avoid using EMS or TENS devices if you have pacemakers, epilepsy, or are pregnant without medical advice. Always consult a healthcare provider if you have specific concerns.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="Can I use the Regen-EMS device if I have metal implants?">
                        Generally, EMS and TENS devices can be used by individuals with metal implants, but it’s crucial to consult a healthcare professional before use.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="Are there any long-term risks associated with using EMS or TENS devices?">
                        When used as directed, EMS and TENS devices are safe for long-term use. Follow recommended guidelines and consult healthcare professionals for concerns.
						</AccordionItem>
					</Accordion>
					<h2>Getting Started and Maintenance</h2>
					<Accordion>
						<AccordionItem title="How do I get started with Regen-EMS?">
                        Visit our clinic or website to schedule a consultation. Our experts will design a customised program based on your health profile and goals.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="Where can I place the electrodes for EMS and TENS?">
                        Electrode placement varies: EMS targets specific muscle groups, and TENS targets areas of pain. Follow the manufacturer’s guidelines or consult a professional.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="How often should I replace the electrode pads?">
                        Replace electrode pads every two weeks under normal use. If you use the device frequently or notice reduced adhesion, replace them sooner.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="How do I maintain and clean my Regen-EMS device?">
                        Clean the device as per the manufacturer's instructions. Store it in a cool, dry place and keep the electrodes in their protective packaging.
						</AccordionItem>
					</Accordion>
					<h2>Functionality and Features</h2>
					<Accordion>
						<AccordionItem title="How long does the battery last on the Regen-EMS device?">
                        Battery life varies with use. On average, it lasts between 15 and 20 hours of continuous use.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="How many times can I use the electrode pads before replacing them?">
                    	Electrode pads can typically be used 15–30 times, depending on skin type and preparation.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="Can I travel with my Regen-EMS device?">
                        Yes, the devices are portable and travel-friendly. Be aware of airline regulations for electronic devices before flying.
						</AccordionItem>
					</Accordion>
					<h2>Usage Recommendations</h2>
					<Accordion>
						<AccordionItem title="How often should I use Regen-EMS devices?">
                        Sessions typically range from 15 to 30 minutes, 3–4 times a week. Personalised programs can optimise results.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="Can EMS replace traditional workouts?">
                        EMS complements but does not replace traditional workouts. It enhances muscle activation when combined with regular exercise.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="What position should I be in during EMS sessions?">
                        For strong muscle contractions, position the body part against an immovable object to ensure isometric contractions. For recovery, maintain a relaxed position.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="Can I combine EMS sessions with voluntary training?">
                        Yes, EMS can be combined with voluntary training to enhance results, whether before, during, or after workouts.
						</AccordionItem>
					</Accordion>
					<h2>Skin and Electrode Care</h2>

					<Accordion>
						<AccordionItem title="How should I care for my skin when using EMS or TENS devices?">
                        Clean skin with soap and water before use. Inspect the skin after sessions for irritation, and discontinue use if redness or discomfort occurs.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="Can I use the Regen-EMS devices on injured or inflamed skin?">
                        Avoid using electrodes on broken or irritated skin to prevent further discomfort.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="Are replacement electrodes available for purchase?">
                        Yes, replacement electrodes are available through our website and authorised retailers.
						</AccordionItem>
					</Accordion>
					<h2>Pain Management and Advanced Use</h2>
					<Accordion>
						<AccordionItem title="What should I do if I experience discomfort during a session?">
                       	Reduce intensity or stop the session immediately. Consult a healthcare professional before resuming use.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="How do I find the exact motor point for electrode placement?">
                        Refer to the user manual for diagrams or use a motor point pen for precise placement. A physiotherapist can provide guidance.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="Can I use the EMS or TENS device while sleeping?">
                        No, avoid using EMS or TENS devices while sleeping for safety reasons.
						</AccordionItem>
					</Accordion>
					<h2>Special Populations and Additional Features</h2>
					<Accordion>
						<AccordionItem title="Who can benefit from using Regen-EMS devices?">
                        •EMS Model: For athletes, rehabilitation, and muscle strengthening.<br/>
						•TENS Model: For individuals managing chronic or acute pain, including arthritis or back pain.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="Are there age restrictions for using EMS or TENS devices?">
                        Devices are intended for adults. Safety and efficacy in children are not established; consult a professional before use for individuals under 18.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="Is there a risk of developing muscular imbalances with EMS training?">
                       	Balanced training programs targeting all muscle groups prevent imbalances.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="How do I use EMS for training and performance enhancement?">
                        EMS can be used to supplement training by targeting specific muscle groups for strength and endurance.<br/>
						•Warm-Up: Use low-intensity settings to prepare muscles for activity.<br/>
						•Strength Training: Apply EMS to major muscle groups like quadriceps, hamstrings, or biceps during or after a workout.<br/>
						•Recovery: After exercise, use a recovery program to reduce muscle soreness and promote circulation.<br/>
						•Guidelines: Sessions typically last 20–30 minutes per muscle group. Consult a trainer or physiotherapist for personalised programs.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="How do I use TENS for pain relief during training?">
                        TENS helps manage pain associated with intense training or minor injuries.<br/>
						•Before Training: Apply TENS to areas prone to discomfort, like knees or shoulders, to reduce pain and improve mobility.<br/>
						•After Training: Use TENS on sore areas to alleviate discomfort and speed recovery.<br/>
						•Settings: Start with low intensity and gradually increase until a comfortable tingling sensation is achieved.

						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="How do I use EMS for arthritis management?">
                        EMS can help alleviate arthritis symptoms by improving joint stability and muscle strength.<br/>
						•Strengthening: Apply EMS to surrounding muscles to reduce the load on affected joints. For example, use EMS on quadriceps for knee arthritis or on the shoulder for upper-limb arthritis.<br/>
						•Frequency: Use 3–5 times a week, with 15–20 minute sessions per area. Start with low intensity and gradually increase as tolerated.<br/>
						•Consultation: Always consult a healthcare provider to tailor EMS usage to your condition.

						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="How do I use TENS for arthritis pain relief?">
                        TENS is highly effective for managing arthritis pain by blocking pain signals and stimulating endorphin release.<br/>
						•Placement: Place electrodes near the painful joint, such as the knee, hip, or fingers, following the device manual.<br/>
						•Duration: Sessions typically last 20–30 minutes, up to three times per day as needed.<br/>
						•Settings: Start with a low-frequency mode for chronic pain or a high-frequency mode for acute flare-ups. Adjust intensity to a comfortable level.
						</AccordionItem>
					</Accordion>
					<Accordion>
						<AccordionItem title="Best Practices for Using EMS and TENS for Arthritis">
						•Consistency is Key: Regular use can improve results over time.<br/>
						•Avoid Overuse: Limit to recommended durations to prevent fatigue or skin irritation.<br/>
						•Combine with Other Therapies: EMS and TENS work well alongside physiotherapy, medication, and exercise.<br/>
						The information provided in this FAQ is for educational purposes only and is not intended to replace professional medical advice, diagnosis, or treatment. Always consult a healthcare provider before using EMS or TENS devices, particularly if you have underlying health conditions, are pregnant, or use implanted medical devices. Follow the manufacturer's instructions and guidelines for safe use. Regen-EMS devices are designed to complement, not replace, traditional medical treatments or physical exercise programs. Individual results may vary, and improper use may lead to discomfort or injury. Use responsibly and discontinue use if any adverse reactions occur.
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default Faq;
