import React from "react";
import{LinkedinOutlined} from "@ant-design/icons"


export const Jon = (): React.ReactElement => {
    return (
        <>
            <section className="hero home-hero-section section has-bg-color invert-color">
                <h1>Prof. Jon Whitehead</h1>
            </section>
            <div className="container">
                <div className="single-team">
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={require("../../assets/Images/jon.jpeg")} alt=""/>
                        </div>
                        <div className="col-sm-8">
                            <h2>Prof. Jon Whitehead</h2>
                            <span>Professor of Biomedical Biochemistry</span>
                            <p>Jon Whitehead is a distinguished biomedical researcher with three decades of experience delving into the molecular and cellular mechanisms affecting adiposity (obesity), insulin sensitivity, and diabetes. Over 22 years, he has excelled in leading and working within premier research institutes in the UK and Australia. For the last 8 years, he has transitioned to academia in the UK, continuing to advance his field.</p>
                            <p>Jon's research has been bolstered by numerous fellowships and grants from esteemed organizations such as the Wellcome Trust, the Australian National Health & Medical Research Council (NHMRC), Diabetes Australia, and Diabetes UK. These opportunities have allowed him to mentor over 40 PhD students and early career researchers, publish 90 influential papers, and contribute to intellectual property that spurred commercial spinouts.</p>
                            <p>Recognizing the growing disparity between our evolutionary origins and contemporary lifestyles, Jon has recently broadened his research scope. He now investigates the complex interactions between diet, physical activity, and sleep, and their cumulative impact on health and wellbeing throughout the human lifespan. His forward-looking research aims to identify, support, and develop both molecular (medical) and societal (behavioural) strategies to mitigate the negative effects of 21st-century living, benefiting individuals and communities alike.</p>
                            <p>Jon collaborates closely with Prof. Paul Lee at the London Cartilage Clinic. His expertise in fat cells and stem cells plays a crucial role in innovating treatments for joint and cartilage regeneration. His extensive research experience, coupled with a robust academic background, significantly contributes to advancing the clinic’s regenerative medicine endeavours.</p>
                            <h4>Connect With Me On</h4>
                            <ul className="social">
                                <li><a href="https://www.linkedin.com/in/jon-whitehead-43191338/?originalSubdomain=uk" target="_Blank" rel="noreferrer"><LinkedinOutlined /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
