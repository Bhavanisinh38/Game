import React from 'react';
import { Helmet } from "react-helmet-async";

//Css File
import "../../css/gamesreen.css";

// Design File
import Subloader from "../../components/Subloader"
import PageGamesreen from "./PageGamesreen";
import PageGamebtn from "./PageGamebtn";
import PageGamehistory from "./PageGamehistory";
import PageGameplayers from './PageGameplayers';

export default function PageHome() {
  return (
    <>
      <Helmet>
        <title>Game</title>
      </Helmet>

      <Subloader />

      
      

      <section className="pt-lg-4 pt-0 pb-4 pb-lg-4">
        <div className="gamesreen-container">
          <div className="row">
            
            <div className="col-xl-3 col-lg-4 order-2 order-lg-1 mt-4 mt-lg-0">
              <PageGameplayers />
            </div>

            <div className="col-xl-9 col-lg-8 order-1 order-lg-2">

              <div className="row">
                <div className="col-12 px-0">
                  <PageGamesreen />
                </div>

                <div className="col-xl-7 col-md-6 order-2 order-md-1 mt-4">
                  <PageGamehistory />
                </div>

                <div className="col-xl-5 col-md-6 order-1 order-md-2 mt-4">
                  <PageGamebtn />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      
    </>
  );
};
