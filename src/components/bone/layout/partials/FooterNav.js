import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
	const classes = classNames("footer-nav", className);

	return (
		<nav {...props} className={classes}>
			<ul className="list-reset">
				<li>
					<Link to="/" className="text-white">
						Home
					</Link>
				</li>
				<li>
					<Link to="/about" className="text-white">
						About
					</Link>
				</li>
				<li>
					<Link to="/bone/" className="text-white">
						Bone
					</Link>
				</li>
				<li>
					<Link to="/mai" className="text-white">
						MAI
					</Link>
				</li>
				<li>
					<Link to="/dna/" className="text-white">
						DNA
					</Link>
				</li>
				<li>
					<Link to="/biography/" className="text-white">
						Biography
					</Link>
				</li>
				<li>
					<Link to="/blog/" className="text-white">
						Blog
					</Link>
				</li>
				<li>
					<Link to="/contact/" className="text-white">
						Contact Us
					</Link>
				</li>
				<li>
					<a href="https://regenman.com"
					   target="_blank"
					   rel="noreferrer" className="text-white">
						Books
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default FooterNav;
