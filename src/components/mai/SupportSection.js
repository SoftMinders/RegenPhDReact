import React from "react";
import classNames from "classnames";

class SupportSection extends React.Component {
    render() {
        return (
            <div>
                <section className={classNames("features-tiles mb-160")}>
                    <div className="container">
                        <div className={classNames("features-tiles-inner mai-support")}>
                            <h2 className="font-medium gradient-text-2 text-center"><span className="font-bold">Supported</span> By</h2>
                            <div className="row pt-4">
                                <div class="col-sm-4">
                                    <img src={require('../../assets/Images/mai/ktp.png')} alt="Bone density and health scan"/>
                                </div>
                                <div class="col-sm-4">
                                    <img src={require('../../assets/Images/mai/uol.png')} alt="Musculoskeletal health improvement"/>
                                </div>
                                <div class="col-sm-4">
                                    <img src={require('../../assets/Images/mai/msk.png')} alt="AI-powered musculoskeletal diagnostics"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default SupportSection;
