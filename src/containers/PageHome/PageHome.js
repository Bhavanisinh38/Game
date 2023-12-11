import React from 'react';
import { Helmet } from "react-helmet-async";

//Css File
import "../../css/gamesreen.css";

// Design File
import Subloader from "../../components/Subloader"
import PageGamesreen from "./PageGamesreen";
import PageGamebtn from "./PageGamebtn";

export default function PageHome() {
  return (
    <>
      <Helmet>
        <title>Game</title>
      </Helmet>

      <Subloader />
      <PageGamesreen />
      <PageGamebtn />
    </>
  );
};
