import React from "react";
import classNames from "classnames";
import {Grid, Stack} from "@mui/material";

class FeaturesTiles extends React.Component {
    render() {
        return (
            <div>
                <section style={{padding: 0, background: "#F7FCFA"}} className={classNames("features-tiles section mb-160")}>
                    <div style={{maxWidth: 1000, margin: "auto"}}>
                        <div className={classNames("features-tiles-inner section-inner")}>
                            <h2 className="font-medium gradient-text text-center">How It <span
                                className="font-bold">Works</span></h2>

                            <Stack spacing={8} className="feature-tiles px-4 pt-4">
                                <Grid container spacing={2} className="mb-100">
                                    <Grid item xs={12} md={6} className="position-relative">
                                        <img
                                            style={{width: "100%",borderRadius:'30px'}}
                                            alt="Understand how your body works"
                                            src={require("../../assets/Images/home/service1.jpg")}
                                        />
                                        <div className="feature-image-overlay">
                                            <div className="bone box font-semibold">
                                                Bone Scan
                                            </div>
                                            <div className="mai box font-semibold">
                                                MAI Motion
                                            </div>
                                            <div className="dna box font-semibold">
                                                eDNA
                                            </div>
                                        </div>

                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h2 className="mt-02 font-bold gradient-text-2">1.</h2>
                                            <h4 className="mt-02"><span
                                                className="font-bold">Understand</span> how your body works</h4>
                                            <p className="mb-0 mt-12 font-md font-regular">
                                            Understanding how your body works is at the core of Regen PhD's services, which focus on advanced diagnostic techniques like eDNA, MAI Scan, and Bone Scan. These tools provide a detailed look into your body’s functions at a cellular and genetic level, revealing insights into aging, disease susceptibility, and overall health. By analysing eDNA, Regen PhD can detect early signs of potential health issues, while MAI and Bone Scans offer precise imaging for monitoring structural integrity and detecting changes over time. This comprehensive understanding allows for personalised care and proactive strategies, helping you maintain health and enhance well-being.
                                            </p>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="reverse-column mb-100">
                                    <Grid item xs={12} md={6}>
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h2 className="mt-02 font-bold gradient-text-2">2.</h2>
                                            <h4 className="mt-02"><span
                                                className="font-bold">Learn</span> what movements are important for you
                                            </h4>
                                            <p className="mb-0 mt-12 font-md font-regular">
                                            Regen PhD emphasises the importance of understanding which movements are crucial for your body through personalised assessments. Using advanced tools like the MAI Scan, they analyse your body’s structure and movement patterns to identify areas of strength, weakness, and potential risk. This detailed insight allows for tailored exercise plans that focus on movements essential for your specific needs, whether it’s improving joint mobility, enhancing muscle balance, or preventing injury. By understanding the right movements for you, Regen PhD helps optimise your physical performance and ensures that your exercise routine is aligned with your body’s unique requirements for long-term health.
                                            </p>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <img
                                            alt="Learn what movements are important for you"
                                            src={require("../../assets/Images/banner/movement-image.jpg")}
                                            style={{width: "100%",borderRadius:'30px'}}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="mb-100">
                                    <Grid item xs={12} md={6}>
                                        <img
                                            style={{width: "100%",borderRadius:'30px'}}
                                            alt="Plan with Personal Health Design"
                                            src={require("../../assets/Images/home/service3.jpg")}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h2 className="mt-02 font-bold gradient-text-2">3.</h2>
                                            <h4 className="mt-02"><span
                                                className="font-bold">Plan</span> with Personal Health Design</h4>
                                            <p className="mb-0 mt-12 font-md font-regular">
                                            Regen PhD's "Personal Health Design" offers a tailored approach to achieving optimal health. By using advanced diagnostics like eDNA analysis, MAI Scan, and Bone Scan, they provide a deep understanding of your unique biological makeup and health needs. This data-driven approach allows for the creation of a customised health plan that focuses on your individual goals, whether it’s improving mobility, enhancing vitality, or slowing down aging. With insights into how your body functions and potential risk areas, Regen PhD crafts a strategy that integrates nutrition, exercise, and lifestyle modifications, ensuring you follow a plan precisely suited to your needs.
                                            </p>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="reverse-column mb-100">
                                    <Grid item xs={12} md={6}>
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h2 className="mt-02 font-bold gradient-text-2">4.</h2>
                                            <h4 className="mt-02">Retest and see your health <span
                                                className="font-bold">progress</span></h4>
                                            <p className="mb-0 mt-12 font-md font-regular">
                                                Regen PhD emphasises the importance of retesting to track your health progress. Through periodic assessments using tools like eDNA analysis, MAI Scan, and Bone Scan, they provide a clear picture of how your body responds to personalised health interventions over time. Retesting allows you to see improvements in key areas, such as muscle balance, bone density, and genetic health markers, while also identifying any new areas of concern. This ongoing evaluation ensures that your health plan remains effective and adaptable to your evolving needs, helping you make adjustments to optimise your results and maintain long-term wellness with confidence.
                                            </p>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <img
                                            style={{width: "100%",borderRadius:'30px'}}
                                            alt="Retest and see your health progress"
                                            src={require("../../assets/Images/home/service4.jpg")}
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

export default FeaturesTiles;
