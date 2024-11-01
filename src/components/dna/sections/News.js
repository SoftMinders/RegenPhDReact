import React,{useEffect,useState} from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import BoneDensityImage from "assets/Images/bone/bone-density.webp";
import ComparingREMSImage from "assets/Images/bone/comparing-rems.webp";
import OsteoporosisImage from "assets/Images/bone/osteoporosis.webp";
import { Button } from "antd";
import { Link } from "react-router-dom"; // Ensure React Router is set up
import axios from 'axios'; // Axios for HTTP requests




const News = () => {
	// Initialize posts state as an array of any type
	const [posts, setPosts] = useState([]);

	// Fetch data on component mount
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://admin.regenphd.com/api/v1/get-all-regenphd-blogs', {
					headers: {
						'Token': 'TrgG&684#5ghvGFbfd*767hDSr' // Add custom headers here
					}
				});
				setPosts(response.data); // Set posts with fetched data
			} catch (error) {
				console.error(error); // Log error if request fails
			}
		};

		fetchData(); // Call fetch function
	}, []); // Empty dependency array to run only on mount
	return (
		<div  className="illustration-section-01" >
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
						{posts.map(post => ( 
							<div className="tiles-item reveal-from-bottom">
								<div className="tiles-item-inner has-shadow">
									<figure className="news-item-image m-0">
										<img src={post.featured_image} alt={post.title} width={344} height={254} />
									</figure>
									<div className="news-item-content">
										<div className="news-item-body">
											<h3 className="news-item-title h5 mt-0 mb-8">
												<Link to={`/blog/${post.slug}`} className="font-medium">
												{post.title}
												</Link>
											</h3>
											<p className="mb-16 font-legacy font-regular">
												Bone scanning test, a vital diagnostic tool, offers valuable insights into bone health. At Regen PhD, we employ advanced bone scanning techniques …
											</p>
										</div>
										<div className="news-item-more text-xs mb-8">
											<Link to={`/blog/${post.slug}`} className="font-medium">
												View Article
											</Link>
										</div>
									</div>
								</div>
							</div>
							))}
						</React.Fragment>
						</div>
						<div className="text-center mt-xxl-4">
							<Button
								size="large"
								className="primary-button blue font-medium"
								style={{ minHeight: 45, marginTop: 40, lineHeight: "42px" }}
								href="/research"
							>
								Research Articles
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default News;
