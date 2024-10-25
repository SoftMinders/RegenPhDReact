import React from "react";
import classNames from "classnames";
import SectionHeader from "../bone/sections/partials/SectionHeader";
import{Link} from "react-router-dom"

class Blogs extends React.Component {
	render() {
		return (
			<section className={classNames("news section")} style={{ paddingTop: 0 }}>
				<div className="container">
					<div className={classNames("news-inner section-inner")}>
						<SectionHeader
							className="center-content reveal-from-bottom"
							data={{
								title: "Blogs and Articles",
								paragraph: "",
							}}
						/>
						<div className={classNames("tiles-wrap")}>
						<React.Fragment>
								<div className="tiles-item reveal-from-bottom">
									<div className="tiles-item-inner has-shadow">
										<figure className="news-item-image m-0">
											<img src={require('../../assets/Images/blog/blog1.jpg')} alt="Regen PhD Bone Scanning Test" width={344} height={254} />
										</figure>
										<div className="news-item-content">
											<div className="news-item-body">
												<h3 className="news-item-title h5 mt-0 mb-8">
													<Link to="/blog/regen-phd-bone-scanning-test" className="font-medium">
														Regen PhD Bone Scanning Test: A Comprehensive Guide To Benefits
													</Link>
												</h3>
												<p className="mb-16 font-legacy font-regular">
												Bone scanning test, a vital diagnostic tool, offers valuable insights into bone health. At Regen PhD, we employ advanced bone scanning techniques …
												</p>
											</div>
											<div className="news-item-more text-xs mb-8">
												<Link to="/blog/regen-phd-bone-scanning-test" className="font-medium">
													View Article
												</Link>
											</div>
										</div>
									</div>
								</div>

								<div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
									<div className="tiles-item-inner has-shadow">
										<figure className="news-item-image m-0">
											<img src={require('../../assets/Images/blog/blog2.jpg')} alt="Best DNA Testing Centre" width={344} height={254} />
										</figure>
										<div className="news-item-content">
											<div className="news-item-body">
												<h3 className="news-item-title h5 mt-0 mb-8">
													<Link to="/blog/regen-phd-is-best-dna-tesing-care" className="font-medium">
														Why Regen PhD Is Considered As The Best DNA Testing Centre
													</Link>
												</h3>
												<p className="mb-16 font-legacy font-regular">
												Regen PhD has established itself as a leading name in the field of DNA testing, earning a reputation for its exceptional services …
												</p>
											</div>
											<div className="news-item-more text-xs mb-8">
												<Link to="/blog/regen-phd-is-best-dna-tesing-care" className="font-medium">
													View Article
												</Link>
											</div>
										</div>
									</div>
								</div>
							</React.Fragment>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Blogs;
