import React from "react";
import classNames from "classnames";
import {Grid, Stack} from "@mui/material";

class MaiSecondSection extends React.Component {
    render() {
        return (
            <div>
                <section className={classNames("features-tiles mb-160 mt-160")}>
                    <div className="container">
                        <div className={classNames("features-tiles-inner mai-features")}>
                            <h2 className="font-medium gradient-text text-center"><span className="font-bold">Discover</span> the Four Pillars of the MAI Motion</h2>
                            <p>Step into a new era of healthcare where your comfort meets precision. Embrace the perfect balance of relaxation and detailed diagnostics on your journey to optimal well-being.</p>
                            <div className="row pt-4">
                                <div class="col-sm-3">
                                    <div class="icon"><img src={require('../../assets/Images/mai/icon1.png')}/></div>
                                    <div className="mai2-content">
                                        <h4 className="mt-02">Comprehensive Motion Analysis</h4>
                                        <p>MAI-Motion offers a comprehensive analysis of musculoskeletal motion, enabling clinicians and researchers to gain deeper insights into joint dynamics, movement patterns, and biomechanical parameters.</p>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="icon"><img src={require('../../assets/Images/mai/icon2.png')}/></div>
                                    <div className="mai2-content">
                                        <h4 className="mt-02">3D Mesh<br/>Technology</h4>
                                        <p>Our advanced 3D mesh technology captures detailed motion data, creating a visual representation of joint movement with unparalleled accuracy. This allows for a comprehensive understanding of the intricacies of musculoskeletal motion.</p>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="icon"><img src={require('../../assets/Images/mai/icon3.png')}/></div>
                                    <div className="mai2-content">
                                        <h4 className="mt-02">Integration with 3D Volumetric MRI</h4>
                                        <p>MAI-Motion goes beyond traditional motion analysis by integrating with 3D volumetric MRI data. This integration enables the correlation of motion data with structural information, providing a holistic view of musculoskeletal health.</p>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="icon"><img src={require('../../assets/Images/mai/icon4.png')}/></div>
                                    <div className="mai2-content">
                                        <h4 className="mt-02">AI-Driven Decision Support</h4>
                                        <p>Powered by artificial intelligence, MAI-Motion offers intelligent decision support tools that aid in diagnosis, treatment planning, and rehabilitation strategies. Our algorithms analyse complex motion data and provide evidence-based recommendations for optimal patient care.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default MaiSecondSection;
