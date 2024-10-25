import React from "react";
import classNames from "classnames";
import {Grid, Stack} from "@mui/material";

class Tiles extends React.Component {
    render() {
        return (
            <div>
                <section className={classNames("features-tiles section")} style={{paddingTop:"0"}}>
                    <div style={{maxWidth: 1200, margin: "auto"}}>
                        <div className={classNames("features-tiles-inner")}>
                            <Stack spacing={8} className="feature-tiles px-4 pt-4">
                                <Grid container spacing={2} className="mb-100">
                                    <Grid item xs={12} md={6} className="position-relative">
                                        <img
                                            style={{width: "100%",borderRadius:'30px'}}
                                            alt="Understand how your body works"
                                            src={require("../../assets/Images/phd1.jpg")}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h4 className="mt-02">Personal <span
                                                className="font-bold">Health</span> Design</h4>
                                            <p className="mb-0 mt-12 font-md font-regular">Tailor gym plans based on members' genetic, motion, and blood analyses. This aligns with your focus on personal health design, ensuring that each individual gets a regimen suited to their specific needs.</p>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="reverse-column mb-100">
                                    <Grid item xs={12} md={6}>
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h4 className="mt-02">Bone Health and <span
                                                className="font-bold">Motion Analysis</span>Stations
                                            </h4>
                                            <p className="mb-0 mt-12 font-md font-regular">Integrate advanced diagnostics like REMS technology for bone scanning and the MAI Motion Analysis to assess physical movement. This helps individuals monitor and improve their bone density and physical function, preventing injury and ensuring long-term mobility​.</p>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <img
                                            alt="Learn what movements are important for you"
                                            src={require("../../assets/Images/phd2.1.jpg")}
                                            style={{width: "100%",borderRadius:'30px'}}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="mb-100">
                                    <Grid item xs={12} md={6}>
                                        <img
                                            style={{width: "100%",borderRadius:'30px'}}
                                            alt="Plan with Personal Health Design"
                                            src={require("../../assets/Images/phd3.1.jpg")}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h4 className="mt-02"><span
                                                className="font-bold">Digital</span> Integration</h4>
                                            <p className="mb-0 mt-12 font-md font-regular">Use Digital Body Banking technology to create digital twins for each member. This would allow precise tracking of physiological changes and customised interventions. AI-driven insights can provide real-time adjustments to their exercise and wellness plans​.</p>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="reverse-column mb-100">
                                    <Grid item xs={12} md={6}>
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h4 className="mt-02">Recovery and  <span
                                                className="font-bold">Regeneration Areas</span></h4>
                                            <p className="mb-0 mt-12 font-md font-regular">Include spaces dedicated to recovery programs such as hormonal balance optimisation, advanced nutritional planning, and stress resilience. Recovery PhD strategies can help members improve sleep, cognitive function, and immune system health​​.</p>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <img
                                            style={{width: "100%",borderRadius:'30px'}}
                                            alt="Retest and see your health progress"
                                            src={require("../../assets/Images/phd4.jpg")}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="mb-100">
                                    <Grid item xs={12} md={6}>
                                        <img
                                            style={{width: "100%",borderRadius:'30px'}}
                                            alt="Plan with Personal Health Design"
                                            src={require("../../assets/Images/phd5.1.jpg")}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h4 className="mt-02">Cutting-edge <span
                                                className="font-bold">Equipments</span></h4>
                                            <p className="mb-0 mt-12 font-md font-regular">Equip the gym with tools that cater to regenerative health, such as electrical muscle stimulation and low-level laser therapy for recovery​.</p>
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

export default Tiles;
