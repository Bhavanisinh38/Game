import React from 'react';
import {Link} from "react-router-dom";

// Images Common File
import * as Img from '../../components/Img';

// Css File
import '../../css/signinup.css'


export default function PageSignIn() {

    return(
        <>
            <div className="login-page-back-effect"></div>
            <div className="sign-in-up-bx">
    
                <div className='signinup-screen active' id="login-screen">

                    <img className='signinup-logo' src={Img.logo_white} alt='Crash game logo' />
                    <div className="screen-hed">Log in or sign up</div>

                    <form>

                        <div className="row">
                            <div className="col-12">
                                <div className="signinup-group sgli">
                                    <div className="group__label">Phone Number</div>
                                    <input type="number" placeholder="Enter phone number" />
                                    <span className="group_left_icon">+91</span>
                                </div>
                            </div>
                        </div>

                        <div className="site-info text-center">
                            By continuing you agree to Crash Game <a href="/">Terms & Conditions</a> and <a href="/">Privacy Policy</a>.
                        </div>

                    

                        <Link to='/signotp' className="login-submit-btn">Continue</Link>
                        <Link to='/signup' className="login-submit-btn">Continue</Link>

                        {/* <button type="button" className="login-submit-btn" desabled>Continue</button> */}

                        <div className="lsb-loader-btn">
                            <img src={Img.loading} alt="Please wait" />Please wait ....
                        </div>

                    </form>

                </div>

            </div>
        </>
    );
};