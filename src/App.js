import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutCancer from "./pages/AboutCancer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetectCancer from "./pages/DetectCancer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutCancer} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/detect" component={DetectCancer} />
      </Switch>
    </Router>
  );
};

export default App;
