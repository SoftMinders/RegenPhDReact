import React from "react";
import classNames from "classnames";
import {Grid, Stack} from "@mui/material";

class MissionVision extends React.Component {
    render() {
        return (
            <div>
                <section className={classNames("features-tiles mb-160 about-mv")}>
                    <div className="container">
                        <div className={classNames("features-tiles-inner")}>
                            <h2 className="font-medium gradient-text text-center"><span className="font-bold">Our</span> Mission & Vision</h2>

                            <Stack spacing={8} className="feature-tiles px-4 pt-4">
                                <Grid container spacing={2} className="mb-100">
                                    <Grid item xs={12} md={6} className="position-relative">
                                        <img
                                            style={{borderRadius:'30px'}}
                                            alt="Understand how your body works"
                                            src={require("../../assets/Images/about/mission.png")}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Stack justifyContent="center" className="f-content">
                                            <h4 className="mt-02">Our <span className="font-bold">Mission</span></h4>
                                            <p className="mb-0 mt-12 font-md font-regular">At Regen PhD, our mission is to empower individuals to take control of their health through advanced diagnostic technologies and personalised care. We are dedicated to providing comprehensive assessments that uncover unique health insights, enabling our clients to make informed decisions and adopt proactive strategies for optimal well-being and longevity.</p>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="reverse-column mb-100">
                                    <Grid item xs={12} md={6}>
                                        <Stack justifyContent="center"  className="f-content">
                                            <h4 className="mt-02">Our <span className="font-bold">Vision</span></h4>
                                            <p className="mb-0 mt-12 font-md font-regular">Our vision is to revolutionise healthcare by integrating innovative diagnostic methods and personalised health designs into everyday wellness practices. We aspire to be a leader in regenerative health, fostering a community where individuals can thrive through understanding their bodies, mitigating disease risks, and achieving their full potential for a vibrant, healthy life.</p>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <img
                                            alt="Learn what movements are important for you"
                                            src={require("../../assets/Images/about/vision.jpg")}
                                            style={{borderRadius:'30px'}}
                                        />
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

export default MissionVision;
