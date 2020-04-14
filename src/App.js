import React from "react";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={SignupForm} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
