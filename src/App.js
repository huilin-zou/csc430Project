import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Order from "./pages/Order"
import './style.css'
import DineIn from "./pages/DineIn";
import TakeOut from "./pages/TakeOut";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/order">
                <Order/>
            </Route>
            <Route path="/dinein">
                <DineIn />
            </Route>
            <Route path ="/takeout">
                <TakeOut />
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
