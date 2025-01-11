import React,{useEffect} from "react";
import classNames from "classnames";
import {PhoneFilled} from "@ant-design/icons";
import {MailFilled} from "@ant-design/icons";
import Swal from 'sweetalert2';

const Contact = () => {
    // Fetch data on component mount
	useEffect(() => {
		document.getElementById('homeContact').addEventListener('click', function(e) {
            e.preventDefault();
        
            const formData = new FormData(document.getElementById('homeContactForm'));
            var name = document.getElementById('fName').value;
            var email = document.getElementById('fEmail').value;
            var phone = document.getElementById('fPhone').value;
            var subject = document.getElementById('fSubject').value;

            if(name !== ''){
                if(email !== ''){
                    if(phone !== ''){
                        if(subject !== ''){
                            fetch('https://admin.regenphd.com/api/v1/submit-regen-contact-form', {
                                method: 'POST',
                                body: formData,
                                headers: {
                                    'Token': 'TrgG&684#5ghvGFbfd*767hDSr',
                                }
                            })
                            .then(response => response.json())
                            .then(result => {
                                if(result.status === '1'){
                                    Swal.fire({
                                        title: 'Success!',
                                        text: 'We have received your message.',
                                        icon: 'success',
                                        confirmButtonText: 'OK'
                                    });
                                }else{
                                    Swal.fire({
                                        title: 'Error!',
                                        text: 'Something went wrong. Please try again later.',
                                        icon: 'error',
                                        confirmButtonText: 'OK'
                                    });
                                }
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });
                        }else{
                            Swal.fire({
                                title: 'Warning!',
                                text: 'Please enter a Subject!',
                                icon: 'warning',
                                confirmButtonText: 'OK'
                            });
                        }
                    }else{
                        Swal.fire({
                            title: 'Warning!',
                            text: 'Please enter valid Phone!',
                            icon: 'warning',
                            confirmButtonText: 'OK'
                        });
                    }
                }else{
                    Swal.fire({
                        title: 'Warning!',
                        text: 'Please enter valid Email!',
                        icon: 'warning',
                        confirmButtonText: 'OK'
                    });
                }
            }else{
                Swal.fire({
                    title: 'Warning!',
                    text: 'Please enter valid Name!',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                });
            }
        
        });
	}, []); // Empty dependency array to run only on mount
    return (
        <>
            <section className={classNames("contactus mb-160 mt-160")}>
                <div className="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="contact-left">
                                <h2 className="gradient-text-2">We'd love to help!</h2>
                                <h3>Feel Free To Write</h3>
                                <form name="homeContact" method="post" id="homeContactForm" netlify>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" name="name" id="fName" placeholder="Enter Your Full Name"/>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="email" class="form-control" name="email" id="fEmail" placeholder="Enter Your Email"/>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="tel" class="form-control" name="phone" id="fPhone" placeholder="Enter Phone Number"/>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="subject" class="form-control" name="subject" id="fSubject" placeholder="Enter Subject"/>
                                        </div>
                                        <div class="col-sm-12">
                                            <textarea class="form-control" name="message" id="fMessage" placeholder="Message"></textarea>
                                            <button class="cntbtn" type="submit" id="homeContact">SEND MESSAGE</button>
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
                                            <p>0333 335 5848</p>
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

export default Contact;
