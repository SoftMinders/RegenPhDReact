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
							<img src={require("../../../assets/Images/white_logo.png")} style={{display:'block',margin:'0px auto 30px auto'}}></img>
							<FooterNav />
							<FooterSocial />
							<hr style={{borderTopColor:'#fff',margin:'30px 0'}}></hr>
							<div class="row">
								<div class="col-sm-6">
								<div className="footer-copyright text-white">&copy; 2024 RegenPhD, All Rights Reserved | Powered By <a href="https://softmindersinc.com/" target="_Blank">Soft Minders</a></div>
								</div>
								<div class="col-sm-6">
									<React.Fragment>
										<ul class="nav extranav">
											<li class="home"><Link to="/privacy-policy">Privacy Policy</Link></li> | 
											<li class="home"><Link to="/terms-conditions">Terms & Conditions</Link></li>
										</ul>
									</React.Fragment>
								</div>
							</div>
							
						</div>
					</div>
				</footer>
				<footer class="mobile-footer">
					<div>
						<React.Fragment>
							<ul class="nav">
								<li class="home">
									<Link to="/phd">
										<img src={require('../../../assets/Images/phd-icon-color.png')}/> PdD
									</Link>
								</li>
								<li class="bone">
									<Link to="/bone">
									<img src={require('../../../assets/Images/home/nav-bone.png')}/> BONE
									</Link>
								</li>
								<li class="mai">
									<Link to="/mai">
										<img src={require('../../../assets/Images/home/nav-mai.png')}/> MAI
									</Link>
								</li>
								<li class="dna">
									<Link to="/dna">
										<img src={require('../../../assets/Images/home/nav-dna.png')}/> DNA
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
