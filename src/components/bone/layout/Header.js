import React, {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";
import Logo from "./partials/Logo";
import {Button} from "@mui/material";
import { useLocation } from 'react-router-dom';
import $ from "jquery";

const Header = ({ className, navPosition, hideNav, bottomOuterDivider, bottomDivider, active,service, ...props }) => {
	const location = useLocation()
	const [isActive, setIsActive] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const nav = useRef(null);
	const hamburger = useRef(null);

	useEffect(() => {
		if (active) {
			openMenu();
		}
		document.addEventListener("keydown", keyPress);
		document.addEventListener("click", clickOutside);
		window.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("keydown", keyPress);
			document.removeEventListener("click", clickOutside);
			window.removeEventListener("scroll", handleScroll);
			closeMenu();
		};
	}, [active]);

	useEffect(() => {
		$('nav li').hover(function(){
			$(this).find('.dropdown').show();
		},function(){
			$(this).find('.dropdown').hide();
		});
		
	}, []);

	const openMenu = () => {
		document.body.classList.add("off-nav-is-active");
		if (nav.current) {
			nav.current.style.maxHeight = nav.current.scrollHeight + "px";
		}
		setIsActive(true);
	};
	const closeMenu = () => {
		document.body.classList.remove("off-nav-is-active");
		if (nav.current) {
			nav.current.style.maxHeight = null;
		}
		setIsActive(false);
	};
	const keyPress = (e) => {
		if (isActive && e.keyCode === 27) {
			closeMenu();
		}
	};
	const clickOutside = (e) => {
		if (!nav.current || !isActive || nav.current.contains(e.target) || e.target === hamburger.current) {
			return;
		}
		closeMenu();
	};
	const handleScroll = () => {
		if (window.innerWidth > 820) {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		}
	};
	const classes = classNames(
		"site-header",
		bottomOuterDivider && "has-bottom-divider",
		className,
		isScrolled && "is-scrolled",
	);

	return (
		<header {...props} className={classes}>
			<div className="container">
				<div className={classNames("site-header-inner", bottomDivider && "has-bottom-divider")}>
					<Logo isScrolled={isScrolled} />
					{!hideNav && (
						<React.Fragment>
							<button ref={hamburger} className="header-nav-toggle" onClick={isActive ? closeMenu : openMenu}>
								<span className="screen-reader">Menu</span>
								<span className="hamburger">
									<span className="hamburger-inner"></span>
								</span>
							</button>
							<nav ref={nav} className={classNames("header-nav", isActive && "is-active")}>
								<div className="header-nav-inner">
									<ul className={classNames("list-reset text-xs", navPosition && `header-nav-${navPosition}`)}>
										<li>
											<Link
												style={{ color: isScrolled ? "var(--primary-text)" : "white" }}
												className={location.pathname == '/about' ? "font-semibold font-mlg active" : "font-semibold font-mlg"}
												to="/about"
											>
												About
												{/*<ul className="dropdown">
													<li><Link to="">Our Story</Link></li>
													<li><Link to="/scientific-advisory-committee">Scientific Advisory Committee</Link></li>
													<li><Link to="">Trustee</Link></li>
												</ul>*/}
											</Link>
										</li>
										<li>
											<Link
												style={{ color: isScrolled ? "var(--primary-text)" : "white" }}
												className={location.pathname == '/phd' ? "font-semibold font-mlg active" : "font-semibold font-mlg"}
												to="/phd"
											>
												PhD
											</Link>
										</li>
										<li>
											<Link
												style={{ color: isScrolled ? "var(--primary-text)" : "white" }}
												className={location.pathname == '/bone' ? "font-semibold font-mlg active" : "font-semibold font-mlg"}
												to="/bone"
											>
												Bone
											</Link>
										</li>
										<li>
											<Link
												style={{ color: isScrolled ? "var(--primary-text)" : "white" }}
												className={location.pathname == '/mai' ? "font-semibold font-mlg active" : "font-semibold font-mlg"}
												to="/mai"
											>
												MAI
											</Link>
										</li>
										{/*<li>
											<Link
												style={{ color: isScrolled ? "var(--primary-text)" : "white" }}
												className="font-semibold font-mlg"
												to="/mri">
												MRI
											</Link>
										</li>*/}
										<li>
											<Link
												style={{ color: isScrolled ? "var(--primary-text)" : "white" }}
												className={location.pathname == '/dna' ? "font-semibold font-mlg active" : "font-semibold font-mlg"}
												to="/dna"
											>
												DNA
											</Link>
										</li>
										{/*<li>
											<a
												style={{ color: isScrolled ? "var(--primary-text)" : "white" }}
												className="font-semibold font-mlg"
												href="https://regenman.com"
												target="_blank"
												rel="noreferrer"
											>
												Books
											</a>
										</li>*/}
										<li>
											<a
												style={{ color: isScrolled ? "var(--primary-text)" : "white" }}
												className={location.pathname == '/contact' ? "font-semibold font-mlg active" : "font-semibold font-mlg"}
												href="/contact"
												rel="noreferrer"
											>
												Contact Us
											</a>
										</li>
									</ul>
									<ul className="list-reset header-nav-right">
										<li className="link-button">
											<Button
												size="large"
												className="primary-button text-capitalize blue-secondary font-semibold font-md"
												onClick={() => {
													closeMenu();
													window.open(`${process.env.REACT_APP_REDIRECT_DOMAIN}/login`, "_blank")
												}}
											>
												Login
											</Button>
										</li>
										{service ? <li>
											<Button
												size="large"
												className="primary-button text-capitalize gradient font-semibold font-md"
												onClick={() => window.open(`${process.env.REACT_APP_REDIRECT_DOMAIN}/appointment/${service}`, "_blank")}
											>
												Book Appointment
											</Button>
										</li> : null}
									</ul>
								</div>
							</nav>
						</React.Fragment>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
