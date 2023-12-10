import React from 'react';
import { Link } from "react-router-dom";

// Images Common File
import * as Img from '../../components/Img';

export default function PageContact() {

    const contactinfo = [
        {
            contactClassName: "col-md-12 col-sm-6",
            contactName: "Call Us",
            contactImg: Img.phone,
            contactData: "+91 812 818 1082",
            contactLink: "tel:+918128181082",
        },
        {
            contactClassName: "col-md-12 col-sm-6",
            contactName: "Email Us",
            contactImg: Img.email,
            contactData: "info@pmcommu.com",
            contactLink: "mailto:info@pmcommu.com",
        },
        {
            contactClassName: "col-12",
            contactName: "Address",
            contactImg: Img.location,
            contactData: "PM Communications, 6th Floor, Zydus Tower, Astron Tower, Iskcon Cross Rd, Satellite, Ahmedabad, Gujarat 380015",
            contactLink: "https://g.page/pmcommu?share",
        },
    ]

    return(
        <>

            <div className='breadcrumb-outer'>
                <div className='container-lg'>   
                    <div className='breadcrumb-bx'>
                        <Link className='breadcrumb-link' to="/">Home<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        <Link className='breadcrumb-link breadcrumb-active'>Contact</Link>
                    </div>
                </div>
            </div>

            <section className="mb-5">
                <div className="container-lg">
                    <div className="lagle-heading">Contact</div>
                    <div className="row justify-content-center mt-4">

                        <div className="col-md-6 mt-3 mt-md-0 order-2 order-md-1">
                            <div className="row">
                                {contactinfo.map((item, index) => ( 

                                    <div className={item.contactClassName} key={index}>
                                        <Link className="contact-info" to={item.contactLink}>
                                            <span className="contact-icon">
                                                <img src={item.contactImg} alt="Email Icon" />
                                            </span>
                                            <div className="contact-text">
                                                <h6>{item.contactName}</h6>
                                                <p>{item.contactData}</p>
                                            </div>
                                        </Link>
                                    </div>

                                ))}

                            </div>
                        </div>

                        <div className="col-md-6 order-1 order-md-2">
                            <form action="" className="contactform">
                                <div className="row">

                                    <div className="col-12">
                                        <div className="signinup-group">
                                            <div className="group__label">Your Name</div>
                                            <input type="text" placeholder="Enter your name"/>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="signinup-group sgli">
                                            <div className="group__label">Phone Number</div>
                                            <input type="number" placeholder="Enter phone number"/>
                                            <span className="group_left_icon">+91</span>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="signinup-group error-group">
                                            <div className="group__label">Your email</div>
                                            <input type="email" placeholder="you@example.com"/>
                                            <span className="form-error-msg">You must provide an email</span>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="signinup-group">
                                            <div className="group__label">Message</div>
                                            <textarea placeholder="Message here..."></textarea>
                                        </div>
                                    </div>

                                </div>
                                <button type="button" className="common-submit-btn" disabled>Submit</button>
                                <button type="button" className="lsb-loader-btn">
                                    <img src={Img.loading} alt="Please wait" />Please wait ....
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    );
};