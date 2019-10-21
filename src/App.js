import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Experiment from "./Experiment";

import "./App.css";

const App = () => (
  <Router>
    <div>
      <Nav defaultActiveKey="home" as="ul">
        <Nav.Item>
          <Nav.Link href="/" eventKey="home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/experiment" eventKey="experiment">
            Experiment
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Container className="p-3">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/experiment">
            <Experiment />
          </Route>
        </Switch>
      </Container>
    </div>
  </Router>
);
export default App;
