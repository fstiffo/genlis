import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class MyCarousel extends React.Component {
  render() {
    return (
      <Carousel interval={null}>
        <Carousel.Item>
          <h2>My first slide</h2>
        </Carousel.Item>
        <Carousel.Item>
          <h2>My second slide</h2>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Carousel.Item>
        <Carousel.Item>
          <h2>My third slide</h2>
        </Carousel.Item>
      </Carousel>
    );
  }
}

class Example extends React.Component {
  render() {
    return <MyCarousel />;
  }
}

export default Example;
