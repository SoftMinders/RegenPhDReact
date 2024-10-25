import React from 'react';
import classNames from "classnames";



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
                                <a href=""><span><img src={require("../../assets/Images/home/phone-icon.png")}></img></span>GET IN TOUCH</a>
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
