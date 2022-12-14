import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Order from "./pages/Order"
import Checkout from "./pages/Cart";
import './style.css'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/order">
                <Order/>
            </Route>
            <Route path="/cart">
                <Checkout/>
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
