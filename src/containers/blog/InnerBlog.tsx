import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Axios for HTTP requests

interface HtmlDecoderProps {
    html: string; // Define the type of the html prop
}

const HtmlDecoder: React.FC<HtmlDecoderProps> = ({ html }) => {
    const decodeHtmlEntities = (html: string): string => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };

    const decodedHtml = decodeHtmlEntities(html);

    return (
        <div dangerouslySetInnerHTML={{ __html: decodedHtml }} />
    );
};

export const InnerBlog = (): React.ReactElement => {
    const [posts, setPosts] = useState<any[]>([]);
    const location = useLocation(); // Get the location object
    const pathSegments = location.pathname.split('/'); // Split the pathname into segments
    var lastSegment = pathSegments[pathSegments.length - 1];
    if(lastSegment == "")
        lastSegment = pathSegments[pathSegments.length - 2];

    console.log(lastSegment);
    const singleurl = 'https://admin.regenphd.com/api/v1/get-single-regenphd-blog/' + lastSegment;

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(singleurl, {
                    headers: {
                        'Token': 'TrgG&684#5ghvGFbfd*767hDSr' // Add custom headers here
                    }
                });

                if (!response.data || (Array.isArray(response.data) && response.data.length === 0)) {
                    // Redirect to 404 page if data is blank
                    //navigate('/404');
                } else {
                    setPosts(response.data); // Set posts with fetched data
                }
            } catch (error) {
                console.error(error); // Log error if request fails
                //navigate('/404'); // Redirect to 404 page in case of error
            }
        };

        fetchData(); // Call fetch function
    }, [lastSegment, navigate]); // Empty dependency array to run only on mount

    return (
        <>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <React.Fragment key={post.id}>
                        <section className={classNames("hero home-hero-section section has-bg-color invert-color")}>
                            <h1>{post.title}</h1>
                        </section>
                        <div className="container policy-terms blog-inner">
                            <img src={post.featured_image} className="topimg" alt={post.title} />
                            <HtmlDecoder html={post.content} />
                        </div>
                    </React.Fragment>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};
