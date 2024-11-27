import React from 'react';
import classNames from "classnames";
import {Link} from "react-router-dom"



class Cta extends React.Component {

    render() {
        return (
            <div>
                <section className={classNames("cta mb-160")}>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                            <h2>Personal Health Design</h2>
                            <p>Proactive Health Management, blending cutting-edge science with personalised wellness</p>
                            </div>
                            <div class="col-sm-6 text-right">
                                <React.Fragment>
                                    <Link to="/contact" className="gradbtn"><span><img src={require("../../assets/Images/home/phone-icon.png")} alt="Call regenPhD"></img></span>GET IN TOUCH</Link>
                                </React.Fragment>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
            ;
    }
}


export default Cta;
