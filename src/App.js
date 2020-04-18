import React from "react";
import Navbar from "./components/Navbar";
import LoginForm from "./components/userForms/LoginForm";
import SignupForm from "./components/userForms/SignupForm";
import Home from "./components/home/Home";
import SearchPage from "./components/searchpage/SearchPage";
import { Switch, Route, Redirect } from "react-router-dom";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={SignupForm} />
        <Route path="/home" component={Home} />
        <Route path="/search/:category/:subcat" component={SearchPage} />
        <Route path="/search/:category" component={SearchPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/cart" component={Cart} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
