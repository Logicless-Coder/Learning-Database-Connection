import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// COMPONENTS
import Register from "./Components/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
