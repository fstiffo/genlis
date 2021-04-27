import React from "react";
import ReactPlayer from "react-player";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class VideoCol extends React.Component {
  render() {
    return (
      <Col>
        <hr />
        <h4>{this.props.text}</h4>
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=" + this.props.youtube}
        />
      </Col>
    );
  }
}

class VideoRow extends React.Component {
  render() {
    let keys = Array.from(this.props.texts.keys());
    let cols = keys.map((key) => (
      <VideoCol
        key={key}
        text={this.props.texts[key]}
        youtube={this.props.youtube[key]}
      />
    ));
    return <Row>{cols}</Row>;
  }
}

export default VideoRow;
