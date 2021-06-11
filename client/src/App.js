import react from "react";
import { Route, Switch } from "react-router-dom";

import home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div>
      
        <Route exact path="/" component={home} />
     
    </div>
  );
}

export default App;
