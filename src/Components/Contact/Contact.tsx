import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.scss";


export const Contact = () => {
    const myForm = useRef(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (myForm.current) {
            emailjs.sendForm('service_mpzvjee', 'template_apkaytw', myForm.current, 'DdsxJoZWF6eDTp7f0')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }

    };

    return (
        <div className='contact' id="contact">
            <div className="container">
                <div className="row">
                    <div className='left-col'>
                        <h2 className='gradient contact-title' >Get in touch</h2>
                        <p >Have a project in mind? Looking to partner or work together? Reach out through the form and l`ll get back to you in the next 48 hours.</p>
                    </div>
                    <div className='right-col'>
                        <form ref={myForm} onSubmit={sendEmail} className='contact-form' >
                            <p >Your Name</p>
                            <input className='hover' type="text" placeholder='Enter your name' name='name' />
                            <p>Your E-mail</p>
                            <input className='hover' type="text" placeholder='Enter your e-mail' name="e-mail" />
                            <p>Tell me a bit more what you are looking for?</p>
                            <textarea className='hover' name="message" id="" ></textarea>

                            <button className='gradient-button contact-button hover'>Submit now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
