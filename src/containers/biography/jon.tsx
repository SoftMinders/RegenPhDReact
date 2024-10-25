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
                            <p>Jon Whitehead is a distinguished Professor of Biomedical Biochemistry at the University of Lincoln, known for his pioneering research in obesity-related diseases. Collaborates closely with Prof. Lee at the London Cartilage Clinic. His expertise in fat cells and stem cells plays a crucial role in innovating treatments for joint and cartilage regeneration. His extensive research experience, coupled with a robust academic background, significantly contributes to advancing the clinic’s regenerative medicine endeavours.</p>
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
