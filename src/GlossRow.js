import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";

class GlossCol extends React.Component {
  render() {
    return (
      <Col>
        <Figure>
          <Figure.Image src={"imgs/" + this.props.image} />
          <Figure.Caption>{this.props.gloss}</Figure.Caption>
        </Figure>
      </Col>
    );
  }
}

class GlossRow extends React.Component {
  render() {
    let keys = Array.from(this.props.images.keys());
    let cols = keys.map(key => (
      <GlossCol
        key={key}
        image={this.props.images[key]}
        gloss={this.props.glosses[key]}
      />
    ));
    return (
      <>
        <Row>
          <h5>Glosses</h5>
        </Row>
        <Row>{cols}</Row>
      </>
    );
  }
}

export default GlossRow;
