import React,{useState,useEffect} from "react";
import axios from 'axios'; // Axios for HTTP requests
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
import {Motion} from "./containers/Motion/Motion";
import {Blog} from "./containers/blog/Blog";
import {InnerBlog} from "./containers/blog/InnerBlog";
import { RiskAssessment } from "components/risk/RiskAssessment";
import { RegenEmsFaq } from "containers/RegenEms/RegenEmsFaq";



const routes = [
    {
        path: "/",
        component: Home,
        className: "home-layout",
        title: "Regen PhD - Advanced Diagnostic Health Clinic | Genetic Health & Well-being Experts",
        description: "Discover personalised health solutions at Regen PhD, offering advanced diagnostics like eDNA, Bone Scan, and MAI Scan. Led by experts, we design bespoke plans to optimise your health.",
        layout: true,
        pageTitle:"",
        keywords:"Regen PhD, advanced diagnostics, genetic health, eDNA analysis, Bone Scan, MAI Scan, personalised health plans, health optimisation"
    },
    {
        path: "/biography/",
        component: Biography,
        className: "biography-layout",
        title: "Meet the Experts | Regen PhD Team Biography",
        description: "Discover the expertise behind Regen PhD with profiles of Professor Paul Lee, Professor Jon Whitehead, and our dedicated healthcare team.",
        layout: true,
        pageTitle:"Biography",
        keywords:"Regen PhD experts, Professor Paul Lee, Professor Jon Whitehead, health experts, team biography"
    },
    {
        path: "/biography/prof-paul-yf-lee/",
        component: Paul,
        className: "biography-layout",
        title: "Professor Paul YF Lee | Leading Health Expert at Regen PhD",
        description: "Get to know Professor Paul Lee, a distinguished health expert at Regen PhD, dedicated to advanced diagnostic and personalised health solutions.",
        layout: true,
        pageTitle:"Prof. Paul YF Lee",
        keywords:"Professor Paul Lee, Regen PhD, health expert, advanced diagnostics"
    },
    {
        path: "/biography/prof-jon-whitehead/",
        component: Jon,
        className: "biography-layout",
        title: "Dr. Jon Whitehead | Neuro and Diagnostic Specialist at Regen PhD",
        description: "Learn about Dr. Jon Whitehead, a leading specialist in neuro and diagnostic health at Regen PhD, providing cutting-edge insights and care.",
        layout: true,
        pageTitle:"Prof. Jon Whitehead",
        keywords:"Dr. Jon Whitehead, neuro specialist, diagnostic health, Regen PhD"
    },
    {
        path: "/about/",
        component: About,
        service: "bone",
        className: "about-layout",
        title: "About Regen PhD | Leading Diagnostic Health Clinic in the UK",
        description: "Learn about Regen PhD’s commitment to advanced diagnostic health services, expert care, and personalised health plans led by renowned professors.",
        layout: true,
        pageTitle:"Regen PhD, health diagnostics, UK health clinic, advanced diagnostics, personalised care",
        keywords:"Regen PhD, health diagnostics, UK health clinic, advanced diagnostics, personalised care"
    },
    {
        path: "/bone/",
        component: BoneHome,
        className: "bone-layout",
        service: "bone",
        layout: true,
        title: "#1 Bone Scan Services in UK | Regen PhD Diagnostic Clinic",
        description: "Discover Regen PhD’s comprehensive Bone Scan services, designed to assess bone health and support personalised health strategies.",
        pageTitle:"",
        keywords:"Bone Scan, bone health, Regen PhD, diagnostic services, health assessments"
    },
    {
        path: "/mai/",
        component: Mai,
        className: "mai-layout",
        service: "mai",
        title: "Muscle Assessment Imaging (MAI) | Advanced Diagnostics by Regen PhD",
        description: "Understand your muscle health with MAI Scan at Regen PhD, offering precise imaging for optimal health planning and recovery support.",
        layout: true,
        pageTitle:"MAI Scan, Muscle Assessment Imaging, Regen PhD, health diagnostics"
    },
    {
        path: "/dna/",
        component: DNAHome,
        service: "dna",
        className: "dna-layout",
        title: "eDNA Analysis - Advanced, Non-Invasive Genetic Insights | Unlock Your Genetic Health Potential at Regen PhD",
        description: "Explore eDNA analysis at Regen PhD for unique insights into your genetic health, helping to create a personalised health plan for your needs.",
        layout: true,
        pageTitle:"",
        keywords:"eDNA analysis, genetic health, Regen PhD, personalised health, advanced diagnostics"
    },
    {
        path: "/contact/",
        component: Contact,
        className: "contact-layout",
        title: "Contact Regen PhD | Reach Out for Personalised Health Solutions",
        description: "Get in touch with Regen PhD to learn more about our personalised diagnostic services and health plans tailored to your needs.",
        layout: true,
        pageTitle:"",
        keywords:"contact Regen PhD, personalised health solutions, diagnostic services, contact form"
    },
    {
        path: "/research/",
        component: ResearchHome,
        service: "bone",
        className: "bone-layout",
        title: "Latest Research & Publications in REMS Bone Density scan",
        description: "Solution to provide a quick and radiation-free assessment of the bone condition in the lumbar vertebrae and femoral neck. Ensuring accurate and efficient bone health evaluation without the risks associated with DEXA.",
        layout: true,
        pageTitle:"",
        keywords:""
    },
    {
        path: "/404",
        component: Fourzerofour,
        className: "layout-404",
        title: "The Page You are Requesting is Not Found",
        description: "Stay Young, Be Strong, Live Forever | Regen PhD",
        layout: true,
        pageTitle:"",
        keywords:""
    },
    {
        path: "/areas/",
        component: Areas,
        className: "area-layout",
        title: "Areas We Serve | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"",
        keywords:""
    },
    {
        path: "/areas/birmingham/",
        component: AreaBirmingham,
        className: "area-layout",
        title: "Birmingham | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"Birmingham",
        keywords:""
    },
    {
        path: "/privacy-policy/",
        component: Policy,
        className: "policy-layout",
        title: "Privacy Policy | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"Privacy Policy",
        keywords:""
    },
    {
        path: "/terms-conditions/",
        component: Terms,
        className: "terms-layout",
        title: "Terms & Conditions | Regen PHD",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
        pageTitle:"Terms & Conditions",
        keywords:""
    },
    {
        path: "/phd/",
        component: PhD,
        className: "home-layout",
        title: "Personalised Health Design (PhD) | Tailored Health Solutions by Regen PhD",
        description: "Discover Regen PhD’s Personalised Health Design, offering customised health strategies based on advanced diagnostics like eDNA, MAI Scan, and Bone Scan. Achieve your optimal health through tailored plans and expert guidance.",
        layout: true,
        pageTitle:"Personalised Health Design, Regen PhD, health strategy, eDNA analysis, Bone Scan, MAI Scan, customised health solutions, health optimisation",
        keywords:"Personalised Health Design, Regen PhD, health strategy, eDNA analysis, Bone Scan, MAI Scan, customised health solutions, health optimisation"
    },
    {
        path: "/regenems/faq/",
        component: RegenEmsFaq,
        className: "home-layout",
        title: "Personalised Health Design (PhD) | Tailored Health Solutions by Regen PhD",
        description: "Discover Regen PhD’s Personalised Health Design, offering customised health strategies based on advanced diagnostics like eDNA, MAI Scan, and Bone Scan. Achieve your optimal health through tailored plans and expert guidance.",
        layout: true,
        pageTitle:"Personalised Health Design, Regen PhD, health strategy, eDNA analysis, Bone Scan, MAI Scan, customised health solutions, health optimisation",
        keywords:"Personalised Health Design, Regen PhD, health strategy, eDNA analysis, Bone Scan, MAI Scan, customised health solutions, health optimisation"
    },
    {
        path: "/motion/",
        component: Motion,
        className: "home-layout",
        title: "Personalised Health Design (PhD) | Tailored Health Solutions by Regen PhD",
        description: "Discover Regen PhD’s Personalised Health Design, offering customised health strategies based on advanced diagnostics like eDNA, MAI Scan, and Bone Scan. Achieve your optimal health through tailored plans and expert guidance.",
        layout: true,
        pageTitle:"Personalised Health Design, Regen PhD, health strategy, eDNA analysis, Bone Scan, MAI Scan, customised health solutions, health optimisation",
        keywords:"Personalised Health Design, Regen PhD, health strategy, eDNA analysis, Bone Scan, MAI Scan, customised health solutions, health optimisation"
    },
    {
        path: "/blog/",
        component: Blog,
        className: "home-layout",
        title: "Regen PhD Blog | Latest Insights in Advanced Health and Diagnostics",
        description: "Stay updated with the latest health tips, advancements in diagnostics, and expert insights on the Regen PhD blog.",
        layout: true,
        pageTitle:"Latest News & Articles",
        keywords:"Regen PhD blog, health insights, diagnostic advancements, expert health tips"
    },
    /*{
        path: "/blog/:slug",
        component: InnerBlog,
        className: "home-layout",
        title: "Regen PhD Blog | Latest Insights in Advanced Health and Diagnostics",
        description: "Stay updated with the latest health tips, advancements in diagnostics, and expert insights on the Regen PhD blog.",
        layout: true,
        pageTitle:"Latest News & Articles",
        keywords:"Regen PhD blog, health insights, diagnostic advancements, expert health tips"
    }*/
    
];

