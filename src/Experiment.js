import React from "react";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import VideoRow from "./VideoRow";
import GlossRow from "./GlossRow";
import SemanticRow from "./SemanticRow";
import data from "./data";

class ChevronDown extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <h4 class="text-center">
            <i class="fa fa-chevron-down" />
          </h4>
        </Col>
      </Row>
    );
  }
}

class DiscourseUnit extends React.Component {
  render() {
    let id = this.props.id;
    let du = data.find(e => e.id === id);
    return (
      <>
        <h3>Discourse Unit {id}</h3>
        <VideoRow texts={du.texts} youtube={du.youtube} />
        <ChevronDown />
        <GlossRow images={du.images} glosses={du.glosses} />
        <ChevronDown />
        <SemanticRow syntax_lexicon={du.syntax_lexicon} />
        <ChevronDown />
      </>
    );
  }
}

const Experiment = () => {
  let { id } = useParams();
  let safeId = typeof id === "undefined" ? "20" : id;
  return <DiscourseUnit id={safeId} />;
};

export default Experiment;
