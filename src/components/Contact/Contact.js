import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_q7v0fhb', e.target, 'user_3AFiES1Y2CNS3jl04HeP5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert('thank you for your email')
        e.target.reset();
    }

    return (
        <div>
            <div className="text-white contactDiv">
                <div className="container contactArea">
                    <h1 data-aos="fade-down" style={{ color: '#ccd6f6' }} className="text-center my-3">Get In Touch</h1>
                    <div data-aos="fade-up" className="p-4">
                        <form onSubmit={sendEmail}>
                            <div className="col-md-8 form-group mx-auto">
                                <input type="text" className="form-control" name="name" placeholder="Name" required />
                            </div>
                            <div className="col-md-8 pt-2 form-group mx-auto">
                                <input type="email" className="form-control" name="email" placeholder="Email Address" required />
                            </div>
                            <div className="col-md-8 pt-2 form-group mx-auto">
                                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                            </div>
                            <div className="col-md-8 pt-2 form-group mx-auto">
                                <textarea className="form-control" placeholder="Your message" name="message" cols="30" rows="5" required></textarea>
                            </div>
                            <div className="col-md-8 pt-2 form-group mx-auto text-center sendMessage">
                                <input type="submit" className="btn btn-info" value="Send Message" required />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;