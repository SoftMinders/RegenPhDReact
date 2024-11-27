import React,{useEffect,useState} from "react";
import classNames from "classnames";
import SectionHeader from "../bone/sections/partials/SectionHeader";
import { Button } from "antd";
import { Link } from "react-router-dom"; // Ensure React Router is set up
import axios from 'axios'; // Axios for HTTP requests




const Blogs = () => {
	// Initialize posts state as an array of any type
	const [posts, setPosts] = useState([]);
	const stripTags = (html) => {
        const decodeHtmlEntities = (html) => {
            const txt = document.createElement("textarea");
            txt.innerHTML = html;
            return txt.value;
        };
    
        const decodedHtml = decodeHtmlEntities(html);

        const returnString = decodedHtml.replace(/<\/?[^>]+(>|$)/g, "");
        return returnString.slice(0, 100) + '...';

    };

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
							style={{marginBottom:"60px"}}
						/> 
						<div className={classNames("tiles-wrap")}>
						<React.Fragment>
						{posts.slice(0, 3).map(post => ( 
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
												{stripTags(post.content)}
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
								href="/blog"
							>
								View All Blogs
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Blogs;
