import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";
import Home from "./Home";
import Experiment from "./Experiment";

import "./App.css";

const App = () => (
  <ErrorBoundary>
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">GENLIS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/experiment">Features</Nav.Link>
              <NavDropdown title="Experiment" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/experiment/19">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="/experiment/20">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="/experiment/21">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="p-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/experiment" component={Experiment} />
            <Route path="/experiment/:id" component={Experiment} />
          </Switch>
        </Container>
      </div>
    </Router>
  </ErrorBoundary>
);
export default App;
