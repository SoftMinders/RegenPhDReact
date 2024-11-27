import React from 'react';
import classNames from "classnames";


class Cta extends React.Component {

    render() {
        return (
            <section className={classNames("cta")}>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <h2>Personal Health Design</h2>
                            <p>Proactive Health Management, blending cutting-edge science with personalised wellness</p>
                        </div>
                        <div class="col-sm-6 text-right">
                            <a href="tel:0333 335 5848"><span><img src={require("../assets/Images/home/phone-icon.png")} alt="Call regenPhD"></img></span>GET IN TOUCH</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default Cta;
