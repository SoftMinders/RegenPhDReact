import React from "react";
import classNames from "classnames";
import {Grid, Stack} from "@mui/material";
import {Link} from "react-router-dom"

class AboutSecondSection extends React.Component {
    render() {
        return (
            <div>
                <section className={classNames("features-tiles section mb-160 about-features")}>
                    <div className="container">
                        <div className={classNames("features-tiles-inner section-inner")}>
                            <Stack spacing={8} className="feature-tiles px-4 pt-4">
                                <Grid container spacing={2} className="mb-100">
                                    <Grid item xs={12} md={6} className="position-relative">
                                        <img
                                            style={{width: "100%",borderRadius:'30px'}}
                                            alt="Understand how your body works"
                                            src={require("../../assets/Images/paul.jpg")}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h2 class="mt-0 font-bold gradient-text-2 mb-16">Welcome To <img src={require('../../assets/Images/logo.png')} alt="RegenPhD"/></h2>
                                            <h4 className="mt-02"><span
                                                className="font-bold">Comprehensive</span>  Disease Risk Assessment</h4>
                                            <p className="mb-0 mt-12 font-md font-regular">At Regen PhD, our Comprehensive Disease Risk Assessment utilises cutting-edge technology to evaluate your unique genetic and health profile. Through advanced diagnostics such as eDNA analysis and MAI Scan, we identify potential health risks and predispositions to various diseases. This thorough assessment not only highlights areas of concern but also provides actionable insights to help you take charge of your health. By understanding your risk factors, we can design a personalised prevention plan tailored to your needs, empowering you to make informed decisions and adopt lifestyle changes that promote long-term wellness and vitality.</p>
                                        	<React.Fragment>
                                                <Link to="/contact" className="gradbtn">Contact Us</Link>
                                            </React.Fragment>
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

export default AboutSecondSection;
