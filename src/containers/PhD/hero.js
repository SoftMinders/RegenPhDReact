import React from "react";
import classNames from "classnames";
import {Button, Grid, Stack} from "@mui/material";
import {ArrowRightOutlined} from "@ant-design/icons";

const hero = ({hasBgColor, invertColor, ...props}) => {
    return (
        <section
            {...props}
            className={classNames("hero home-hero-section section", hasBgColor && "has-bg-color", invertColor && "invert-color")}
        >
            <div className="container">
                <div className={classNames("hero-inner home-hero section-inner")}>
                    <div className={classNames("split-wrap")}>
                        <Grid container spacing={2} alignItems="center" className="py-4">
                            <Grid className="title-section col-md-7 mr-5">
                                <h1 className="mt-0 mb-24 title">
                                <span className="sub">Personalised <span className="font-bold">Health</span> Design</span>
								</h1>
								<h4 className="mt-0 mb-16 font-medium">Regen PhD Wellness Lab: Stay Young, Be Strong, Live Forever</h4>
								<p className="mt-0 mb-32 font-md font-regular text-white hide-mobile">
								Elevate your wellness journey with a personalised, science-backed wellness experience. Our state-of-the-art gym integrates advanced health diagnostics, including bone density scanning and motion analysis, with tailored fitness programs. Relax in our recovery zones, designed to optimise your hormonal balance, cognitive function, and stress resilience.
								</p>
                            </Grid>
                            <Grid className="home-hero-image col-md-5 mx-auto">
                                <img src={require("../../assets/Images/phd-top.png")} alt="Regen Phd" style={{maxWidth:"300px",margin:"0 auto",display:"block"}}/>
                                <p className="mt-0 mb-32 font-md font-regular text-white hide-desktop">
								Elevate your wellness journey with a personalised, science-backed wellness experience. Our state-of-the-art gym integrates advanced health diagnostics, including bone density scanning and motion analysis, with tailored fitness programs. Relax in our recovery zones, designed to optimise your hormonal balance, cognitive function, and stress resilience.
								</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default hero;
