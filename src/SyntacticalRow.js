import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

class SyntacticalCol extends React.Component {
  render() {
    return (
      <Col>
        <p>
          <Badge variant="info">{this.props.reference}</Badge>
          <br />
          {this.props.prolog}
        </p>
      </Col>
    );
  }
}

class SyntacticalRow extends React.Component {
  render() {
    let cols = this.props.syntactical.map((e) => (
      <SyntacticalCol
        key={e.ref.join(", ")}
        reference={e.ref.join(", ")}
        prolog={e.prolog}
      />
    ));
    return (
      <>
        <Row className="syntactical">
          <h5>Syntactical and Lexical Forms</h5>
        </Row>
        <Row className="syntactical">{cols}</Row>
      </>
    );
  }
}

export default SyntacticalRow;
