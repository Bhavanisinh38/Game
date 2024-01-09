import React, { useState } from 'react';
import {Link} from "react-router-dom";

// Images Common File
import * as Img from '../../components/Img';

// Css File
import '../../css/signinup.css'


const hidepassSvg = () => {
    return(
    <svg className="gri_password" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
    )
}

const viewpassSvg = () => {
    return(
    <svg className="gri_password" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    )
}

export default function PageSignIn() {

    const [showPasswords, setShowPasswords] = useState([false, false, false]);

    const togglePasswordVisibility = (index) => {
        const updatedShowPasswords = [...showPasswords];
        updatedShowPasswords[index] = !updatedShowPasswords[index];
        setShowPasswords(updatedShowPasswords);
    };

    return(
        <>
            <div className="login-page-back-effect"></div>
            <div className="sign-in-up-bx">
    
                <div className='signinup-screen active' id="login-screen">

                    <img className='signinup-logo' src={Img.logo_white} alt='Crash game logo' />
                    <div className="screen-hed">Log in</div>

                    <form>

                        <div className="row">

                            <div className="col-12">
                                <div className="signinup-group">
                                    <div className="group__label">Your email id</div>
                                    <input type="email" placeholder="you@example.com"/>
                                </div>
                            </div>

                            {[0].map((index) => (
                            <div className="col-12" key={index}>
                                <div className="signinup-group sgri">
                                    <div className="group__label">Password <Link className="forget-link" to="/forgotpassword">Forgot password?</Link></div>
                                    <input type={showPasswords[index] ? 'text' : 'password'} placeholder="Enter password"/>
                                    <span className={`group_right_icon ${showPasswords[index] ? "active" : "" }`} onClick={() => togglePasswordVisibility(index)} >
                                        {showPasswords[index] ? viewpassSvg() : hidepassSvg()}
                                    </span>
                                </div>
                            </div>
                            ))}

                            <div className="col-12">
                                <div className="signinup-group-checkmark">
                                    <input className="d-none" type="checkbox" id="checkmark"/>
                                    <label className="checkmark-lable" htmlFor="checkmark"><span className="checkmark-icon"></span>Remember Me</label>
                                </div>
                            </div>

                        </div>

                        <div className="site-info text-center">
                            By continuing you agree to Crash Game <Link to="/terms">Terms & Conditions</Link> & <Link to="/privacy">Privacy Policy</Link>.
                        </div>

                    

                        <Link to='/signotp' className="login-submit-btn">Continue</Link>
                        <Link to='/signup' className="login-submit-btn">Continue</Link>

                        {/* <button type="button" className="login-submit-btn" desabled>Continue</button> */}

                        <div className="lsb-loader-btn">
                            <img src={Img.loading} alt="Please wait" />Please wait ....
                        </div>

                        <div className="signuptooglebtn text-center mt-2">New user?
                            <Link to='/signup' className='login-this'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                Create an account
                            </Link>
                        </div>

                    </form>

                </div>

            </div>
        </>
    );
};