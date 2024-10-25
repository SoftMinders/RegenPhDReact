import React from "react";
import classNames from "classnames";
import {Grid, Stack} from "@mui/material";

class AreaContact extends React.Component {
    render() {
        return (
            <>
            <section className={classNames("contactsec")}>
                <div class="contact-back"></div>
                <div className="container" style={{marginBottom: '-100px'}}>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="contact-right">
                                <h2>We'd love to help!</h2>
                                <p>We're a full service agency with experts ready to help. We'll get in touch within 24 hours.</p>
                                <form name="homeContact" method="post" netlify>
                                    <input type="hidden" name="form-name" value="homeContact" />
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" name="name" placeholder="Enter Your Full Name"/>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="email" class="form-control" name="email" placeholder="Enter Your Email"/>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="tel" class="form-control" name="phone" placeholder="Enter Phone Number"/>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="subject" class="form-control" name="subject" placeholder="Enter Subject"/>
                                        </div>
                                        <div class="col-sm-12">
                                            <textarea class="form-control" name="message" placeholder="Message"></textarea>
                                            <button class="cntbtn" type="submit">SEND MESSAGE</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <img src={require('../../assets/Images/area/inner-area5.png')} alt="regenPhD"></img>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <section className={classNames("features-tiles mb-160 areasection")}>
                    <div className="container">
                        <div className={classNames("features-tiles-inner")}>
                            <Stack spacing={8} className="feature-tiles pt-4">
                                <Grid container spacing={2} className="reverse-column mb-100">
                                    <Grid item xs={12} md={12}>
                                        <div className="blockquote">
                                            <h4 className="mt-02 gradient-text-2"><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui</p>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </div>
                    </div>
                </section>
            </div>
            </>
        );
    }
}

export default AreaContact;
