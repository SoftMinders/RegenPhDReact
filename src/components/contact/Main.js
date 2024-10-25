import React from "react";
import classNames from "classnames";
import {Grid} from "@mui/material";
import {PhoneFilled} from "@ant-design/icons";
import {MailFilled} from "@ant-design/icons";
import {EnvironmentFilled} from "@ant-design/icons";

class Contact extends React.Component {
    render() {
        return (
            <>
                <section className={classNames("contactus mb-160 mt-160")}>
                    <div className="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="contact-left">
                                    <h2 className="gradient-text-2">We'd love to help!</h2>
                                    <h3>Feel Free To Write</h3>
                                    <form name="contactUs" method="post" netlify>
                                        <input type="hidden" name="form-name" value="contactUs" />
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
                                <div class="contacts-right">
                                    <h2 className="gradient-text-2">Need other help?</h2>
                                    <h3>Get In Touch With Us</h3>
                                    <div class="cicon" style={{marginTop:'49px'}}>
                                        <div class="row">
                                            <div class="col-sm-2">
                                                <PhoneFilled/>
                                            </div>
                                            <div class="col-sm-10">
                                                <h4>Have Any Question?</h4>
                                                <p>+9845621354</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cicon">
                                        <div class="row">
                                            <div class="col-sm-2">
                                                <MailFilled/>
                                            </div>
                                            <div class="col-sm-10">
                                                <h4>Write Email</h4>
                                                <p>regenphd@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Contact;
