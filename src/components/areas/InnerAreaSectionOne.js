import React from "react";
import classNames from "classnames";
import {Grid, Stack} from "@mui/material";
import {ArrowRightOutlined} from "@ant-design/icons";


class InnerAreaSectionOne extends React.Component {
    render() {
        return (
            <div>
                <section className={classNames("features-tiles section mb-160")}>
                    <div className="container" style={{maxWidth:'1000px'}}>
                        <div className={classNames("features-tiles-inner")}>
                            <Stack spacing={8} className="feature-tiles pt-4">
                                <Grid container className="mb-100">
                                    <Grid item xs={12} md={4} className="position-relative">
                                        <div className="area-service">
                                            <ul>
                                                <li><a href=""><img src={require('../../assets/Images/home/nav-bone.png')}></img> Bone <ArrowRightOutlined /></a></li>
                                                <li><a href=""><img src={require('../../assets/Images/home/nav-dna.png')}></img> DNA <ArrowRightOutlined /></a></li>
                                                <li><a href=""><img src={require('../../assets/Images/home/nav-mai.png')}></img> MAI <ArrowRightOutlined /></a></li>
                                            </ul>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={8} className="left-container">
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h4 className="mt-02 gradient-text-2"><b>It is a long established fact that a reader will be distracted</b></h4>
                                            <p>Available to individuals of all ages, DNA testing helps identify your genetic predisposition to various health conditions, allowing for early detection and preventive care strategies tailored to your personal risk profile.</p>
                                            <p>Many desktop publishing packages and web page editors now</p>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="reverse-column mb-100">
                                    <Grid item xs={12} md={6}>
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                        <h4 className="mt-02 gradient-text-2"><b>Consectetur, from a Lorem Ipsum passage, and going through</b></h4>
                                            <p>Available to individuals of all ages, DNA testing helps identify your genetic predisposition to various health conditions, allowing for early detection and preventive care strategies tailored to your personal risk profile.</p>
                                            <p>of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <img
                                            alt="Learn what movements are important for you"
                                            src={require("../../assets/Images/area/inner-area1.png")}
                                            style={{width: "100%",borderRadius:'30px'}}
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

export default InnerAreaSectionOne;
