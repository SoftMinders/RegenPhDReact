import React from "react";
import{XOutlined,LinkedinOutlined} from "@ant-design/icons"
import {Grid, Stack} from "@mui/material";
import classNames from "classnames";

import SectionHeader from "../../components/bone/sections/partials/SectionHeader";


export const Paul = (): React.ReactElement => {
    return (
        <>
            <section className="hero home-hero-section section has-bg-color invert-color">
                <h1>Professor Paul Lee</h1>
            </section>
            <div className="container">
                <div className="single-team">
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={require("../../assets/Images/paul2.jpg")} alt=""/>
                        </div>
                        <div className="col-sm-8">
                            <h2>Professor Paul Lee</h2>
                            <span>Cartilage Surgeon</span>
                            <p>(MBBch, MFSEM (UK), MRCS, MSc (Sports Med), PhD (Medical Engineering), FEBOT(Eu), FRCS (Tr & Orth)</p>
                            <h4>Consultant Cartilage Surgeon, Regeneration Medicine Doctor</h4>
                            <p>Internationally renowned cartilage expert doctor, engineer and scientist.<br/>
                            Professor Paul Lee specialises in all forms of cartilage conditions. Being a doctor as well as an engineer, his approach to medicine is truly ‘one of a kind’. He is able to offer a balanced and up to date opinion between regeneration, surgical and non-surgical management of cartilage issues. He has treated UK Premiership footballers with great results and is also at the forefront of cell therapy development. Paul as also a key member of the International Cartilage Regeneration & Joint Preservation Society.</p>
                            <h4>Arthrosamid injection – Advance joint injection for arthritis</h4>
                            <p>He was appointed as consultant orthopaedic surgeon with specialist interest in arthroplasty, sports and regenerative lower limb surgery in 2017 in the NHS. In 2018 he was appointed as a visiting professor for Sports Medicine at the University of Lincoln and founded The Keep Clinic.</p>
                            <h4>Liquid Cartilage – Keyhole cartilage regeneration</h4>
                            <p>In order to further develop education and research, Prof Lee founded MSK Doctors to inspire and promote education and good clinical practice. This led to the development of clinical examination courses, practical workshops and MSK Orthopaedics Research Network. Prof Lee is keen to promote and support orthopaedics and sports medicine research and has supported many undergraduate and postgraduate projects.</p>
                            <p>Over the past 10 years, Prof Lee has achieved research grants of £100,000 pounds. His research interests range from cartilage research, muscle injuries, Actovegin therapy to digital patient engagement and consent. He has over 50 peer reviewed publications. He also has most downloaded paper with Thieme Medical Publisher in 2017.</p>
                            <h4>Connect With Me On</h4>
                            <ul className="social">
                                <li><a href="https://www.linkedin.com/in/paulleephd/?originalSubdomain=uk" target="_Blank"><LinkedinOutlined /></a></li>
                                <li><a href="https://twitter.com/paulleephd?lang=en" target="_Blank"><XOutlined /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className={classNames("info-section news section")} style={{paddingTop: 0}}>
                <div className="container">
                    <div className={classNames("news-inner section-inner")}>
                        <SectionHeader
                            className="center-content reveal-from-bottom"
                            data={{
                                title: "",
                                paragraph: "",
                            }}
                        />
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={12} md={6} className="divider grid-section">
                                <h3 className="font-semibold" style={{marginBottom: 30}}>
                                    World leading Science
                                </h3>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={6}>
                                        <img src={require("../../assets/Images/home/msk-doctors.png")} alt="MSK Doctors" className="info-section-image"/>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <img src={require("../../assets/Images/home/msk-doctors.png")} alt="Lincoln University"
                                             className="info-section-image"/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6} className="grid-section">

                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <div style={{ width: "100%" }}>
                                        <h5 className="font-medium gradient-text" style={{marginBottom: 10}}>
                                            Designed By
                                        </h5>
                                        <h3 className="font-semibold" style={{marginBottom: 30}}>
                                            Prof Paul Lee
                                        </h3>

                                        <p className="font-md">
                                            <img className="mr-4 bullet-img" alt="bullet" src={require("../../assets/Images/home/bullet.png")}/>
                                            Regeneration by Design

                                        </p>
                                        <p className="font-md">
                                            <img className="mr-4 bullet-img" alt="bullet" src={require("../../assets/Images/home/bullet.png")}/>
                                            The Science of Superhuman aging
                                        </p>
                                        <p className="font-md">
                                            <img className="mr-4 bullet-img" alt="bullet" src={require("../../assets/Images/home/bullet.png")}/>
                                            Number 1 International best-selling book

                                        </p>
                                        <img className="mr-4 book-img" alt="Amazon Best Seller" src={require('../../assets/Images/amazon-bestseller.png')} style={{maxWidth:'200px'}}/>
                                    </div>
                                    <img className="mr-4 book-img" alt="Regenman Book" src={require('../../assets/Images/home/book.png')}/>

                                </Stack>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        </>
    );
};
