import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/screens/Home";
import SignIn from "./components/screens/SignIn";
import Signup from "./components/screens/Signup";
import Profile from "./components/screens/Profile.js";
import CretePost from "./components/screens/CretePost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/create">
        <CretePost />
      </Route>
    </BrowserRouter>
  );
}

export default App;
