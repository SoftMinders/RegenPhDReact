import React from "react";
import classNames from "classnames";
import {Grid} from "@mui/material";
class News extends React.Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className={classNames("section-inner")}>
                        <h2 className="gradient-text mb-4">
                            We Are <span className="font-bold">Featured In</span>
                        </h2>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://www.forbes.com/sites/sallypercy/2024/09/13/fake-urgency-is-it-a-good-or-bad-thing-in-the-workplace/" target="_Blank"><img src={require('../../assets/Images/media/logo1.jpg')} alt="Forbes" className="news-image"/></a>
                            </Grid>
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://uk.style.yahoo.com/flexible-working-pattern-best-health-094809090.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAK-68_71SpFQXALAjOBGah5pPFoD6X-nDhQfc-uZ3O8DYcXWtwL7mx5ukwiiLSvamfPFjy0rbFvu90tgZBnOfz38uNrYzRk5FZt3Y-nFAbZ7F4yLL3LM5pNu5rVCH5-WYDoydmGmLXtd2MxTxMxohd3o2ibdyznX70FZHgx5bgRW#:~:text=Even%20if%20it%27s%20not%20possible,will%20help%2C%E2%80%9D%20he%20says." target="_Blank"><img src={require('../../assets/Images/media/logo2.jpg')} alt="Yahoo Life" className="news-image"/></a>
                            </Grid>
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://medium.com/bold-ambition/regeneration-by-design-4fc41e90b0de" target="_Blank"><img src={require('../../assets/Images/media/logo3.jpg')} alt="Medium" className="news-image"/></a>
                            </Grid>
                            {/*<Grid item xs={6} md={3} className="text-center">
                                <a href="https://lizearlewellbeing.com/health/the-menopause/omega-3-menopause/" target="_Blank"><img src={require('../../assets/Images/media/logo4.jpg')} alt="Liz Earl Wellbeing" className="news-image"/></a>
                            </Grid>*/}
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://startupsmagazine.co.uk/article-how-tech-founders-can-invest-their-physiological-wellbeing" target="_Blank"><img src={require('../../assets/Images/media/logo5.jpg')} alt="Startup Business" className="news-image"/></a>
                            </Grid>
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://techround.co.uk/startups/humanitarian-day-startup-apps/" target="_Blank"><img src={require('../../assets/Images/media/logo6.jpg')} alt="Tech Round" className="news-image"/></a>
                            </Grid>


                            {/* <Grid item xs={6} md={3} className="text-center">
                                <a href="https://podcasts.apple.com/gb/podcast/regenerative-medicine-for-your-joints-with-professor/id595985368?i=1000664573454" target="_Blank"><img src={AP} alt="Apple Podcasts" className="news-image"/></a>
                            </Grid>
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://businessmondays.co.uk/new-book-regeneration-by-design-reveals-the-science-of-superhuman-ageing/" target="_Blank"><img src={BM} alt="Business mondays" className="news-image"/></a>
                            </Grid>
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://debirobinson.com/podcast/episode-80-professor-paul-lee-how-do-we-take-care-of-our-muscles-bones-and-joints/" target="_Blank"><img src={DB} alt="Debi Robinson" className="news-image"/></a>
                            </Grid>
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://www.europeanbusinessreview.com/how-to-age-and-train-like-an-elite-sportsperson-at-home/" target="_Blank"><img src={EBR} alt="Europian Business Reviews" className="news-image"/></a>
                            </Grid>
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://fivebooks.com/reader-list/five-books-on-regenerative-ageing-jayden_gould/" target="_Blank"><img src={FB} alt="Five Books" className="news-image"/></a>
                            </Grid>
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://healthyaging.net/healthy-aging-magazine/fall-issue-of-healthy-aging-magazine-published/" target="_Blank"><img src={HA} alt="Healthy Aging" className="news-image"/></a>
                            </Grid>
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://inews.co.uk/inews-lifestyle/autumn-good-sleep-weight-mood-health-3250508" target="_Blank"><img src={IN} alt="Forbes" className="news-image"/></a>
                            </Grid>
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://jenfrances.livepositively.com/the-science-of-superhuman-ageing/" target="_Blank"><img src={LP} alt="Live Positively" className="news-image"/></a>
                            </Grid>
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://www.startyourbusinessmag.com/blog/2024/09/20/regeneration-by-design/" target="_Blank"><img src={SYB} alt="Start Your Business" className="news-image"/></a>
                            </Grid>
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://wellbeingmagazine.com/new-book-regeneration-by-design-reveals-the-science-of-superhuman-ageing/" target="_Blank"><img src={Wellbeing} alt="Wellbeing Magazine" className="news-image"/></a>
                            </Grid>
                            <Grid item xs={6} md={3} className="text-center">
                                <a href="https://www.yorkshirepost.co.uk/read-this/the-six-superhuman-steps-to-regeneration-4704938" target="_Blank"><img src={Yorkshire} alt="Yorkshire" className="news-image"/></a>
                            </Grid> */}
                        </Grid>
                    </div>
                </div>
            </section>
        );
    }
}

export default News;
