import './App.css';
import Header from "./services/components/Header/header";
import Footer from "./services/components/Footer/footer";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import RoutePosts from "./services/Router/RoutePosts";
import PostsAPI from "./services/postsAPI";
import {useEffect, useState} from "react";

function App() {

  return <>
    <Header></Header>
    <Router>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/details">Details</Link>
      </nav>
      <RoutePosts></RoutePosts>
    </Router>)


    <Footer></Footer>
  </>

}

export default App;
