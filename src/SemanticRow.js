import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

class SemanticCol extends React.Component {
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

class SemanticRow extends React.Component {
  render() {
    let cols = this.props.syntax_lexicon.map(sl => (
      <SemanticCol
        key={sl.ref.join("|")}
        reference={sl.ref.join("|")}
        prolog={sl.prolog}
      />
    ));
    return (
      <>
        <Row>
          <h5>Semantic Formulas</h5>
        </Row>
        <Row>{cols}</Row>
      </>
    );
  }
}

export default SemanticRow;
