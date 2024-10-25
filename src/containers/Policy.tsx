import React from "react";
import classNames from "classnames";



export const Policy = (): React.ReactElement => {
    return (
        <>
            <section className={classNames("hero home-hero-section section has-bg-color invert-color")}>
                <h1>Privacy Policy</h1>
            </section>
            <div className="container policy-terms">
                <p>At Regen PhD, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you use our website and services. By using our website, you agree to the terms of this policy.</p>
                <h4>Information We Collect</h4>
                <ul>
                    <li><b>Personal Information:</b> When you use our services or contact us, we may collect personal information such as your name, email address, phone number, and any other information you voluntarily provide.</li>
                    <li><b>Medical Information:</b> As a healthcare provider, we may collect medical information, including diagnostic results, health history, and treatment plans, when you engage our services.</li>
                    <li><b>Website Usage Information:</b> We may collect non-personal data, such as your IP address, browser type, device information, and browsing patterns through cookies and similar technologies for website functionality and analytics purposes.</li>
                </ul>
                <h4>How We Use Your Information</h4>
                <ul>
                    <li><b>Service Provision: </b> We use your personal and medical information to provide you with tailored healthcare services, including diagnostics, treatment plans, and consultations.</li>
                    <li><b>Communication: </b> We may use your contact information to communicate with you about appointments, results, and other important updates related to your care.</li>
                    <li><b>Website Improvement: </b> Non-personal data is used to analyse website traffic, enhance user experience, and improve our services.</li>
                </ul>
                <h4>Data Sharing and Disclosure</h4>
                <ul>
                    <li><b>Third-Party Service Providers:</b> We may share your information with third-party service providers who assist us in delivering our services, such as laboratory services or payment processing. These parties are required to keep your information confidential and use it only for the purposes for which we disclose it.</li>
                    <li><b>Legal Compliance: </b>We may disclose your information if required by law or if we believe such action is necessary to comply with legal processes, protect our rights, or investigate potential violations.</li>
                </ul>
                <h4>Data Security</h4>
                <p>We implement appropriate technical and organisational measures to protect your personal and medical information from unauthorised access, loss, misuse, or alteration. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.</p>
                <h4>Retention of Information</h4>
                <p>We retain your personal and medical information only as long as necessary to fulfill the purposes for which it was collected, including to comply with legal and regulatory obligations, resolve disputes, and enforce our agreements.</p>
                <h4>Your Rights</h4>
                <ul>
                    <li><b>Access and Correction: </b>You have the right to access and request correction of your personal data. If you believe any information we hold is inaccurate or incomplete, please contact us, and we will promptly make the necessary corrections.</li>
                    <li><b>Data Deletion: </b>You may request the deletion of your personal information, subject to certain legal exceptions. Contact us if you wish to exercise this right.</li>
                    <li><b>Opt-Out: </b>You may opt out of receiving non-essential communications from us by following the unsubscribe instructions in our emails or contacting us directly.</li>
                </ul>
                <h4>Cookies and Tracking Technologies</h4>
                <p>Our website may use cookies and similar technologies to enhance your experience, analyse website traffic, and understand how you interact with our site. You can control cookie settings through your browser, but please note that disabling cookies may affect the functionality of the website.</p>
                <h4>Changes to This Privacy Policy</h4>
                <p>Regen PhD may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. Any changes will be posted on this page, and we encourage you to review this policy periodically.</p>
                <h4>Contact Us</h4>
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us through our website or at the address provided below.</p>
                <p>By using our website and services, you agree to this Privacy Policy. Thank you for trusting Regen PhD with your personal and health information.</p>
            </div>
            
        </>
    );
};
