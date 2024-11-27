import React from "react";
import classNames from "classnames";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";
import { Link } from "react-router-dom";

class Footer extends React.Component {
	render() {
		const { className, topOuterDivider, topDivider, ...props } = this.props;

		const classes = classNames(
			"site-footer invert-color center-content-mobile",
			topOuterDivider && "has-top-divider",
			className,
		);

		return (
			<>
				<footer {...props} className={classes}>
					<div className="container">
						<div style={{textAlign:"center"}}>
							<img src={require("../../../assets/Images/white_logo.png")} style={{display:'block',margin:'0px auto 30px auto'}} alt="regenPhD"></img>
							<FooterNav />
							<FooterSocial />
							<hr style={{borderTopColor:'#fff',margin:'30px 0'}}></hr>
							<div className="row">
								<div className="col-sm-6">
								<div className="footer-copyright text-white">&copy; 2024 RegenPhD, All Rights Reserved | Powered By <a href="https://softmindersinc.com/" target="_Blank" rel="noreferrer">Soft Minders</a></div>
								</div>
								<div className="col-sm-6">
									<React.Fragment>
										<ul className="nav extranav">
											<li className="home"><Link to="/privacy-policy">Privacy Policy</Link></li> | 
											<li className="home"><Link to="/terms-conditions">Terms & Conditions</Link></li>
										</ul>
									</React.Fragment>
								</div>
							</div>
							
						</div>
					</div>
				</footer>
				<footer className="mobile-footer">
					<div>
						<React.Fragment>
							<ul className="nav">
								<li className="home">
									<Link to="/phd">
										<img src={require('../../../assets/Images/phd-icon-color.png')} alt="regenPhD"/> PdD
									</Link>
								</li>
								<li className="bone">
									<Link to="/bone">
									<img src={require('../../../assets/Images/home/nav-bone.png')} alt="regenPhD Bone"/> BONE
									</Link>
								</li>
								<li className="mai">
									<Link to="/mai">
										<img src={require('../../../assets/Images/home/nav-mai.png')} alt="regenPhD MAI"/> MAI
									</Link>
								</li>
								<li className="dna">
									<Link to="/dna">
										<img src={require('../../../assets/Images/home/nav-dna.png')} alt="regenPhD DNA"/> DNA
									</Link>
								</li>
							</ul>
						</React.Fragment>
					</div>
				</footer>
			</>
		);
	}
}

export default Footer;
