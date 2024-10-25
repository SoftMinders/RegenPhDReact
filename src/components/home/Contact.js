import React from "react";
import classNames from "classnames";
import {Grid} from "@mui/material";

class Contact extends React.Component {
    render() {
        return (
            <section className={classNames("contactsec")}>
                <div class="contact-back"></div>
                <div className="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <img src={require('../../assets/Images/home/contact.jpg')}></img>
                        </div>
                        <div class="col-sm-6">
                            <div class="contact-right">
                                <h2>We'd love to help!</h2>
                                <p>Fill out the form below, and our team at Regen PhD will get back to you as soon as possible</p>
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
                        
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
