import './App.css';
import Cards from "./services/components/cards/cards";
import Header from "./services/components/Header/header";
import Footer from "./services/components/Footer/footer";
import {tasks} from "./data/users";

function App() {

  return <>
    <Header></Header>
    <h2>Toutes les tâches</h2>
    {tasks.map(user => <Cards key={user.id} {...user}></Cards>)}
    <br></br>
    <h2>Tâches finies</h2>
    {tasks.filter(user => user.fini === "Oui").map(user => <Cards key={user.id} {...user}></Cards>)}
    <Footer></Footer>
  </>

}

export default App;
