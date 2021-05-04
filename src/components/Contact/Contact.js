import React from 'react';
import SideBar from '../SideBar/SideBar';
// import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const Contact = () => {
    // const { register, handleSubmit} = useForm();

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
            <div className="text-center">
                <SideBar />
            </div>
            <div style={{ backgroundColor: '#00101a', paddingTop: '30px', paddingBottom: '20px'}} className="text-white">
                <div className="p-4">
                    <form onSubmit={sendEmail}>
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" name="name" placeholder="Name" required />
                        </div>
                        <div className="col-8 pt-2 form-group mx-auto">
                            <input type="email" className="form-control" name="email" placeholder="Email Address" required />
                        </div>
                        <div className="col-8 pt-2 form-group mx-auto">
                            <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                        </div>
                        <div className="col-8 pt-2 form-group mx-auto">
                            <textarea className="form-control" placeholder="Your message" name="message" cols="30" rows="8" required></textarea>
                        </div>
                        <div className="col-8 pt-2 form-group mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message" required />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;