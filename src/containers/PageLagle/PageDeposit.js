import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Images Common File
import demo_img from '../../img/demo.png'

export default function PageAbout() {
  return (
    <>

      <Helmet>
        <title>How to make deposit | Game</title>
      </Helmet>

      <div className='breadcrumb-outer'>
          <div className='container-lg'>   
              <div className='breadcrumb-bx'>
                  <Link className='breadcrumb-link' to="/">Home<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                  <Link className='breadcrumb-link breadcrumb-active'>How to make deposit</Link>
              </div>
          </div>
      </div>

      <section className="mb-5">
          <div className="container-lg lagle-container">
              <div className="lagle-heading">How to make deposit</div>

                <div className="pt-3"></div>

                <div className="row align-items-center py-2">
                    <div className="col-md-6 order-2 order-md-1">
                        <div className="common-text-layout">
                            <div className="ctl-tag"><span className="ctl-t-num">1</span> Step</div>
                            <div className="ctl-heading">Lorem Ipsum is simply</div>
                            <p className="ctl-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="common-digital-layout">
                            <img className="cdl-img" src={demo_img} alt="Stpe 1" />
                        </div>
                    </div>
                </div>

                <div className="row align-items-center py-2 mt-5 mt-md-3">
                    <div className="col-md-6">
                        <div className="common-digital-layout">
                            <img className="cdl-img" src={demo_img} alt="Stpe 1" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="common-text-layout">
                            <div className="ctl-tag"><span className="ctl-t-num">2</span>Step</div>
                            <div className="ctl-heading">Lorem Ipsum is simply</div>
                            <p className="ctl-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center py-2 mt-5 mt-md-3">
                    <div className="col-md-6 order-2 order-md-1">
                        <div className="common-text-layout">
                            <div className="ctl-tag"><span className="ctl-t-num">3</span> Step</div>
                            <div className="ctl-heading">Lorem Ipsum is simply</div>
                            <p className="ctl-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="common-digital-layout">
                          <img className="cdl-img" src={demo_img} alt="Stpe 3" />
                        </div>
                    </div>
                </div>

          </div>
      </section>

    </>
  );
};
