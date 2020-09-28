import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// Importing components
import Nav from "./components/Nav/Nav";
import Expenses from "./components/Expenses/Expenses";
import Summary from "./components/Summary/Summary";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <div className="App">
      <header>
        <p className="date">Date</p>
        <button className="new-book-btn">New Book</button>
      </header>
      <Nav />
      <Switch>
        <Route exact path="/" render={Expenses} />
        <Route exact path="/Summary" render={Summary} />
        <Route exact path="/Settings" render={Settings} />
      </Switch>
    </div>
  );
}

export default App;