const App = (): React.ReactElement => {
    const [posts, setPosts] = useState<any[]>([]);
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

    const logoImage = require("./assets/Images/logo.png");
    // Generate web pages array based on routes
    const webPages = routes.map(({ path, title, description }) => ({
        "@type": "WebPage",
        "@id": `https://maimotion.com${path}`, // Construct dynamic URL
        "name": title || "Regen PhD",         // Fallback for missing title
        "description": description || "Stay Young, Be Strong, Live Forever" // Fallback for description
    }));
    // Main schema object
    const schemaMarkupWebsite = {
        "@context": "https://schema.org",
        "@type": "Website",
        "name": "Regen PhD",
        "image": logoImage,
        "description": "Discover personalised health solutions at Regen PhD, offering advanced diagnostics like eDNA, Bone Scan, and MAI Scan. Led by experts, we design bespoke plans to optimise your health.",
        "hasPart": webPages, // Add the dynamically generated webPages array
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+44 33333 55848",
            "contactType": "Customer Service",
            "areaServed": "GB",
            "availableLanguage": ["English"]
        }
    };
    // Rating schema object
    const schemaMarkupRating = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Regen PhD",
        "url": "https://regenphd.com",
        "logo": logoImage,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "3247",
            "bestRating": "5",
            "worstRating": "4"
        },
        "sameAs": [
            "https://www.facebook.com/regenphduk",
            "https://x.com/PhdRegen54232",
            "https://www.instagram.com/regenphduk/",
            "https://www.linkedin.com/company/regenphd/"
        ]
    };

      
    return (
        <Routes>
            {routes.map(({ path, component: Component, title, description, className, layout, service, pageTitle, keywords }, index) => (
                <Route
                    key={index}
                    path={path}
                    element={
                        <>
                            {title ? (
                                <Helmet>
                                    <title>{title}</title>
                                    <meta name="description" content={description} />
                                    <link rel="canonical" href={`https://regenphd.com${path}`} />
                                    <meta name="keywords" content={keywords}></meta>
                                    <meta name="robots" content="index, follow"></meta>
                                    <meta name="author" content="Regen PhD"></meta>

                                    <meta property="og:title" content={title} />
                                    <meta property="og:description" content={description} />
                                    <meta property="og:url" content={`https://regenphd.com${path}`}></meta>
                                    <meta property="og:image" content={require("./assets/Images/logo.png")}></meta>
                                    <meta property="og:type" content="website"></meta>
                                    <meta property="og:site_name" content="Regen PhD"></meta>

                                    <meta name="twitter:card" content="summary_large_image"></meta>
                                    <meta name="twitter:title" content={title} />
                                    <meta name="twitter:description" content={description} />
                                    <meta name="twitter:image" content={require("./assets/Images/logo.png")}></meta>
                                    <meta name="twitter:site" content="@RegenPhD"></meta>
                                    <script type="application/ld+json">
                                        {JSON.stringify(schemaMarkupWebsite)}
                                    </script>
                                    <script type="application/ld+json">
                                        {JSON.stringify(schemaMarkupRating)}
                                    </script>
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
            {posts.map( post => (
                <Route
                    key={`/blog/${post.slug}/`}
                    path={`/blog/${post.slug}/`}
                    element={
                        <>
                            <Helmet>
                                <title>{post.seo_title}</title>
                                <link rel="canonical" href={`https://regenphd.com/blog/${post.slug}/`} />
                                <meta name="description" content={post.seo_description} />
                                <meta name="keywords" content={post.seo_keywords}></meta>
                                <meta name="robots" content="index, follow"></meta>
                                <meta name="author" content="Regen PhD"></meta>

                                <meta property="og:title" content={post.seo_title} />
                                <meta property="og:description" content={post.seo_description} />
                                <meta property="og:url" content={`https://regenphd.com/blog/${post.slug}/`}></meta>
                                <meta property="og:image" content={require("./assets/Images/logo.png")}></meta>
                                <meta property="og:type" content="website"></meta>
                                <meta property="og:site_name" content="Regen PhD"></meta>
                                
                                <meta name="twitter:card" content="summary_large_image"></meta>
                                <meta name="twitter:title" content={post.seo_title} />
                                <meta name="twitter:description" content={post.seo_description} />
                                <meta name="twitter:image" content={post.featured_image}></meta>
                                <meta name="twitter:site" content="@RegenPhD"></meta>
                            </Helmet>
                            <BoneLayoutDefault service="Blog" className="biography-layout" pageTitle={post.title}>
                                <InnerBlog />
                            </BoneLayoutDefault>
                            
                        </>
                    }
                >
                </Route>
            ))}
            <Route path="/mri" element={<Navigate to="/mai" replace />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    );
};
export default App;