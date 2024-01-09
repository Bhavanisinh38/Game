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

export default function PageSignUp() {
    const [isbodShow, setisbodShow] = useState(true);
    const [bodValue, setbodValue] = useState('');

    const handlebodChange = (e) => {
      const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
      const formattedValue = formatbod(value);
      setisbodShow(value === '');
      setbodValue(formattedValue);
    };
  
    const formatbod = (value) => {
      if (value.length === 0) return '';
      if (value.length <= 2) return value;
      if (value.length <= 4) return `${value.slice(0, 2)}/${value.slice(2)}`;
      return `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`;
    };

    const handlebodClear = () => {
        setbodValue("");
        setisbodShow(true)
    };

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
    
                <div className='signinup-screen mw768ss active' id="registration-screen">

                    <div className='signinup-header'>
                        <Link to="/signin" className="back-btn" title="Back to Login">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" color="#F2F1F3" width="20px"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg>
                        </Link>
                        <img className='signinup-logo' src={Img.logo_white} alt='Crash game logo' />
                    </div>

                    <div className="screen-hed">Finish your registration</div>

                    <form>

                        <div className="row">

                            {/* <div className="col-12">
                                <div className="signinup-group">
                                    <label className="group__label">Gender</label>
                                    <div className="signinup-group-radio">
                                        <input type="radio" id="male" name="gender" hidden/>
                                        <label htmlFor="male">Male</label>
                                        <input type="radio" id="female" name="gender" hidden/>
                                        <label htmlFor="female">Female</label>
                                    </div>
                                </div>
                            </div> */}

                            <div className="col-6 pe-2">
                                <div className="signinup-group">
                                    <div className="group__label">First Name</div>
                                    <input type="text" placeholder="Enter first name"/>
                                </div>
                            </div>

                            <div className="col-6 ps-2">
                                <div className="signinup-group">
                                    <div className="group__label">Last Name</div>
                                    <input type="text" placeholder="Enter last name"/>
                                </div>
                            </div>

                            <div className="col-sm-6 pe-sm-2">
                                <div className="signinup-group sgli">
                                    <div className="group__label">Phone Number</div>
                                    <input type="number" placeholder="Enter phone number"/>
                                    <span className="group_left_icon">+91</span>
                                </div>
                            </div>

                            <div className="col-sm-6 ps-sm-2">
                                <div className="signinup-group error-group">
                                    <div className="group__label">Your email</div>
                                    <input type="email" placeholder="you@example.com"/>
                                    <span className="form-error-msg">You must provide an email</span>
                                </div>
                            </div>
                            
                            <div className="col-6 pe-2">
                                <div className="signinup-group sgri">
                                    <div className="group__label">Gender</div>
                                    <select>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                    <span className="down-icon"></span>
                                </div>
                            </div>
                            
                            <div className="col-6 ps-2">
                                <div className="signinup-group">
                                    <div className="group__label">Date of birth</div>
                                    <input type="text" inputMode="numeric"  value={bodValue}  onChange={handlebodChange} placeholder="DD/MM/YYYY"/>
                                    <span className="clear-input-icon" hidden={isbodShow} onClick={handlebodClear}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                    </span>
                                </div>
                            </div>

                            {[0, 1].map((index) => (
                            <div className={`col-sm-6 ${[index] ? 'pe-sm-2' : 'ps-sm-2'}`} key={index}>
                                <div className="signinup-group sgri">
                                    <div className="group__label">{index === 0 ? "Password" : "Confirm password"} </div>
                                    <input type={showPasswords[index] ? 'text' : 'password'} placeholder={`Enter ${index === 0 ? "" : "confirm"} password`}/>
                                    <span className={`group_right_icon ${showPasswords[index] ? "active" : "" }`} onClick={() => togglePasswordVisibility(index)} >
                                        {showPasswords[index] ? viewpassSvg() : hidepassSvg()}
                                    </span>
                                </div>
                            </div>
                            ))}
                        

                        </div>

                        <div className="site-info text-center">
                            By continuing you agree to Crash Game <Link to="/terms">Terms & Conditions</Link> & <Link to="/privacy">Privacy Policy</Link>.
                        </div>

                        <button type="button"  className="login-submit-btn" disabled>Continue</button>

                        <div className="lsb-loader-btn">
                            <img src={Img.loading} alt="Please wait" />Please wait ....
                        </div>

                        <div className="signuptooglebtn text-center mt-2">Already have an account?
                        <Link to='/signin' className='login-this'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            Login
                        </Link>
                        </div>

                    </form>

                </div>

            </div>
        </>
    );
};