import React from 'react';
import { Helmet } from "react-helmet-async";

// Images Common File
import * as Img from '../../components/Img';

// Design File
import Commonlayout from "./Commonlayout";


export default function PageNotifications() {

  return (
    <Commonlayout>
        
    <Helmet>
        <title>Notifications | Game</title>
    </Helmet>

    {/* --- Profile Bx Start --- */}
    <div className='amib-inner-item'>
        <div className="amib-992-width">
            <div className="amib-i-header">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                Notifications
            </div>

            <div className="empty-div-bx">
                <img className="empty-img" src={Img.empty} alt="Data is not available" />
                <div className="empty-heading">Not Found</div>
                <div className="empty-sub-heading">There are no new notifications</div>
            </div>

            <div className="amib-item mt-3 mt-lg-0">

                <form action="">
                    <div className="notification-list-bx">
                        <div className="nlb-outer">
                            <div className="nlb-outer-label">To day</div>

                            <div className="nlb-item nlb-new">
                                <div className="nlb-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                </div>
                                <div className="nlb-data">
                                    <div className="nlb-lable">Share with loved ones</div>
                                    <div className="nlb-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi adipisci id esse obcaecati sequi, hic quisquam corrupti aperiam expedita, dignissimos, ducimus iste dolor libero in commodi? Hic est sequi fugiat recusandae ad?</div>
                                </div>
                            </div>

                            <div className="nlb-item nlb-new">
                                <div className="nlb-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                </div>
                                <div className="nlb-data">
                                    <div className="nlb-lable">Share with loved ones</div>
                                    <div className="nlb-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi adipisci id esse obcaecati sequi, hic quisquam corrupti aperiam expedita, dignissimos, ducimus iste dolor libero in commodi? Hic est sequi fugiat recusandae ad?</div>
                                </div>
                            </div>
                        </div>

                        <div className="nlb-outer">
                            <div className="nlb-outer-label">Yesterday</div>

                            <div className="nlb-item">
                                <div className="nlb-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                </div>
                                <div className="nlb-data">
                                    <div className="nlb-lable">Share with loved ones</div>
                                    <div className="nlb-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi adipisci id esse obcaecati sequi, hic quisquam corrupti aperiam expedita, dignissimos, ducimus iste dolor libero in commodi? Hic est sequi fugiat recusandae ad?</div>
                                </div>
                            </div>

                            <div className="nlb-item">
                                <div className="nlb-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                </div>
                                <div className="nlb-data">
                                    <div className="nlb-lable">Share with loved ones</div>
                                    <div className="nlb-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi adipisci id esse obcaecati sequi, hic quisquam corrupti aperiam expedita, dignissimos, ducimus iste dolor libero in commodi? Hic est sequi fugiat recusandae ad?</div>
                                </div>
                            </div>
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
