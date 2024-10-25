import React from "react";
import {Helmet} from "react-helmet";
import {Navigate, Route, Routes} from "react-router-dom";
import {BoneHome} from "./containers/bone/BoneHome";
import {MRIHome} from "./containers/mri/MRIHome";
import {DNAHome} from "./containers/dna/DNAHome";
import BoneLayoutDefault from "./components/bone/layout/Layout";
import {ResearchHome} from "./containers/research/ResearchHome";
import {Home} from "./containers/home/Home";
import {About} from "./containers/about/About";
import {Fourzerofour} from "./containers/404";
import {Contact} from "./containers/contact/Contact";
import {Mai} from "./containers/mai/Mai";
import {Areas} from "./containers/areas/AreaMain";
import {AreaBirmingham} from "./containers/areas/AreaBirmingham";
import {Policy} from "./containers/Policy";
import {Terms} from "./containers/Terms";
import {Biography} from "./containers/biography/Biography";
import {Paul} from "./containers/biography/Paul";
import {Jon} from "./containers/biography/jon";
import {PhD} from "./containers/PhD/PhD";
import {Blog} from "./containers/blog/Blog";
import {BlogOne} from "./containers/blog/BlogOne";
import {BlogTwo} from "./containers/blog/BlogTwo";
import {BlogThree} from "./containers/blog/BlogThree";



const routes = [
    {
        path: "/bone",
        component: BoneHome,
        className: "bone-layout",
        service: "bone",
        layout: true,
        title: "Bone Scan, Bone Regeneration - Cutting-Edge, Radiation-Free Bone Assessment",
        "description": "Solution to provide a quick and radiation-free assessment of the bone condition in the lumbar vertebrae and femoral neck. Ensuring accurate and efficient bone health evaluation without the risks associated with DEXA."
    },
    {
        path: "/mri",
        component: MRIHome,
        service: "mri",
        className: "mri-layout",
        title: "Precision Imaging Unmatched Comfort - Revolutionary Musculoskeletal Assessment",
        "description": "Step into the future of medical imaging with our Open MRI at MSK House. This advanced technology offers unparalleled clarity in diagnosing musculoskeletal conditions, all in a comfortable, open environment. Say goodbye to the discomfort of traditional MRI and experience precision imaging that adapts to your needs.",
        layout: true,
    },
    {
        path: "/dna",
        component: DNAHome,
        service: "dna",
        className: "dna-layout",
        title: "Advanced, Non-Invasive Genetic Insights - Unlock Your Genetic Health Potential",
        "description": "Discover a cutting-edge, non-invasive solution for assessing your genetic predispositions across a wide range of health areas. Our DNA testing provides a quick and precise analysis of over 300 genetic markers, offering deep insights into your overall well-being, from nutrition and fitness to disease risk.",
        layout: true,
    },
    {
        path: "/research",
        component: ResearchHome,
        service: "bone",
        className: "bone-layout",
        title: "Latest Research & Publications in REMS Bone Density scan",
        "description": "Solution to provide a quick and radiation-free assessment of the bone condition in the lumbar vertebrae and femoral neck. Ensuring accurate and efficient bone health evaluation without the risks associated with DEXA.",
        layout: true,
    },
    {
        path: "/",
        component: Home,
        className: "home-layout",
        title: "Stay Young, Be Strong, Live Forever",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
    },
    {
        path: "/about",
        component: About,
        className: "about-layout",
        title: "About regenPHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
    },
    {
        path: "/404",
        component: Fourzerofour,
        className: "layout-404",
        title: "The Page You are Requesting is Not Found",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
    },
    {
        path: "/contact",
        component: Contact,
        className: "contact-layout",
        title: "Contact Us | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
    },
    {
        path: "/mai",
        component: Mai,
        className: "mai-layout",
        title: "MAI | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
    },
    {
        path: "/areas",
        component: Areas,
        className: "area-layout",
        title: "Areas We Serve | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
    },
    {
        path: "/areas/birmingham",
        component: AreaBirmingham,
        className: "area-layout",
        title: "Birmingham | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"Birmingham"
    },
    {
        path: "/privacy-policy",
        component: Policy,
        className: "policy-layout",
        title: "Privacy Policy | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"Privacy Policy"
    },
    {
        path: "/terms-conditions",
        component: Terms,
        className: "terms-layout",
        title: "Terms & Conditions | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"Terms & Conditions"
    },
    {
        path: "/biography",
        component: Biography,
        className: "biography-layout",
        title: "Biography | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"Biography"
    },
    {
        path: "/biography/prof-paul-yf-lee",
        component: Paul,
        className: "biography-layout",
        title: "Biography | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"Biography"
    },
    {
        path: "/biography/prof-jon-whitehead",
        component: Jon,
        className: "biography-layout",
        title: "Biography | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"Biography"
    },
    {
        path: "/phd",
        component: PhD,
        className: "home-layout",
        title: "Personal Health Design | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"Personal Health Design"
    },
    {
        path: "/blog",
        component: Blog,
        className: "home-layout",
        title: "Latest News & Articles | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"Latest News & Articles"
    },
    {
        path: "/blog/regen-phd-bone-scanning-test",
        component: BlogOne,
        className: "biography-layout",
        title: "Latest News & Articles | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"Latest News & Articles"
    },
    {
        path: "/blog/regen-phd-is-best-dna-tesing-care",
        component: BlogTwo,
        className: "biography-layout",
        title: "Latest News & Articles | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"Latest News & Articles"
    },
    {
        path: "/blog/neuro-physical-therapy",
        component: BlogThree,
        className: "biography-layout",
        title: "Latest News & Articles | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"Latest News & Articles"
    },
];

export const App = (): React.ReactElement => {
    

    return (
        <Routes>
            {routes.map(({ path, component: Component, title, description, className, layout, service, pageTitle }, index) => (
                <Route
                    key={index}
                    path={path}
                    element={
                        <>
                            {title ? (
                                <Helmet>
                                    <title>{title}</title>
                                    <link rel="canonical" href={`https://regenphd.com${path}`} />
                                    <meta name="description" content={description} />
                                    <meta property="og:title" content={title} />
                                    <meta property="og:description" content={description} />
                                    <meta name="twitter:title" content={title} />
                                    <meta name="twitter:description" content={description} />
                                </Helmet>
                            ) : null}
                            {layout ? (
                                <BoneLayoutDefault service={service} className={className} pageTitle={pageTitle}>
                                    <Component />
                                </BoneLayoutDefault>
                            ) : (
                                <Component />
                            )}
                        </>
                    }
                >
                </Route>
            ))}
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    );
};
