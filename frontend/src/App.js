import React, { useState, useEffect } from "react";
import "./style/css/App.css";
import {Dropdown, Navbar} from "./components";
import { Route, Switch } from "react-router-dom";
import { Home, Anime } from "./pages";

function App() {
  const [collapsed, collapse] = useState(true);

  const toggle = () => {
    collapse(!collapsed);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && !collapsed) {
        collapse(true);
      }
    };

    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown collapsed={collapsed} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/anime/:id" component={Anime}></Route>
      </Switch>
    </>
  );
}

export default App;
