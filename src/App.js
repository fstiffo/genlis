import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Example from "./Example";

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
          <Nav.Link href="/example" eventKey="example">
            Example
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Container className="p-3">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/example">
            <Example />
          </Route>
        </Switch>
      </Container>
    </div>
  </Router>
);
export default App;
