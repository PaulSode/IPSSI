import Bouton from "../services/components/button/button";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import RoutePosts from "../services/Router/RoutePosts";
import {PostCards} from "../services/components/cards/cards";
import PostsAPI from "../services/postsAPI";


const Accueil = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        PostsAPI.getPosts().then(response => {console.log(response); setPosts(response.results || []);})
    }, []);


    return <>
    <h1>Monstres</h1>

        {posts.map(post => <PostCards key={post .id} {...post}></PostCards>)}
    </>
};

export default Accueil;