import React, { useState, useRef } from 'react';
import {Link} from "react-router-dom";

// Images Common File
import * as Img from '../../components/Img';

// Css File
import '../../css/signinup.css'


export default function PageSignOtp() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  
    const handleChange = (e, index) => {
        const value = e.target.value;
    
        if (!isNaN(value) && value.length <= 1) {
          const newOtp = [...otp];
          newOtp[index] = value;
          setOtp(newOtp);
    
          if (index < otp.length - 1 && value !== '') {
            inputRefs[index + 1].current.focus();
          }
        } else if (value === '' && index > 0) {
          // If backspace is pressed and the input field is empty, move focus to the previous input
          inputRefs[index - 1].current.focus();
        }
    };
    
    const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
        e.preventDefault();
        if (index > 0) {
        // Move focus to the previous input
        inputRefs[index - 1].current.focus();
        }
        // Clear the current input
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
    }
    };

    return(
        <>
            <div className="login-page-back-effect"></div>
            <div className="sign-in-up-bx">
    

                <div className='signinup-screen active' id="otp-screen">

                    <div className='signinup-header'>
                        <Link to='/signin' className="back-btn" title="Back to Login">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" color="#F2F1F3" width="20px"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg>
                        </Link>
                        <img className='signinup-logo' src={Img.logo_white} alt='Crash game logo' />
                    </div>

                    <div className="screen-hed">Verify OTP</div>
                    <div className="otp-sent-msg">Enter 6 digit OTP sent to <span>+918320289867</span>
                        <Link to="/signin" className="edit-this">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            Edit
                        </Link>
                    </div>
                    
                    <form>

                        <div className="row">
                            <div className="col-12">
                                <div className="signinup-group otp-group">
                                {otp.map((digit, index) => (
                                    <input key={index}  inputMode="numeric" type="text" maxLength="1" placeholder=" " value={digit} onChange={(e) => handleChange(e, index)} onKeyDown={(e) => handleKeyDown(e, index)} ref={inputRefs[index]} />
                                ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="otp-sent-msg mt-0">Didn't get the OTP? <span>Resend OTP in 30s</span></div>
                            <button type="button" className="resend-otp-btn"  disabled>Resend OTP</button>
                        </div>

                        <div className="site-info text-center">
                            By continuing you agree to Crash Game <Link to="/terms">Terms & Conditions</Link> & <Link to="/privacy">Privacy Policy</Link>.
                        </div>

                        <button type="button" className="login-submit-btn" disabled>Continue</button>

                        <div className="lsb-loader-btn">
                            <img src={Img.loading} alt="Please wait" />Please wait ....
                        </div>

                    </form>

                </div>


            </div>
        </>
    );
};