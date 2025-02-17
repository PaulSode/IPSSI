import './App.css';
import Cards from "./services/components/cards/cards";
import Header from "./services/components/header";
import Footer from "./services/components/footer";

function App() {

  const users = [
    {id:1, nom:"Macron", prenom:"Emmanuel"},
    {id:2, nom:"WARIO", prenom:"WALUIGI"},
    {id:3, nom:"999", prenom:"SCP"},
    {id:4, nom:"Le Lion", prenom:"Alex"}
  ];

  return <>
    <Header></Header>
    {users.map(user => <Cards key={user.id} {...user}></Cards>)}
    <Footer></Footer>
  </>

}

export default App;
