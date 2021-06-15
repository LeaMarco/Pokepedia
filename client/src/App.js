import react from "react";
import { Route, Switch } from "react-router-dom";

import home from "./components/Home";
import landing from "./components/LandingPage"
import Card from "./components/Card";
import "./App.css";
import Create from "./components/Create";
import NavBar from "./components/NavBar";
import pokemonDetail from "./components/pokemonDetail";

function App() {
  return (
    <div>
        <NavBar/>
        <Route exact path="/card" component={Card} />
        <Route exact path="/home" component={home} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/" component={landing} />
        <Route path="/pokemon/:id" component={pokemonDetail}/>
    </div>
  );
}

export default App;
