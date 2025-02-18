import './App.css';
import Header from "./services/components/Header/header";
import Footer from "./services/components/Footer/footer";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Accueil from "./pages/Accueil";
import Details from "./pages/Details";
import ErrorPage from "./pages/404/ErrorPage";
import RoutePosts from "./services/Router/RoutePosts";
import {PostCards} from "./services/components/cards/cards";
import PostsAPI from "./services/postsAPI";
import {useEffect, useState} from "react";

function App() {


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    PostsAPI.getPosts().then(response => {setPosts(response.data);})
  }, []);
  //{posts.map(post => <PostCards key={post.id} {...post}></PostCards>)}



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
