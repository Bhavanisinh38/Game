import React, { useState }  from 'react';
import { Helmet } from "react-helmet-async";

// Images Common File
import * as Img from '../../components/Img';

// Design File
import Commonlayout from "./Commonlayout";


export default function PageBankDetail() {

    // Screen section Tabbing Js
    const [amibSection, setAmibSection] = useState('accountdetail');

    const handleAmibSection = (AmibSectionId) => {
        setAmibSection(AmibSectionId);
    };

  return (
    <Commonlayout>
        
    <Helmet>
        <title>Bank Details | Game</title>
    </Helmet>

    {/* --- Profile Bx Start --- */}
    <div className='amib-inner-item'>
        <div className="amib-768-width">
            <div className="amib-i-header">
                <svg style={{position:"relative",top:"-3px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                Bank Details
            </div>

            <div className="amib-item pb-2">

                <div className="amib-inner-tabbx commonscrollbarhide mt-3 mt-md-0 mb-4">
                    <div className={`ait-link ${amibSection === 'accountdetail' ? 'active' : ''}`} onClick={() => handleAmibSection('accountdetail')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                        </svg>
                        Bank Account
                    </div>
                    <div className={`ait-link ${amibSection === 'UPIId' ? 'active' : ''}`} onClick={() => handleAmibSection('UPIId')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                        </svg>
                        Upi Id
                    </div>
                </div>

                <div className={`amib-i-tab ${amibSection === 'accountdetail' ? 'active' : ''}`} id="accountdetail">
                    <form action="">
                        <div className="row">

                            <div className="col-sm-6 pe-sm-2">
                                <div className="signinup-group">
                                    <div className="group__label">Account Holder Name</div>
                                    <input type="text" placeholder="Enter account holder name"/>
                                </div>
                            </div>

                            <div className="col-sm-6 ps-sm-2">
                                <div className="signinup-group">
                                    <div className="group__label">Bank Name</div>
                                    <input type="text" placeholder="Enter bank name"/>
                                </div>
                            </div>

                            <div className="col-sm-6 pe-sm-2">
                                <div className="signinup-group">
                                    <div className="group__label">Branch Name</div>
                                    <input type="text" placeholder="Enter branch name"/>
                                </div>
                            </div>

                            <div className="col-sm-6 ps-sm-2">
                                <div className="signinup-group">
                                    <div className="group__label">Account Number</div>
                                    <input type="text" placeholder="Enter account number"/>
                                </div>
                            </div>

                            <div className="col-sm-6 pe-sm-2">
                                <div className="signinup-group">
                                    <div className="group__label">IFSC Code</div>
                                    <input type="text" placeholder="Enter IFSC Code"/>
                                </div>
                            </div>

                        </div>

                        <div className="amib-save-btn-bx mt-1">
                            <button type="button" className="common-submit-btn">Update account</button>
                            <div className="lsb-loader-btn">
                                <img src={Img.loading} alt="Please wait" />Please wait ....
                            </div>
                        </div>
                    </form>
                </div>

                <div className={`amib-i-tab ${amibSection === 'UPIId' ? 'active' : ''}`} id="UPIId">
                    <form action="">
                        <div className="row">

                            <div className="col-sm-6 pe-sm-2">
                                <div className="signinup-group">
                                    <div className="group__label">Upi Id</div>
                                    <input type="text" placeholder="Enter upi id"/>
                                </div>
                            </div>

                        </div>

                        <div className="amib-save-btn-bx mt-1">
                            <button type="button" className="common-submit-btn">Update upi</button>
                            <div className="lsb-loader-btn">
                                <img src={Img.loading} alt="Please wait" />Please wait ....
                            </div>
                        </div>
                    </form>
                </div>

  
            </div>

        </div>
    </div>
    {/* --- Profile Bx End --- */}

    </Commonlayout>

    
  );
};
