import './App.css';
import Cards from "./services/components/cards/cards";
import Header from "./services/components/Header/header";
import Footer from "./services/components/Footer/footer";
import {tasks} from "./data/users";

function App() {

  return <>
    <Header></Header>
    {tasks.map(user => <Cards key={user.id} {...user}></Cards>)}
    <Footer></Footer>
  </>

}

export default App;
