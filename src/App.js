import React from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="allwrapper">
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
