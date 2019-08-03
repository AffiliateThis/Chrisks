import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Aboutme from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" Component={LandingPage} />
    <Route path="/aboutme" Component={Aboutme} />
    <Route path="/contact" Component={Contact} />
    <Route path="/projects" Component={Projects} />
    <Route path="/resume" Component={Resume} />
  </Switch>
);

export default Main;
