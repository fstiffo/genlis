import React from "react";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import VideoRow from "./VideoRow";
import GlossRow from "./GlossRow";
import SemanticRow from "./SemanticRow";
import LogicalRow from "./LogicalRow";
import GenerationRow from "./GenerationRow";
import TTSRow from "./TTSRow";

import data from "./data";

class DiscourseUnitNav extends React.Component {
  render() {
    console.log(this.props.du_id);
    let prevId = this.props.du_id === "1" ? 1 : this.props.du_id * 1 - 1;
    let prevDisable = this.props.du_id === "1";
    let nextId = this.props.du_id === "30" ? 30 : this.props.du_id * 1 + 1;
    console.log(nextId);
    let nextDisable = this.props.du_id === "30";
    return (
      <Navbar bg="light" variant="light" fixed="top" className="du-nav">
        <Navbar.Brand href="/experiment/19">Experiment</Navbar.Brand>
        <Nav>
          <Nav.Link href={"/experiment/" + prevId} disabled={prevDisable}>
            <i className="fa fa-angle-left" /> PREV DU
          </Nav.Link>
          <Nav.Link href={"/experiment/" + nextId} disabled={nextDisable}>
            NEXT DU <i className="fa fa-angle-right" />
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

class ChevronDown extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <h4 className="text-center">
            <i className="fa fa-arrow-down" />
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
      <div className="du">
        <h3>Discourse Unit {id}</h3>
        <VideoRow texts={du.texts} youtube={du.youtube} />
        <ChevronDown />
        <GlossRow images={du.images} glosses={du.glosses} />
        <ChevronDown />
        <SemanticRow syntax_lexicon={du.syntax_lexicon} />
        <ChevronDown />
        <LogicalRow semantic_morphology={du.semantics_morphology} />
        <ChevronDown />
        <GenerationRow discourse_anaph={du.discourse_anaph} />
        <ChevronDown />
        <TTSRow generated_text={du.generated_text} tts={du.tts} />
      </div>
    );
  }
}

const Experiment = () => {
  let { id } = useParams();
  let safeId = typeof id === "undefined" ? "19" : id;
  return (
    <>
      <DiscourseUnitNav du_id={safeId} />
      <DiscourseUnit id={safeId} />
    </>
  );
};

export default Experiment;
