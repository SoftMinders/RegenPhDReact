import React,{useEffect} from "react";
import classNames from "classnames";
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
        <section className={classNames("contactsec")}>
            <div class="contact-back"></div>
            <div className="container">
                <div class="row">
                    <div class="col-sm-6">
                        <img src={require('../../assets/Images/home/contact.jpg')} alt="Regen PhD"></img>
                    </div>
                    <div class="col-sm-6">
                        <div class="contact-right">
                            <h2>We'd love to help!</h2>
                            <p>Fill out the form below, and our team at Regen PhD will get back to you as soon as possible</p>
                            <form name="homeContact" method="post" id="homeContactForm">
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
                    
                    
                </div>
            </div>
        </section>
    );
}

export default Contact;
