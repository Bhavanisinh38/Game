import React from "react";
import MyRouter from "./routers/index";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Crash Game</title>
        <meta name="description" content="Cursh Game"/>
      </Helmet>


      <MyRouter />

    </HelmetProvider>
  );
}

export default App;
