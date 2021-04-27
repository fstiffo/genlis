import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";
import Home from "./Home";
import HowTo from "./HowTo";
import Experiment from "./Experiment";

import "./App.css";

const expItems = () => {
  let items = [];
  for (let i = 1; i < 31; i++) {
    items.push(
      <NavDropdown.Item key={i} href={"/experiment/" + i}>
        {"Discourse Unit " + i}
      </NavDropdown.Item>
    );
  }
  return items;
};

const App = () => (
  <ErrorBoundary>
    <Router>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Navbar.Brand href="/">GENLIS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/how-to">How To</Nav.Link>
              <NavDropdown title="Experiment" id="collasible-nav-dropdown">
                {expItems()}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="p-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/how-to" component={HowTo} />
            <Route path="/experiment/:id" component={Experiment} />
          </Switch>
        </Container>
        <Container className="p-3 footer">
          <div className="dropdown-divider" />
          <p class="small">
            Our grateful thanks to{" "}
            <a href="https://www.babacova.com/" class="text-info">
              ALBA cooperativa sociale onlus
            </a>{" "}
            &nbsp;
            <Button
              href="https://www.facebook.com/albacoop/"
              variant="outline-info"
              size="sm"
            >
              <i class="fab fa-facebook" />
            </Button>
            &nbsp; for the permission to utilize its videos.
          </p>
        </Container>
      </div>
    </Router>
  </ErrorBoundary>
);

export default App;
