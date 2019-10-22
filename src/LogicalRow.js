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
    let cols = this.props.semantic_morphology.map(sl => (
      <LogicCol
        key={sl.ref.join("|")}
        reference={sl.ref.join("|")}
        prolog={sl.prolog}
      />
    ));
    return (
      <>
        <Row>
          <h5>Enriched Logical Formulas</h5>
        </Row>
        <Row>{cols}</Row>
      </>
    );
  }
}

export default LogicRow;
