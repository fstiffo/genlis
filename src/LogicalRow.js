import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

class LogicCol extends React.Component {
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

class LogicRow extends React.Component {
  render() {
    let cols = this.props.semantic_morphology.map((e) => (
      <LogicCol
        key={e.ref.join(", ")}
        reference={e.ref.join(", ")}
        prolog={e.prolog}
      />
    ));
    return (
      <>
        <Row className="logical">
          <h5>Enriched Logical Formulas</h5>
        </Row>
        <Row className="logical">{cols}</Row>
      </>
    );
  }
}

export default LogicRow;
