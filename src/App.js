import React from "react";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={SignupForm} />
        <Route path="/home" component={Home} />
        <Route path="/search" component={SearchPage} />
        <Route path="/search/:category" component={SearchPage} />
        <Route path="/search/:category/:subcat" component={SearchPage} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
