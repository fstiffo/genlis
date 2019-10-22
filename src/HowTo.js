import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";

const HowTo = () => {
  return (
    <>
      <h3>How To</h3>
      <Figure>
        <Figure.Image src="/imgs/flowchart.png" />
        <Figure.Caption>
          Flowchart of the algorithm to generate TTS from glosses
        </Figure.Caption>
      </Figure>
      <Figure>
        <Figure.Image src="/imgs/additions.png" />
        <Figure.Caption>Details of algorythm steps 3 and 4</Figure.Caption>
      </Figure>
    </>
  );
};

export default HowTo;
