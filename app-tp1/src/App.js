import './App.css';
import {Cards, PostCards} from "./services/components/cards/cards";
import Header from "./services/components/Header/header";
import Footer from "./services/components/Footer/footer";
import Bouton from "./services/components/button/button";
import {tasks} from "./data/users";
import {useEffect, useState} from "react";

function App() {

  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(post => setPosts(post));
  }, []);

  console.log(posts);

  useEffect(() => {}, [])

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return <>
    <Header></Header>

    <h1>{count}</h1>
    <Bouton label="Increment" onClick={handleIncrement}></Bouton>
    <Bouton label="Decrement" onClick={handleDecrement}></Bouton>

    <h2>Toutes les tâches</h2>
    {tasks.map(user => <Cards key={user.id} {...user}></Cards>)}
    <br></br>
    <h2>Tâches finies</h2>
    {tasks.filter(user => user.fini === "Oui").map(user => <Cards key={user.id} {...user}></Cards>)}

    {posts.map(post => <PostCards key={post.id} {...post}></PostCards>)}

    <Footer></Footer>
  </>

}

export default App;
