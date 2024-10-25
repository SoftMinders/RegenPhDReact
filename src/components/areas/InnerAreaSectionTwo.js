import React from "react";
import classNames from "classnames";
import {Grid, Stack} from "@mui/material";
import {ArrowRightOutlined} from "@ant-design/icons";


class InnerAreaSectionTwo extends React.Component {
    render() {
        return (
            <div>
                <section className={classNames("features-tiles section mb-160 areasection")}>
                    <div className="container" style={{maxWidth:'1000px'}}>
                        <div className={classNames("features-tiles-inner")}>
                            <Stack spacing={8} className="feature-tiles pt-4">
                                <Grid container className="mb-100">
                                    <Grid item xs={12} md={6} className="position-relative">
                                        <img
                                            alt="Learn what movements are important for you"
                                            src={require("../../assets/Images/area/inner-area2.png")}
                                            style={{width: "100%",borderRadius:'30px'}}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h4 className="mt-02 gradient-text-2"><b>How all this mistaken idea of denouncing pleasure and praising pain</b></h4>
                                            <p>Available to individuals of all ages, DNA testing helps identify your genetic predisposition to various health conditions, allowing for early detection and preventive care strategies tailored to your personal risk profile.</p>
                                            <p>Many desktop publishing packages and web page editors now</p>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} className="reverse-column mb-100">
                                    <Grid item xs={12} md={6}>
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h4 className="mt-02 gradient-text-2"><b>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed.</b></h4>
                                            <p>Available to individuals of all ages, DNA testing helps identify your genetic predisposition to various health conditions, allowing for early detection and preventive care strategies tailored to your personal risk profile.</p>
                                            <p>of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <img
                                            alt="Learn what movements are important for you"
                                            src={require("../../assets/Images/area/inner-area3.png")}
                                            style={{width: "100%",borderRadius:'30px'}}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} className="reverse-column mb-100">
                                    <Grid item xs={12} md={12}>
                                        <div className="blockquote">
                                            <h4 className="mt-02 gradient-text-2"><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container className="mb-100">
                                    <Grid item xs={12} md={6} className="position-relative">
                                        <img
                                            alt="Learn what movements are important for you"
                                            src={require("../../assets/Images/area/inner-area4.png")}
                                            style={{width: "100%",borderRadius:'30px'}}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h4 className="mt-02 gradient-text-2"><b>Nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi</b></h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} className="reverse-column mb-100">
                                    <Grid item xs={12} md={12}>
                                        <div className="blockquote">
                                            <h4 className="mt-02 gradient-text-2"><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                        </div>
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

export default InnerAreaSectionTwo;
