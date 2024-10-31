import React from 'react';
import classNames from "classnames";
import {Link} from "react-router-dom"
import{XOutlined,LinkedinOutlined} from "@ant-design/icons"

class Teams extends React.Component {

    render() {
        return (
            <div>
                <section className={classNames("features-tiles")}>
                    <div style={{maxWidth: 1000, margin: "auto"}}>
                        <div className={classNames("features-tiles-inner goal-section")}>
                            <h2 className="font-medium text-center gradient-text">Meet The  <span className="font-bold">Experts</span></h2>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="singleteam">
                                        <React.Fragment>
                                            <Link to="/biography/prof-paul-yf-lee">
                                                <img src={require("../../assets/Images/paul2.jpg")} alt=""/>
                                                <h2 class="gradient-text2">Prof. Paul YF Lee</h2>
                                                <p>Cartilage Surgeon</p>
                                            </Link>
                                        </React.Fragment>
                                        <ul class="social">
                                            <li><a href="https://www.linkedin.com/in/paulleephd/?originalSubdomain=uk" target="_Blank"><LinkedinOutlined /></a></li>
                                            <li><a href="https://twitter.com/paulleephd?lang=en" target="_Blank"><XOutlined /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="singleteam">
                                        <React.Fragment>
                                            <Link to="/biography/prof-jon-whitehead">
                                                <img src={require("../../assets/Images/jon.jpeg")} alt=""/>
                                                <h2 class="gradient-text2">Dr. Jon Whitehead</h2>
                                                <p>Senior scientist of Biomedical Biochemistry</p>
                                            </Link>
                                        </React.Fragment>
                                        <ul class="social">
                                            <li><a href="https://www.linkedin.com/in/jon-whitehead-43191338/?originalSubdomain=uk" target="_Blank"><LinkedinOutlined /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
            ;
    }
}

export default Teams;
