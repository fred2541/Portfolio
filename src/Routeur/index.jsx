import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../Style/main.scss";

import Header from "../Components/Layouts/header";
import Footer from "../Components/Layouts/footer";

import Home from "../Pages/home";
import Portfolio from "../Pages/portfolio";
import Contact from "../Pages/contact";
// import FicheLogement from "../pages/fiche-logement";
// import APropos from "../pages/a-propos";
// import Error404 from "../pages/404";

// https://www.framer.com/motion/

const PublicRouter = () => {
  return (
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" Component={Home}></Route>
            <Route path="/portfolio" Component={Portfolio}></Route>
            <Route path="/contact" Component={Contact}></Route>
            {/* <Route path="*" Component={Error404}></Route> */}
          </Routes>
          <Footer />
        </Router>
  );
};

export default PublicRouter;