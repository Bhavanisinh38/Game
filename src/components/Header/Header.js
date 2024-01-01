import React from 'react'
import {Link} from "react-router-dom";

// Images Common File
import * as Img from '../Img';
import rupeeicon from '../../img/icons/rupee-icon.png'

// Css File
import '../../css/header.css'

// Design File
import { useMenu } from './MenuContext';
import Sidemenu from "./Sidemenu";


export default function Header() {

  const { toggleMenu } = useMenu();

  return (
    <>
      <header className="main-header">
        <div className="mh-inner max-w-1920">

          <div className="mh-left">
            <Link to="/" className="logo-links">
              <img src={Img.logo_white} alt="Game" />
            </Link>
          </div>

          <div className="mh-right d-flex align-items-center">


            <div className="signinup-btn-bx">

              <Link style={{padding: "5px 6px"}} to="/wallet" className='sip-wallet-btn' title="Add money">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span> <img src={rupeeicon} alt="Rupee Icon" /></span>
              </Link>

              <Link to="/wallet" className='sip-wallet-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
                <span>$99,99,999</span>

                {/* show-wn with added-wn or less-wn */}
                {/* <div className="sip-wallet-notis show-wn less-wn">+ $1,00,000</div> */}
              </Link>

              <Link to="/account" className="sip-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span>User Name</span>
              </Link>
            </div>

            {/* aside Menu Icon Start */}
            <div className="menu-icon-bx" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* aside Menu Icon End */}
            
          </div>
        </div>
      </header>

      <Sidemenu />
    </>
  );
};
