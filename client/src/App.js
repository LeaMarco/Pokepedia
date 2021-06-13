import react from "react";
import { Route, Switch } from "react-router-dom";

import home from "./components/Home";
import landing from "./components/LandingPage"
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div>
        <Route exact path="/card" component={Card} />
        <Route exact path="/home" component={home} />
        <Route exact path="/" component={landing} />
    </div>
  );
}

export default App;
