
import React from 'react';
import {Link, NavLink} from "react-router-dom";

// Images Common File
import * as Img from '../Img';

// Css File
import '../../css/sidemenu.css'

// Design Files
import { useMenu } from './MenuContext';

export default function Sidemenu() {

    const { isActive, toggleMenu } = useMenu();

    return (
        <>
            <aside className={`side-menu-bx ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="smb-logo-bx">
                    <span style={{top:"17px"}} className="close-icon trigger-closed" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                    </span>
                    <Link to="/" className="smb-logo-link">
                        <img className='logo-img' src={Img.logo_white} alt="adstart" />
                    </Link>
                </div>

                <div className="smb-menu-bx">
                    <NavLink to="/account" className="account-left-pic">
                        {/* <img className="alp-img" src={Img.icon_white} alt="" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <div className="alp-data">
                            <div className="alp-name-lable">User Name</div>
                            <div className="alp-email-lable">+91 9876543210</div>
                        </div>
                    </NavLink>
                    <ul className="pb-0">
                        <li>
                            <NavLink to="/account" className="smb-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/>
                                    <path fill="currentColor" d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/>
                                </svg>
                                Account
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/wallet" className="smb-link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                                </svg>
                                Wallet ($99,99,999)
                            </NavLink>
                        </li>
                        <li>
                            <div className="smb-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M378 108a191.41 191.41 0 0170 148c0 106-86 192-192 192S64 362 64 256a192 192 0 0169-148M256 64v192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                                </svg>
                                Logout
                            </div>
                        </li>
                    </ul>

                    <ul>
                        <div className="smb-nav-lable mt-3 mb-2">Usefull link</div>
                        <li><NavLink to="/" className="smb-link">Game</NavLink></li>
                        <li><NavLink to="/about" className="smb-link">About</NavLink></li>
                        <li><NavLink to="/faqs" className="smb-link">FAQs</NavLink></li>
                        <li><NavLink to="/privacy" className="smb-link">Privacy</NavLink></li>
                        <li><NavLink to="/terms" className="smb-link">Terms</NavLink></li>
                        <li><NavLink to="/contact" className="smb-link">Contact</NavLink></li>
                        <li><NavLink to="/sitemap" className="smb-link">Sitemap</NavLink></li>
                    </ul>
                </div>

            </aside>
            <div className={`overlaydiv ${isActive ? 'active' : ''}`} onClick={toggleMenu}></div>
        </>
    );
};



