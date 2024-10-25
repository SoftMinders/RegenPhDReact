import React from "react";
import classNames from "classnames";
import {Grid} from "@mui/material";
class News extends React.Component {
    render() {
        return (
            <section className={classNames("featured-in-section section mb-100")} style={{paddingTop: 0}}>
                <div className="container">
                    <div className={classNames("section-inner")}>
                        <p className="font-md mb-0 gradient-text font-medium">Number 1 International Best seller </p>
                        <h2>
                            Regeneration by <span className="font-bold">Design</span>
                        </h2>
                        <div style={{position:'relative'}}>
                            <img src={require("../../assets/Images/home/play-icon.png")} class="playIcon"></img>
                            <img src={require("../../assets/Images/home/video-back.png")} className="featured-image"
                                 alt="Regeneration by design"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default News;
