import react from "react";
import { Route, Switch } from "react-router-dom";

import home from "./components/Home";
import Landing from "./components/LandingPage"
import Card from "./components/Card";
import "./App.css";
import Create from "./components/Create";
import NavBar from "./components/NavBar";
import pokemonDetail from "./components/pokemonDetail";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
        <Route path="/:any" component={NavBar} />
        <Route exact path="/home" component={SearchBar} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/home" component={home} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/" component={Landing} />
        <Route path="/pokemons/:id" component={pokemonDetail}/>
    </div>
  );
}

export default App;
