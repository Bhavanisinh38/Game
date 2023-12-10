import React, { useState } from 'react';
// import {Link} from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Images Common File
import * as Img from '../../components/Img';

// Design File
import Commonlayout from "./Commonlayout";


export default function PageAccount() {
    
    // Input Field js
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

  return (
    <Commonlayout>

    <Helmet>
        <title>Account | Game</title>
    </Helmet>

    {/* --- Profile Bx Start --- */}
    <div className='amib-inner-item' id="accountprofile">
        <div className="amib-900-width">
            <div className="amib-i-header">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/><path fill="currentColor" d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/></svg>
                Profile
            </div>
            <div className="amib-item pb-2">
                <form action="">
                
                    <div className="row pt-1 pt-lg-3">

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
                        
                    </div>
                    
                    <div className="amib-save-btn-bx">
                        <button type="button" className="common-submit-btn">Update account</button>
                        <div className="lsb-loader-btn">
                            <img src={Img.loading} alt="Please wait" />Please wait ....
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    {/* --- Profile Bx End --- */}

    </Commonlayout>
  );
};
