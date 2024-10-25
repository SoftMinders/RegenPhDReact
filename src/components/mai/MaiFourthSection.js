import React from "react";
import classNames from "classnames";
import {Grid, Stack} from "@mui/material";

class MaiFourthSection extends React.Component {
    render() {
        return (
            <div>
                <section className={classNames("features-tiles mb-160 mai-features2")}>
                    <div className="container">
                        <div className={classNames("features-tiles-inner")}>
                            <Stack spacing={8} className="feature-tiles px-4 pt-4">
                                <Grid container spacing={2} className="mb-100">
                                    <Grid item xs={12} md={6} className="position-relative">
                                        <img
                                            alt="Connecting Motion to Life"
                                            src={require("../../assets/Images/mai/connecting-motion.gif")}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                            			<h2 className="font-medium gradient-text-2"><span className="font-bold">Quality</span>  Work</h2>
                                        <Stack justifyContent="center" className="f-content">
                                            <h4 className="mt-02">Connecting <span className="font-bold"> Motion to Life</span></h4>
                                            <p>At MAI-Motion, we’ve harnessed the power of advanced 3D mesh technology and integrated it with 3D volumetric MRI object detection. Our tool is designed to provide comprehensive, nuanced, and accurate insights into human motion, underlying anatomical structures, and muscle coordination.</p>
                                            <p>We’re shifting the paradigm of musculoskeletal health by providing a holistic view, combining the external dynamics of movement with the internal mechanics of the musculoskeletal system</p>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="reverse-column mb-100">
                                    <Grid item xs={12} md={6}>
                                        <Stack justifyContent="center"  className="f-content">
                            				<h2 className="font-medium gradient-text-2"><span className="font-bold">VALUES</span></h2>
                                            <h4 className="mt-02">Our <span className="font-bold">Unique Approach</span></h4>
                                            <p>At MAI-Motion, we’ve harnessed the power of advanced 3D mesh technology and integrated it with 3D volumetric MRI object detection. Our tool is designed to provide comprehensive, nuanced, and accurate insights into human motion, underlying anatomical structures, and muscle coordination.</p>
                                            <p>We’re shifting the paradigm of musculoskeletal health by providing a holistic view, combining the external dynamics of movement with the internal mechanics of the musculoskeletal system</p>
                                        	<div className="row">
                                        		<div class="col-md-6">
                                        			<h5 className="font-bold">Available Anywhere</h5>
                                        			<p>We promise to offer you the best rate we can - at par with the industry standard.</p>
                                        		</div>
                                        		<div class="col-md-6">
                                        			<h5 className="font-bold">Kinetic Analysis</h5>
                                        			<p>We assure you that our templates are designed and created by professional designers.</p>
                                        		</div>
                                        	</div>
                                        	<a href="" class="cntbtncmn">GET STARTED</a>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <img
                                            alt="Our Unique Approach"
                                            src={require("../../assets/Images/mai/approach.png")}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} className="mb-100">
                                    <Grid item xs={12} md={6} className="position-relative">
                                        <img
                                            alt="Connecting Motion to Life"
                                            src={require("../../assets/Images/mai/benefit.png")}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                            			<h2 className="font-medium gradient-text-2">The <span className="font-bold">Benefits</span></h2>
                                        <Stack justifyContent="center" className="f-content">
                                            <p>With MAI-Motion, healthcare providers can gain a deep understanding of each patient’s unique movement patterns, joint dynamics, and muscle coordination. Our solution enables more accurate diagnoses, more effective treatment plans, and better patient outcomes.</p>
                                            <p>MAI-Motion gives clinicians, researchers, and patients a deep understanding of motion health like never before. Our tool helps clinicians diagnose and manage musculoskeletal conditions more effectively. Researchers can glean new insights into human movement,while patients gain access to more accurate and personalised treatment.</p>
                                        </Stack>
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

export default MaiFourthSection;
