import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";
import Home from "./Home";
import HowTo from "./HowTo";
import Experiment from "./Experiment";

import "./App.css";

const expItems = () => {
  let items = [];
  for (let i = 19; i < 31; i++) {
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
      </div>
    </Router>
  </ErrorBoundary>
);
export default App;
