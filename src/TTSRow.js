import React from "react";
import ReactPlayer from "react-player";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class TTSCol extends React.Component {
  render() {
    return (
      <Col>
        <p>{this.props.generated_text}</p>
        <ReactPlayer
          url={"snds/" + this.props.tts}
          controls
          width={"100%"}
          height={"25px"}
        />
      </Col>
    );
  }
}

class TTSRow extends React.Component {
  render() {
    let keys = Array.from(this.props.tts.keys());
    let cols = keys.map(key => (
      <TTSCol
        key={key}
        generated_text={this.props.generated_text[key]}
        tts={this.props.tts[key]}
      />
    ));
    return (
      <>
        <Row className="tts">
          <h5>Prosodics Markers Association & TTS</h5>
        </Row>
        <Row className="tts">{cols}</Row>
      </>
    );
  }
}

export default TTSRow;
