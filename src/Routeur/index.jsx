import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../Style/main.scss";

import Header from "../Components/Layouts/header";
import Footer from "../Components/Layouts/footer";

import Home from "../Pages/home";
// import FicheLogement from "../pages/fiche-logement";
// import APropos from "../pages/a-propos";
// import Error404 from "../pages/404";



const PublicRouter = () => {
  return (
      // <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" Component={Home}></Route>
            {/* <Route path="/logement/:id" Component={FicheLogement}></Route> */}
            {/* <Route path="/about" Component={APropos}></Route> */}
            {/* <Route path="*" Component={Error404}></Route> */}
          </Routes>
          <Footer />
        </Router>
      // </div>
  );
};

export default PublicRouter;