import React from 'react';
import {Link} from "react-router-dom";

// Images Common File
import * as Img from '../../components/Img';

// Css File
import '../../css/signinup.css';


export default function PageForgotPassword() {

    return(
        <>
            <div className="login-page-back-effect"></div>
            <div className="sign-in-up-bx">
    
                <div className='signinup-screen active' id="forgotpassword-screen">

                    <div className='signinup-header'>
                        <Link to="/signin" className="back-btn" title="Back to Login">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" color="#F2F1F3" width="20px"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg>
                        </Link>
                        <img className='signinup-logo' src={Img.logo_white} alt='Crash game logo' />
                    </div>

                    <div className="screen-hed text-center">Forgotten password?</div>
                    <div className="screen-pera text-center">Enter your email address, and we'll send you a code to help you access your account.</div>

                    <form>

                        <div className="row">
    
                            <div className="col-12">
                                <div className="signinup-group">
                                    <div className="group__label">Your email id</div>
                                    <input type="email" placeholder="you@example.com"/>
                                </div>
                            </div>
                        
                        </div>

                        <div className="site-info text-center">
                            By continuing you agree to Crash Game <Link to="/terms">Terms & Conditions</Link> & <Link to="/privacy">Privacy Policy</Link>.
                        </div>

                        <button type="button"  className="login-submit-btn" disabled>Find Account</button>

                        <div className="lsb-loader-btn">
                            <img src={Img.loading} alt="Please wait" />Please wait ....
                        </div>

                        <div className="signuptooglebtn text-center mt-2">
                        <Link to='/signin' className='login-this'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            Back to Login
                        </Link>
                        </div>

                    </form>

                </div>

            </div>
        </>
    );
};