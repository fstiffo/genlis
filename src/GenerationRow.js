import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class GenerationCol extends React.Component {
  render() {
    let ps = [];
    let entries = this.props.turns.entries();
    for (let e of entries) {
      ps.push(<p key={e[0]}>{e[1]}</p>);
    }
    return <Col>{ps}</Col>;
  }
}

class GenerationRow extends React.Component {
  render() {
    return (
      <>
        <Row>
          <h5>General Generation</h5>
        </Row>
        <Row>
          <GenerationCol turns={this.props.discourse_anaph[0]} />
          <Col>
            <h4 class="text-center">
              <i class="fa fa-chevron-right" />
            </h4>
          </Col>
          <GenerationCol key={3} turns={this.props.discourse_anaph[1]} />
        </Row>
      </>
    );
  }
}

export default GenerationRow;
