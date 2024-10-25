import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "assets/styles/bone/style.scss";
import ScrollToTop from "./ScrollToTop";
const BoneLayoutDefault = ({ children, className, service, pageTitle }) => (
	<div className={className}>
		<Header service={service} className="invert-color" navPosition="right" />
		<main className="site-content" pageTitle={pageTitle}>{children}</main>
		<ScrollToTop/>
		<Footer />
	</div>
);

export default BoneLayoutDefault;
