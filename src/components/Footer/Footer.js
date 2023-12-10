import React from 'react';
import { NavLink } from "react-router-dom";

// Css File
import '../../css/footer.css'

export default function Footer() {
  return (
    <>
        <footer className="pt-4">
            <div className="container-lg pt-3">
                <div className="row">

                    <div className="col-12">
                        <div className="footer-links-bx justify-content-center">
                            <NavLink to="/" className="footer-link">Home</NavLink>
                            <NavLink to="/about" className="footer-link">About</NavLink>
                            <NavLink to="/faqs" className="footer-link">FAQs</NavLink>
                            <NavLink to="/privacy" className="footer-link">Privacy</NavLink>
                            <NavLink to="/terms" className="footer-link">Terms</NavLink>
                            <NavLink to="/contact" className="footer-link">Contact</NavLink>
                            <NavLink to="/sitemap" className="footer-link">Sitemap</NavLink>
                        </div>
                    </div>

                    <div className="col-12 mt-2">
                        <div className="footer-links-bx justify-content-center">
                            <a href="https://g.page/pmcommu?share" target="_blank" rel="noreferrer" className="footer-link address-link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                PM Communications, 6th Floor, Zydus Tower, Astron Tower, Iskcon Cross Rd, Satellite, Ahmedabad, Gujarat 380015
                            </a>
                        </div>
                    </div>

                    <div className="col-12 mt-2">
                        <div className="footer-links-bx justify-content-center">
                            <a href="mailto:info@pmcommu.com" className="footer-link mail-link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                info@pmcommu.com
                            </a>
                            <a href="tel:+918128181082" className="footer-link phone-link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                +91 812 818 1082
                            </a>
                        </div>
                    </div>

                    <div className="col-12 mt-2">

                    </div>

                </div>
                <div className="footer-bottom">
                    <div className="copyright">© 2023 Game. All Rights Reserved.</div>
                    <div className="mede-with">Made with
                        <span className="icons-box-made">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </span>
                        by: <a href="https://pmcommu.com/" target="_blank" rel="noreferrer">PM Communications</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};
